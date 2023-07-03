const app = {
    data() {
        return {
            text: "hello Vue.js"
        }
    },
    methods: {
        handleClick() {
            this.text = "button clicked";
        }
    }
};

Vue.createApp(app).mount("#app");
