var gheyme = "gheyme";
var ghorme = "ghorme";

var app1 = new Vue({
  el: "#app1",
  data: {
    favoriteFood: "Gheyme"
  },
  methods: {
    changeFood: function() {
      console.log("changing food");
      if (this.favoriteFood === gheyme) {
        console.log("It is gheyme!");
        this.favoriteFood = ghorme;
      }
      else
        this.favoriteFood = gheyme;
    }
  }
});

