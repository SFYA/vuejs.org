Vue.component("product-item", {
  props: ['product'],
  template: "<li>{{product.name}}</li>"
});

var app5 = new Vue({
  el: '#app5',
  data: {
    products: [
      {id: 0, name: "Alaf"},
      {id: 1, name: "Teryak"},
      {id: 2, name: "Shishe"}
    ]
  }
});

