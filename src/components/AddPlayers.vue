<script>
import PlayerStore from "@/store/PlayerStore.ts";

export default {
  name: "AddPlayers",
  data: () => ({
    playerNames: [],
    newPlayerName: "",
  }),
  methods: {
    addPlayer() {
      if (this.$refs.form.validate()) {
        this.playerNames.push(this.newPlayerName);
        this.newPlayerName = "";
      }
    },

    removePlayer(index) {
      this.playerNames.splice(index, 1);
    },

    startGame() {
      PlayerStore.players = this.playerNames.map((name) => ({
        name,
        score: 0,
      }));

      // Emit the "start" event to notify the parent component
      this.$emit("start");
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
            v-model="newPlayerName"
            label="Player Name"
            outlined
            hide-details
          ></v-text-field>

          <!-- Display the list of added players -->

          <v-chip-group>
            <div
              class="mt-2"
              v-for="(playerName, index) in playerNames"
              :key="index"
            >
              <v-chip class="mr-2" outlined color="#00838F">
                {{ playerName }}
                <v-icon class="ml-2" small @click="removePlayer(index)"
                  >mdi-close-circle</v-icon
                >
              </v-chip>
            </div>
          </v-chip-group>

          <v-btn
            :disabled="!newPlayerName"
            class="add-player-btn mt-2"
            color="#55cdfd"
            @click="addPlayer"
            block
            depressed
          >
            Add Player
          </v-btn>

          <v-btn
            class="mt-2"
            color="#00838F"
            @click="startGame"
            block
            dark
            depressed
          >
            Start playing
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<styles scoped lang="scss">
.add-player-btn {
  color: white !important;
}
</styles>
