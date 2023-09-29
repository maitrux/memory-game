<script>
export default {
  name: "RetryDialog",
  data() {
    return {
      isRetryDialogOpen: false,
    };
  },
  methods: {
    reloadGame() {
      this.$emit("retry-game"); // Emit an event to trigger game retry in the parent component
    },
  },
};
</script>

<template>
  <v-dialog v-model="isRetryDialogOpen" width="400">
    <template #activator="{ on, attrs }">
      <v-btn v-bind="attrs" v-on="on" icon>
        <v-icon>mdi-reload</v-icon>
      </v-btn>
    </template>

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
        >
          Close
        </v-btn>
        <v-btn block color="#00838F" dark @click="reloadGame">RETRY</v-btn>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
