<script>
import CardStore from "@/store/CardStore.ts";
import MemoryCard from "./MemoryCard.vue";

export default {
  components: {
    MemoryCard,
  },

  data() {
    return {
      words: this.generateMappedWords(CardStore.wordPairs),
      clickCounter: 0,
      word1: "",
      word2: "",
      matchedPairs: [],
    };
  },
  methods: {
    generateMappedWords(wordPairs) {
      // shuffle the wordPairs and then take the first 10
      const wordPairsToUse = wordPairs.slice(0, 10);

      const words = wordPairsToUse.flatMap((pair) => [
        pair.word,
        pair.translation,
      ]);

      return words;
    },

    clickCard(word) {
      if (this.clickCounter === 0) {
        this.word1 = word;
        this.clickCounter++;
      } else if (this.clickCounter === 1) {
        this.word2 = word;
        this.clickCounter++;

        if (this.isWordPairCorrect()) {
          console.log("correct pair");
        } else {
          console.log("wrooong");
        }

        setTimeout(() => {
          this.word1 = "";
          this.word2 = "";
          this.clickCounter = 0;
        }, 500);
      }
    },

    isWordPairCorrect() {
      const isCorrect =
        CardStore.wordPairs.some(
          (pair) => pair.word === this.word1 && pair.translation === this.word2
        ) ||
        CardStore.wordPairs.some(
          (pair) => pair.word === this.word2 && pair.translation === this.word1
        );

      if (isCorrect) {
        this.matchedPairs.push({ word1: this.word1, word2: this.word2 });
      }

      return isCorrect;
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

<style scoped lang="scss"></style>
