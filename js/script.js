console.log('Vue JS OK');

// * Vue.js * //
const { createApp } = Vue;

createApp({
    data(){
        return{
            newCard:'',
            deck:[
                {   
                    number: 1, // numeri aggiunti per gestire meglio il metodo *toggleCardStatus*
                    text: 'Black Lotus',
                    done: false
                },
                {
                    number: 2,
                    text: 'Ancestral Recall',
                    done: false
                },
                {
                    number: 3,
                    text: 'Time Walk',
                    done: false
                },
                {
                    number: 4,
                    text: 'Timetwister',
                    done: false
                },
            ]
        }
    },

    computed:{


    },

    methods:{
        // metodo per togliere una carta
        removeCard(cardSelected){
            this.deck.splice(cardSelected, 1);
        },
        // metodo per "tagliare" il testo di una carta
        toggleCardStatus(cardSigned){
            this.deck.forEach(card => {
                if(card.number === cardSigned) card.done = !card.done;
            });
        }
    }
}).mount('#root');