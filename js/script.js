const { createApp } = Vue;

createApp({
    data() {
        return {
            todos: [
                {
                    text: "hyperX",
                    done: false
                },
                {
                    text: "Logitech",
                    done: false
                },
                {
                    text: "Asus ROG",
                    done: false
                },
                {
                    text: "Razer",
                    done: false
                },
                {
                    text: "Trust",
                    done: false
                },

            ]
        }
    },

    methods: {
        todoBarred(index) {
            this.todos[index].done = true;
            console.log(this.todos[index].done)
        }
    }
}).mount("#app")