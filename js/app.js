let app = new Vue({
  el: "#app",
  data: () => ({
    currency: null,
    sortDirection: {
      base_ccy: "ASC",
      ccy: "ASC",
      buy: "ASC",
      sale: "ASC"
    }
  }),
  methods: {
    sort(field) {
      this.sortDirection[field] =
        this.sortDirection[field] === "ASC" ? "DESC" : "ASC";
      if (field === "base_ccy" || field === "ccy") {
        if (this.sortDirection[field] === "ASC") {
          this.currency.sort((a, b) => (a[field] > b[field] ? 1 : -1));
        } else {
          this.currency.sort((a, b) => (b[field] > a[field] ? 1 : -1));
        }
      } else {
        if (this.sortDirection[field] === "ASC") {
          this.currency.sort((a, b) => a[field] - b[field]);
        } else {
          this.currency.sort((a, b) => b[field] - a[field]);
        }
      }

      console.log(field, this.sortDirection[field]);
      //this.currency.sort((a, b) => b[field] - a[field]);
    }
  },
  created() {
    axios.get("../api").then(response => (this.currency = response.data));
  }
});
