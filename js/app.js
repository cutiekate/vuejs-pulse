let app = new Vue({
  el: "#app",
  data: () => ({
    api: null,
    selected: "",
    sortDirection: {
      buy: "ASC",
      sale: "ASC"
    }
  }),
  methods: {
    sortApi(field) {
      this.sortDirection[field] =
        this.sortDirection[field] === "ASC" ? "DESC" : "ASC";
      this.api.sort((a, b) =>
        this.sortDirection[field] === "ASC"
          ? a[field] - b[field]
          : b[field] - a[field]
      );
    }
  },
  created() {
    // https://ru.vuejs.org/v2/cookbook/using-axios-to-consume-apis.html
    axios
      .get("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5")
      .then(response => (this.api = response.data));
  }
});
