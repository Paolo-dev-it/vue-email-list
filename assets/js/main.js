var app = new Vue({
  el: "#root",
  data: {
    indiceMail: [], //Array vuoto dove aggiungerò le mail
  },
  mounted() {},
  beforeUpdate() {},
  methods: {
    //Funzione che mi genera una mail random e la pusho all'interno dell'array vuoto
    creaMail() {
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((response) => {
          //console.log(response.data.response);
          let responseData = response.data.response;
          this.indiceMail.push(responseData);
          console.log(this.indiceMail);
        });
    },

    //Funzione che cicla la funzione creaMail() per generale più mail diverse

    cicle() {
      for (let i = 0; i < 10; i++) {
        this.creaMail();
      }
    },
  },
});
