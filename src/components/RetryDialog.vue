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
  <v-dialog v-model="isRetryDialogOpen" max-width="290">
    <template #activator="{ on, attrs }">
      <v-btn v-bind="attrs" v-on="on" icon>
        <v-icon>mdi-reload</v-icon>
      </v-btn>
    </template>

    <v-card>
      <v-card-title class="headline">Restart</v-card-title>
      <v-card-text>
        <span>Do you want to restart the game?</span>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="grey" text @click="isRetryDialogOpen = false">
          Close
        </v-btn>
        <v-btn color="#00838F" text @click="$emit('retry')"> Retry </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
