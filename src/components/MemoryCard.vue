<script>
export default {
  props: {
    word: String,
  },
  computed: {
    isClickable() {
      // Check if the current card's word pair has been matched
      return !this.hasCardBeenMatched();
    },
  },
  data() {
    return {
      isCardClicked: false,
    };
  },
  methods: {
    handleCardClick() {
      this.isCardClicked = true;

      // Check if the card is clickable before handling the click event
      if (this.isClickable) {
        this.$emit("clickCard", this.word);
      }

      // Remove focus from the clicked card element
      this.$el.blur();
    },
    hasCardBeenMatched() {
      // Check if the current card's word pair has been matched
      return this.$parent.matchedPairs.some(
        (pair) => pair.word1 === this.word || pair.word2 === this.word
      );
    },
  },
};
</script>

<template>
  <v-card
    class="memory-card d-flex justify-center align-center"
    @click="handleCardClick"
    :class="{ 'disabled-card': !isClickable || isCardClicked }"
    v-ripple="false"
  >
    <v-card-title v-show="!isClickable || isCardClicked">{{
      word
    }}</v-card-title>
  </v-card>
</template>

<style scoped lang="scss">
.memory-card {
  background-color: #55cdfd;
  height: 100px;
}

.memory-card:focus {
  outline: none;
}

.disabled-card {
  pointer-events: none;
  background-color: white;
  border: solid 1px #55cdfd;
}
</style>
