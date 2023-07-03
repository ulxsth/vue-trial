const app = {
    data() {
        return {
            count: 0
        }
    },
    methods: {
        increment() {
            this.count++;
        },
        decrement() {
            this.count--;
        }

    }
};

Vue.createApp(app).mount("#app");
