<template>
  <v-app>
    <div class="home app-bg-color fill-height">
      <!-- -->
      <section>
        <v-row class="mt-10 ml-10" justify="start" align="start">
          <v-btn class="" large fab color="white" @click="replaceState">
            <v-icon>mdi-home</v-icon>
          </v-btn>
        </v-row>
      </section>
      <!-- -->

      <!-- -->
      <section>
        <v-row justify="center" align="start">
          <v-col cols="12" xs="12" md="6" justify="center" align="center">
            <QuestionCard :questions="questions" />
            <QuestionsList :questions="questions" />
          </v-col>
          <v-col cols="12" xs="12" md="4" justify="center" align="center">
            <HelpCard />
          </v-col>
        </v-row>
      </section>
      <!-- -->
    </div>
  </v-app>
</template>

<script>
import json from "@/assets/questions.json";
export default {
  components: {
    QuestionCard: () => import("@/components/QuestionCard/QuestionCard"),
    QuestionsList: () => import("@/components/QuestionsList/QuestionsList"),
    HelpCard: () => import("@/components/HelpCard/HelpCard"),
  },
  data() {
    return {
      questions: {},
    };
  },
  created() {
    this.questions = json.data.questions;
  },
  methods: {
    replaceState: function () {
      /**
       * Função responsável por restaurar os padrões dos estados do Vuex
       */
      this.$store.replaceState({
        chartData: [
          ["Alternativas", "Porcentagem de votos da platéia"],
          ["A", 0],
          ["B", 0],
          ["C", 0],
          ["D", 0],
        ],
        callHelp: "",
      });
      this.$router.push(`/`);
    },
  },
};
</script>

<style scoped></style>
