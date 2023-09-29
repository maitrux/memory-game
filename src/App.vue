<script>
import CardStore from "@/store/CardStore.ts";
import GameContainer from "./components/GameContainer";
import RetryDialog from "./components/RetryDialog";

export default {
  name: "App",
  components: {
    GameContainer,
    RetryDialog,
  },
  data() {
    return {
      categories: ["Animals", "Food", "Sports"],
      selectedCategory: "Animals", // Default category
      wordPairs: CardStore.FoodEnDe,
    };
  },
  mounted() {
    // Update cards according to the selected category if it saved in local storage
    const selectedCategory = localStorage.getItem("selectedCategory");
    if (selectedCategory) {
      this.selectedCategory = selectedCategory;
    }

    this.updateWordPairs();
  },
  methods: {
    reloadGame() {
      window.location.reload();
    },
    updateWordPairs() {
      if (this.selectedCategory === "Animals") {
        this.wordPairs = CardStore.AnimalsEnDe;
      } else if (this.selectedCategory === "Food") {
        this.wordPairs = CardStore.FoodEnDe;
      } else if (this.selectedCategory === "Sports") {
        this.wordPairs = CardStore.SportsEnDe;
      }

      // save the selected category to local storage
      localStorage.setItem("selectedCategory", this.selectedCategory);
    },
  },
};
</script>

<template>
  <v-app>
    <v-app-bar app color="#00838F" dark>
      <div style="width: 200px">
        <v-select
          :items="categories"
          v-model="selectedCategory"
          density="comfortable"
          label="Category"
          hide-details
          @change="updateWordPairs"
        ></v-select>
      </div>
      <v-spacer></v-spacer>
      <RetryDialog @retry="reloadGame" />
    </v-app-bar>

    <v-main class="d-flex justify-center align-center">
      <GameContainer
        :wordPairs="wordPairs"
        :key="selectedCategory"
        @retry="reloadGame"
      />
    </v-main>
  </v-app>
</template>
