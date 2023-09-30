<script>
import CardStore from "@/store/CardStore.ts";
import PlayerStore from "@/store/PlayerStore.ts";
import AddPlayers from "./components/AddPlayers";
import GameContainer from "./components/GameContainer";
import RetryDialog from "./components/RetryDialog";

export default {
  name: "App",
  components: {
    AddPlayers,
    GameContainer,
    RetryDialog,
  },
  data() {
    return {
      categories: ["Animals", "Food", "Sports"],
      selectedCategory: "Animals", // Default category
      wordPairs: CardStore.FoodEnDe,
      isGameStarted: false,
      players: [],
    };
  },
  mounted() {
    // Update cards according to the selected category if it's saved in local storage
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

      // Save the selected category to local storage
      localStorage.setItem("selectedCategory", this.selectedCategory);
    },

    startGame() {
      this.isGameStarted = true;
      this.players = PlayerStore.players;
    },
  },
};
</script>

<template>
  <v-app>
    <v-app-bar class="pt-1" app color="#00838F" dark style="height: 70px">
      <div style="width: 200px">
        <v-select
          :items="categories"
          v-model="selectedCategory"
          density="comfortable"
          label="Category"
          outlined
          hide-details
          @change="updateWordPairs"
        ></v-select>
      </div>
      <RetryDialog @retry="reloadGame" />
      <v-spacer></v-spacer>

      <!-- Player info -->
      <div class="pt-1" v-for="(player, index) in players" :key="index">
        <v-alert class="player-info pa-2 mr-2">
          <span>{{ player.name }}</span>
          <span class="ml-2">{{ player.score }}</span>
        </v-alert>
      </div>
    </v-app-bar>

    <v-main class="d-flex justify-center align-center">
      <template v-if="!isGameStarted">
        <AddPlayers @start="startGame" />
      </template>

      <template v-else>
        <GameContainer
          :wordPairs="wordPairs"
          :key="selectedCategory"
          @retry="reloadGame"
        />
      </template>
    </v-main>
  </v-app>
</template>

<styles lang="scss">
.player-info {
  background-color: white !important;
  color: #00838f !important;
  font-weight: bold;
}
</styles>
