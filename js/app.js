let app = new Vue({
  el: "#app",
  data: () => ({
    isSuccess: false,
    alertSettings: {
      success: {
        message: "Все круто!"
      },
      error: {
        message: "Что-то пошло не так"
      }
    },
    isShow: false
  }),
  computed: {
    message: {
      get() {
        return this.isSuccess
          ? this.alertSettings.success.message
          : this.alertSettings.error.message;
      },
      set(val) {
        this.alertSettings[this.isSuccess ? "success" : "error"].message = val;
      }
    }
  },
  methods: {
    alert() {
      this.isShow = !this.isShow;
    },
    checkAlertClass() {
      return this.isSuccess ? "alert-success" : "alert-danger";
    }
  }
});
