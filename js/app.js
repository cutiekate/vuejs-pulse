let app = new Vue({
  el: "#app",
  data: () => ({
    currentColor: ""
  }),
  methods: {
    getRandomColor() {
      this.currentColor = "#" + ((Math.random() * 0xffffff) << 0).toString(16);
    }
  },
  created() {
    this.getRandomColor();
  }
});
