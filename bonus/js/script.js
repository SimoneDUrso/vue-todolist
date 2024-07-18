const { createApp } = Vue;

createApp({
    data() {
        return {
            todos: [
                {
                    text: "Faccio colazione",
                    done: false
                },
                {
                    text: "Seguo la lezione di Fabrizio",
                    done: false
                },
                {
                    text: "Cucino il pranzo",
                    done: false
                },
                {
                    text: "Faccio gli esercizi per Boolean",
                    done: false
                },
                {
                    text: "Faccio merenda",
                    done: false
                },
                {
                    text: "Gioco ad Elden Ring",
                    done: false
                },
                {
                    text: "Guardo un film",
                    done: false
                },
                {
                    text: "Vado a letto",
                    done: false
                },

            ],

            newTodo: null
        }
    },

    methods: {
        // todoBarred(index) {
        //     this.todos[index].done = true;
        //     console.log(this.todos[index].done)
        // },

        deleteTodo(index) {
            if (confirm("Sei sicuro di voler eliminare questa Todo?")) {
                this.todos.splice(index, 1);
            }
        },

        addTodo() {
            let emptyObject = {
                text: this.newTodo,
                done: false
            }
            this.todos.push(emptyObject)
            this.newTodo = null
        },

        changeDone(i) {
            if (this.todos.done) {
                this.todos[i].done = !this.todos[i].done
            }
            else {
                this.todos[i].done = !this.todos[i].done
            }
        }
    }
}).mount("#app")