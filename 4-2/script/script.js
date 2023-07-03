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

    },
    computed: {
        isPass() {
            return this.count >= 60;
       }
    }
};

Vue.createApp(app).mount("#app");
