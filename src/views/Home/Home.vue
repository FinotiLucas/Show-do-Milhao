<template>
  <v-app>
    <div class="home app-bg-color fill-height">
      <!-- START FIRST SECTION -->
      <section>
        <v-row justify="center" align="end">
          <v-col cols="12" xs="12" md="7" justify="center" align="center">
            <v-img min-height="65vh" src="@/assets/images/bg/1.png"></v-img>
            <a @click="startGame">
              <div id="container_hover">
                <img id="image" height="80vh" src="@/assets/images/bg/2.png" />
              </div>
            </a>
          </v-col>
          <v-col
            cols="12"
            xs="12"
            md="4"
            justify="space-around"
            align="center"
            class="hidden-md-and-down"
          >
            <v-img max-height="45vh" src="@/assets/images/bg/3.png"></v-img>
          </v-col>
        </v-row>
      </section>
      <!-- END FIRST SECTION -->

      <!-- START ABOUT ME AREA -->
      <section
        id="about-me"
        class="about-me section_horizontal_padding_40 text-start"
      >
        <v-row
          v-for="(item, i) in aboutMe"
          :key="i"
          justify="center"
          align="center"
        >
          <v-col cols="12" xs="12" md="4">
            <div class="padding_20">
              <v-row class>
                <P>{{ item.title }}</P>
              </v-row>
              <v-row class="section_padding_0_50">
                <h2>{{ item.subtitle }}</h2>
              </v-row>
              <p v-for="(itens, n) in item.text" :key="n" class="text-formater">
                {{ itens }}
              </p>
            </div>
          </v-col>

          <v-col
            cols="12"
            xs="12"
            md="4"
            justify="center"
            align="center"
            class="padding_top_50 center"
          >
            <v-img contain :src="item.src" height="128px" width="128px" />
          </v-col>
        </v-row>
      </section>
      <!-- START ABOUT ME AREA -->
    </div>
  </v-app>
</template>

<script>
//tema-de-abertura.mp3

export default {
  data() {
    return {
      audio: new Audio(require("@/assets/audio/home.ogg")),
      aboutMe: [
        {
          title: "Show do Milhão da família Aguiar",
          subtitle: "Desafio Jovens Gênios Super Estágio em Desenvolvimento",
          text: [
            "A família Aguiar adora jogar e assistir televisão com todos juntos. Um de seus programas televisivos preferidos, de todos os tempos, é o programa de auditório ​ Show do Milhão​ , que passou entre 1999 e 2003 no SBT, com o apresentador Sílvio Santos.",
            "Eles sairão para uma viagem na próxima semana. Para manter a cultura familiar, levarão diversos jogos. Martha Aguiar, a mãe da família, teve a ideia de que seria incrível se eles pudessem ter uma versão para computador do jogo ​ Show do Milhão​ , já que estarão com seu notebook na viagem. ",
          ],
          src: require("@/assets/images/bg/jg.png"),
        },
      ],
    };
  },
  created: function () {
    this.playAudio(true);
  },
  methods: {
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
    startGame: function () {
      this.playAudio(false);
      this.$router.push("/questions/1");
    },
  },
};
</script>

<style scoped>
#container_hover {
  display: inline-block;
  overflow: hidden;
}

#container_hover img {
  display: block;
  -moz-transition: all 0.3s;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}

#container_hover:hover img {
  -moz-transform: scale(1.1);
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
