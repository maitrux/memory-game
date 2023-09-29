<script>
import GameContainer from "./components/GameContainer";

export default {
  name: "App",
  components: {
    GameContainer,
  },
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    reloadGame() {
      this.dialog = false;
      window.location.reload();
    },
  },
};
</script>

<template>
  <v-app>
    <v-app-bar app color="#00838F" dark>
      <v-spacer></v-spacer>
      <v-icon @click="dialog = true">mdi-reload</v-icon>
    </v-app-bar>

    <v-main class="d-flex justify-center align-center">
      <GameContainer />

      <!-- RETRY DIALOG -->
      <v-dialog v-model="dialog" width="400">
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
              @click="dialog = false"
              >Close</v-btn
            >
            <v-btn block color="#00838F" dark @click="reloadGame">RETRY</v-btn>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-main>
  </v-app>
</template>
