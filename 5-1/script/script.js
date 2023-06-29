const app = {
    data() {
        return {
            arr: ["hoge", "huga", "piyo"],
            obj: {
                name: "hoge",
                age: 18,
                live: "US"
            }
        };
    }
}

Vue.createApp(app).mount("#app");
