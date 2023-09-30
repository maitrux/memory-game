<script>
import PlayerStore from "@/store/PlayerStore.ts";

export default {
  name: "AddPlayers",
  data: () => ({
    playerName: "",
    rules: [
      (value) => {
        if (value) return true;

        return "You must enter a player name.";
      },
    ],
  }),
  methods: {
    addPlayer() {
      if (this.$refs.form.validate()) {
        const player = {
          name: this.playerName,
          score: 0, // You can set the initial score to 0 or any other value.
        };
        PlayerStore.players.push(player);

        // Clear the input field after adding the player
        this.playerName = "";

        // Optionally, you can navigate to another route or perform other actions.

        console.log(PlayerStore.players);
      }
    },
  },
};
</script>

<template>
  <v-container class="d-flex align-center justify-center">
    <v-card style="width: 500px">
      <v-card-title class="headline">ADD PLAYERS</v-card-title>
      <v-card-text>
        <v-form ref="form" fast-fail @submit.prevent>
          <v-text-field
            v-model="playerName"
            label="Player Name"
            outlined
            :rules="rules"
          ></v-text-field>

          <v-btn color="#00838F" @click="addPlayer" block dark>
            Start playing
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>
