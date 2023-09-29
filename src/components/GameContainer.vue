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
        <memory-card :word="word" />
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped lang="scss"></style>
