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
    <v-card-title v-if="!isClickable || isCardClicked">{{ word }}</v-card-title>
    <v-icon v-else size="40" color="white">mdi-comment-question-outline</v-icon>
  </v-card>
</template>

<style scoped lang="scss">
.memory-card {
  background-color: #55cdfd;
  min-height: 100px; /* Set a minimum height for small screens */
}

@media screen and (min-width: 768px) {
  .memory-card {
    min-height: 100px; /* Increase the height for screens wider than 768px */
  }
}

@media screen and (min-width: 1024px) {
  .memory-card {
    min-height: 120px; /* Increase the height for screens wider than 1024px */
  }
}

.memory-card:focus {
  outline: none;
}

.disabled-card {
  pointer-events: none;
  background-color: white;
  border: solid 4px #55cdfd;
}
</style>
