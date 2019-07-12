let app = new Vue({
  el: "#app",
  data: () => ({
    api: null,
    api2: null,
    url:"https://putiloff.com/api",
    url2:"https://putiloff.com/api",
    message: "Hello world!",
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
      .get(this.url)
      .then(response => (this.api = response.data));


    axios.get(this.url2).then(response => (this.api2 = response.data));
    // myApiFunc();
  },
  myApiFunc(){
    axios.get(this.url);
   
  }
});
