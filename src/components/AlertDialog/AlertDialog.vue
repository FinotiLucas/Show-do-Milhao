<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="512">
      <v-card>
        <v-card-title class="headline"
          >Que pena, você errou ! ({{ score }} / 15)</v-card-title
        >
        <v-card-text
          >Não fique triste, tente novamente e se sinta feliz por chegar até
          aqui , você é incrível !
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="wrongQuestion()"
            >Recomeçar</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  props: {
    dialog: {
      type: Boolean,
      required: true,
      default: () => {},
    },
    score: {
      type: Number,
      required: true,
      default: () => {},
    },
  },
  data() {
    return {};
  },
  methods: {
    wrongQuestion: function () {
      this.dialog = false;
      this.$router.push(`/`);
    },
  },
};
</script>

<style></style>
