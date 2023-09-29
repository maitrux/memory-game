<script>
import MemoryCard from "./MemoryCard.vue";

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
      }

      return isCorrect;
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
  </v-container>
</template>
