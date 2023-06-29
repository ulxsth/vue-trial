const app = {
    data() {
        return {
            isActive: false
        };
    },
    methods: {
        toggleActive() {
            this.isActive = !this.isActive;
        }
    }
}

Vue.createApp(app).mount("#app");
