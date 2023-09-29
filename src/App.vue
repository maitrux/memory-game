<script>
import CardStore from "@/store/CardStore.ts";
import GameContainer from "./components/GameContainer";

export default {
  name: "App",
  components: {
    GameContainer,
  },
  data() {
    return {
      isRetryDialogOpen: false,
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
      this.isRetryDialogOpen = false;
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
      <v-icon @click="isRetryDialogOpen = true">mdi-reload</v-icon>
    </v-app-bar>

    <v-main class="d-flex justify-center align-center">
      <GameContainer :wordPairs="wordPairs" :key="selectedCategory" />

      <!-- RETRY DIALOG -->
      <v-dialog v-model="isRetryDialogOpen" width="400">
        <v-card>
          <v-card-text style="font-size: 20px">
            <div class="pt-4 mb-8 d-flex justify-center">
              Do you want to start the game again?
            </div>

            <v-btn
              class="mb-2"
              outlined
              block
              color="#00838F"
              @click="isRetryDialogOpen = false"
              >Close</v-btn
            >
            <v-btn block color="#00838F" dark @click="reloadGame">RETRY</v-btn>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-main>
  </v-app>
</template>

<styles scoped lang="scss"></styles>
