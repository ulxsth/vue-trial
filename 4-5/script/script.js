const app = {
    data() {
        name: "";
        phone: 0;
        email: "";
    },

    computed: {
        isInValidName() {
            return this.name.length >= 4;
        },

        isInValidPhone() {
            return this.phone >= 10000000;
        },

        isInValidEmail() {
            const regex = new RegExp("[\w\-\._]+@[\w\-\._]+\.[A-Za-z]+");
            return !regex.test(this.email);
        }
    }
}

Vue.createApp(app).mount("#app");
