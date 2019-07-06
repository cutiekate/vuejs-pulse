let app = new Vue({
  el: "#app",
  data: () => ({
    api: null,
    searchData: ""
  }),
  methods: {
    isSearched(name) {
      return name.toLowerCase().includes(this.searchData.toLowerCase());
    }
  },
  created() {
    // https://ru.vuejs.org/v2/cookbook/using-axios-to-consume-apis.html
    axios
      .get("https://putiloff.com/api")
      .then(response => (this.api = response.data));
  }
});
