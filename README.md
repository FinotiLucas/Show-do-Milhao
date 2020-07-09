# Desafio Jovens Gênios Super Estágio em Desenvolvimento

  
  

<h4  align="center">

  

  

<img  src="https://media.giphy.com/media/nbX0ijnZwU33wY6Wwo/giphy.gif"/><br>

  

  

<b>Show do Milhão da família Aguiar</b>

  

  

</h4>

  

  

<p  align="center">

  

  

<a  href="https://lucasfinoti.netlify.app">

  

  

<img  alt="Made by Lucas Finoti"  src="https://img.shields.io/badge/made%20by-LucasFinoti-red">

  

  

</a>

  

  

<img alt="License" src="https://img.shields.io/badge/license-MIT-red">
  

  

</p>

  

  



  
  

<br>

  

## 1) Definição do Desafio :muscle:


A família Aguiar adora jogar e assistir televisão com todos juntos. Um de seus programas televisivos preferidos, de todos os tempos, é o programa de auditório ​ Show do Milhão​ , que passou entre 1999 e 2003 no SBT, com o apresentador Sílvio Santos.

Eles sairão para uma viagem na próxima semana. Para manter a cultura familiar, levarão diversos jogos. Martha Aguiar, a mãe da família, teve a ideia de que seria incrível se eles pudessem ter uma versão para computador do jogo ​ Show do Milhão​ , já que estarão com seu notebook na viagem. 

Como não conseguiram encontrar o jogo disponível para computador, cabe a você a ​ missão de
desenvolver esse jogo para fazer a felicidade da família na viagem!


## 2) Funcionaliadades implementadas
- Reduzir as alternativas a metade (50/50)
- Pedir ajuda por telefone;
- Ver a opnião da platéia quanto as alternativas.

## 3) Tecnologias usadas :rocket:
Este projeto foi desenvolvido com as seguintes tecnologias:
- [VueJS](https://vuejs.org/)
- [Vuex](https://vuex.vuejs.org/)
- [Vuetify](https://vuetifyjs.com/en/)
- [Google Charts](https://developers.google.com/chart/)


## 4) Screenshots

<p align="center">
  <img src="./src/assets/screenshots/0.png" />

  <img src="./src/assets/screenshots/1.png"/>
</p>


## Demonstração online

https://desafioshowdomilhao.netlify.app/


## Vídeo Tutorial

[<img src="https://img.youtube.com/vi/Nefhor-MDs8/maxresdefault.jpg" width="100%" height="512">](https://youtu.be/Nefhor-MDs8)



## Como instalar

```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Estrutura do json com as perguntas
``` json
{
  "id": 14,
  "question": "A pergunta valendo 1 milhão de reais é: Em que dia nasceu e em que dia foi registrado o Ex-Presidente Lula? ",
  "difficulty": 0,
  "choices": [
    {
      "answer": "6 e 27 de outubro",
      "isTrue": true,
      "isOnHalf": true,
      "isOnCallHelp": false,
      "probability": 38
    },
    {
      "answer": "8 e 27 de outubro",
      "isTrue": false,
      "isOnHalf": true,
      "isOnCallHelp": true,
      "probability": 35
    },
    {
      "answer": "9 e 26 de outubro",
      "isTrue": false,
      "isOnHalf": false,
      "isOnCallHelp": false,
      "probability": 3
    },
    {
      "answer": "7 e 23 de outubro",
      "isTrue": false,
      "isOnHalf": false,
      "isOnCallHelp": false,
      "probability": 24
    }
  ]
}
```

  

### License
 

----
Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.
  
Copyright (c) 2020 Lucas Finoti
