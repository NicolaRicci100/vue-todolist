console.log('Vue JS OK');

// * Vue.js * //
const { createApp } = Vue;

createApp({
    data(){
        return{
            newAction:'',
            actionList:[
                {
                    text: 'Dormire',
                    done: false
                },
                {
                    text: 'Alzarsi',
                    done: false
                },
                {
                    text: 'Bere',
                    done: false
                },
                {
                    text: 'Mangiare',
                    done: false
                },
            ]
        }
    },

    methods:{
        
    }
}).mount('#root');