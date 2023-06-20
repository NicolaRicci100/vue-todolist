console.log('Vue JS OK');

// * Vue.js * //
const { createApp } = Vue;

createApp({
    data(){
        return{
            newCard:'',
            deck:[
                {
                    text: 'Black Lotus',
                    done: false
                },
                {
                    text: 'Ancestral Recall',
                    done: false
                },
                {
                    text: 'Time Walk',
                    done: false
                },
                {
                    text: 'Timetwister',
                    done: false
                },
            ]
        }
    },

    methods:{
        // metodo per togliere una carta
        removeCard(cardSelected){
            this.deck.splice(cardSelected, 1);
        }
    }
}).mount('#root');