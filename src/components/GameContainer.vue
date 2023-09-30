<script>
import MemoryCard from "./MemoryCard.vue";
import PlayerStore from "@/store/PlayerStore.ts";

export default {
  components: {
    MemoryCard,
  },
  props: {
    wordPairs: Array,
  },
  data() {
    return {
      words: this.generateMappedWords(this.wordPairs),
      clickCounter: 0,
      word1: "",
      word2: "",
      matchedPairs: [],
      isGameOverDialogOpen: false,
      currentPlayerIndex: 0, // Track the index of the current player
    };
  },
  methods: {
    generateMappedWords(wordPairs) {
      // Shuffle the wordPairs array
      const shuffledWordPairs = this.shuffleArray(wordPairs);

      // Take the first 10 shuffled pairs
      const wordPairsToUse = shuffledWordPairs.slice(0, 10);

      // Flatten the selected word pairs into an array of words
      const words = wordPairsToUse.flatMap((pair) => [
        pair.word,
        pair.translation,
      ]);

      return this.shuffleArray(words);
      // return words;
    },

    shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    },

    clickCard(word) {
      if (this.clickCounter === 0) {
        this.word1 = word;
        this.clickCounter++;
      } else if (this.clickCounter === 1) {
        this.word2 = word;
        this.clickCounter++;

        // Close both cars if they are not a pair
        if (!this.isWordPairCorrect()) {
          setTimeout(() => {
            this.closeCards();
          }, 500);
        }

        // Reset the click counter and the words
        setTimeout(() => {
          this.word1 = "";
          this.word2 = "";
          this.clickCounter = 0;
        }, 500);
      }
    },

    isWordPairCorrect() {
      const isCorrect =
        this.wordPairs.some(
          (pair) => pair.word === this.word1 && pair.translation === this.word2
        ) ||
        this.wordPairs.some(
          (pair) => pair.word === this.word2 && pair.translation === this.word1
        );

      if (isCorrect) {
        this.matchedPairs.push({ word1: this.word1, word2: this.word2 });
        this.updatePlayerScore(this.currentPlayerIndex);
      } else {
        this.switchPlayerTurn();
      }

      if (this.matchedPairs.length === 10) {
        this.isGameOverDialogOpen = true;
      }

      return isCorrect;
    },

    updatePlayerScore(playerIndex) {
      if (playerIndex >= 0 && playerIndex < PlayerStore.players.length) {
        PlayerStore.players[playerIndex].score++;
      }
    },

    switchPlayerTurn() {
      this.currentPlayerIndex =
        (this.currentPlayerIndex + 1) % PlayerStore.players.length;

      this.$emit("switchPlayerTurn", this.currentPlayerIndex);
    },

    closeCards() {
      this.$children.forEach((child) => {
        child.isCardClicked = false;
      });
    },
  },
};
</script>

<template>
  <v-container>
    <v-row>
      <v-col
        v-for="(word, index) in words"
        :key="index"
        cols="12"
        sm="6"
        md="3"
        lg="3"
      >
        <memory-card :word="word" @clickCard="clickCard" />
      </v-col>
    </v-row>

    <!-- Game over dialog -->
    <v-dialog v-model="isGameOverDialogOpen" max-width="290">
      <v-card>
        <v-card-title class="headline">Congratulations!</v-card-title>
        <v-card-text>
          <span>You have matched all the pairs!</span>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="grey" text @click="isGameOverDialogOpen = false">
            Close
          </v-btn>
          <v-btn color="#00838F" text @click="$emit('retry')">
            Play again</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>
