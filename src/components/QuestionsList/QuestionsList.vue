<template>
  <!-- START FIRST SECTION -->
  <section>
    <v-row class="mt-5" justify="space-between" align="space-between">
      <v-col justify="space-between" align="space-between">
        <v-btn
          :disabled="buttons[0].isDisabled"
          large
          fab
          color="white"
          @click="getHalf(0)"
        >
          <v-icon>{{ buttons[0].icon }}</v-icon>
        </v-btn>
      </v-col>
      <v-col justify="space-between" align="space-between">
        <v-btn
          :disabled="buttons[1].isDisabled"
          large
          fab
          color="white"
          @click="getCallHelp(1)"
        >
          <v-icon>{{ buttons[1].icon }}</v-icon>
        </v-btn>
      </v-col>
      <v-col justify="space-between" align="space-between">
        <v-btn
          :disabled="buttons[2].isDisabled"
          large
          fab
          color="white"
          @click="getProbability(2)"
        >
          <v-icon>{{ buttons[2].icon }}</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row
      v-for="(item, i) in choices"
      :key="i"
      class="mt-100 mx-auto mt-5 mr-10 ml-10"
      justify="space-between"
      align="space-between"
    >
      <v-avatar class="gradient" size="62">
        <span
          class="headline"
          style="
             {
              font-weight: 900;
            }
          "
          >{{ alternatives[i] }}</span
        >
      </v-avatar>
      <v-hover v-if="choice == i" v-slot:default="{ hover }">
        <v-card
          rounded-8
          width="calc(100% - 80px)"
          :color="color"
          outlined
          :elevation="hover ? 12 : 2"
        >
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="headline mb-1">
                {{ item.answer }}</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-hover>
      <v-hover v-else="" v-slot:default="{ hover }">
        <v-card
          rounded-8
          width="calc(100% - 80px)"
          outlined
          :elevation="hover ? 12 : 2"
          @click="handleAnswers(i)"
        >
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="headline mb-1">
                {{ item.answer }}</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-hover>
    </v-row>
    <AlertDialog
      :dialog="dialog"
      :score="parseInt(this.$route.params.questionId - 1)"
    />
  </section>
  <!-- END FIRST SECTION -->
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  components: {
    AlertDialog: () => import("@/components/AlertDialog/AlertDialog"),
  },
  props: {
    questions: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      id: 0,
      audio: new Audio(require("@/assets/audio/tema-de-abertura.ogg")),
      onCallHelp: null,
      dialog: false,
      alternatives: ["A", "B", "C", "D"],
      buttons: [
        {
          title: "50/50",
          icon: "mdi-circle-half-full",
          isDisabled: false,
        },
        {
          title: "Ligar por Ajuda",
          icon: "mdi-card-account-phone-outline",
          isDisabled: false,
        },
        {
          title: "Ajuda da Platéia",
          icon: "mdi-account-group",
          isDisabled: false,
        },
      ],
      choices: {},
      choice: null,
      color: "#efefef",
    };
  },

  created() {
    this.choices = this.questions[this.$route.params.questionId - 1].choices;
    this.playAudio(true);
  },

  methods: {
    handleAnswers: function (index) {
      this.choice = index;
      if (this.choices[index].isTrue) {
        this.color = "#57e71d";
        setTimeout(() => {
          this.rightQuestion(index);
        }, 1000);
      } else {
        this.color = "#f60808";
        this.wrongQuestion();
      }
    },

    rightQuestion: function () {
      var next = parseInt(this.$route.params.questionId) + 1;
      this.choice = null;
      this.$router.push(`/questions/${next}`);
      this.replaceState();
      this.choices = this.questions[next - 1].choices;
    },

    wrongQuestion: function () {
      this.replaceState();
      this.playAudio(false);
      this.dialog = true;
    },

    getHalf: function (index) {
      var next = parseInt(this.$route.params.questionId) + 1;
      this.choice = null;
      var choices = this.questions[next - 2].choices;
      var temp = [];
      choices.forEach((element) => {
        if (element.isOnHalf) {
          temp.push(element);
        }
      });
      this.choices = temp;
      this.buttons[index].isDisabled = true;
    },

    getCallHelp: function (index) {
      var next = parseInt(this.$route.params.questionId) + 1;
      this.choice = null;
      var choices = this.questions[next - 2].choices;
      var temp;
      choices.forEach((element) => {
        if (element.isOnCallHelp) {
          temp = element.answer;
        }
      });
      this.updateCallHelp(temp);
      this.buttons[index].isDisabled = true;
    },

    getProbability: function (index) {
      var next = parseInt(this.$route.params.questionId) + 1;
      this.choice = null;
      var choices = this.questions[next - 2].choices;
      var temp = [];
      temp = [
        ["Alternativas", "Porcentagem de votos da platéia"],
        ["A", choices[0].probability],
        ["B", choices[1].probability],
        ["C", choices[2].probability],
        ["D", choices[3].probability],
      ];
      console.log(temp);

      this.updateChartData(temp);

      //this.onCallHelp = temp;
      this.buttons[index].isDisabled = true;
    },

    replaceState: function () {
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
    },

    playAudio: function (option) {
      if (option) {
        this.audio.play();
      } else {
        this.audio.play();
        this.audio.pause();
        this.audio.currentTime = 0;
        //teste.ogg
      }
    },
    ...mapMutations(["updateChartData", "updateCallHelp"]),
  },
};
</script>

<style></style>
