console.log('Vue JS OK');

// * Vue.js * //
const { createApp } = Vue;

createApp({
    data(){
        return{
            newCard:'', // per aggiungere le carte con il metodo *addCard*
            
            deck:[ // array con le carte (oggetti con numero, nome e status della carta)
                {   
                    number: 1,
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

    methods:{

        //* metodo per togliere una carta
        removeCard(cardSelected){
            this.deck.splice(cardSelected, 1);
        },

        //* metodo per "tagliare" il testo di una carta
        toggleCardStatus(cardSigned){
            this.deck.forEach(card => {
                if(card.number === cardSigned) card.done = !card.done;
            });
        },

        //* metodo per aggiungere una carta
        addCard(){
            let highNumber = 0;
            // cerco tra tutte le chiavi 'number' quella col valore più alto
            this.deck.forEach((card) => {
                if(card.number > highNumber) highNumber = card.number;
            });
            // creo una chiave 'number' per la carta che aggiungerò che sarà più alta della più grande che avevo
            const addNumber = ++highNumber;

            // costruisco come oggetto la carta nuova
            const card = {number: addNumber, text: this.newCard, done: false};
            // la inserisco nell'array
            this.deck.push(card);

            
        }
    }
}).mount('#root');