const app = new Vue ({
    el: '#app',
    data: {
        counter: 0,
        newMessage: '',
        contacts: [
            {
                name: 'Pippo',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30',
                        text: 'Portami a spasso',
                        sent: true
                    },
                    {
                        date: '10/01/2020 15:50',
                        text: 'E dammi da mangiare',
                        sent: true
                    },
                    {
                        date: '10/01/2020      16:15',
                        text: 'Subito!',
                    }
                ],
            },
            {
                name: 'Prince',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30',
                        text: 'Ciao come stai?',
                        sent: true
                    },
                    {
                        date: '20/03/2020 16:30',
                        text: 'Bene grazie! Stasera ci vediamo?'
                    },
                    {
                        date: '20/03/2020 16:35',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        sent: true
                    }
                ],
            },
            {
                name: 'Pablo',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10',
                        text: 'La Marianna va in campagna'
                    },
                    {
                        date: '28/03/2020 10:20',
                        text: 'Sicuro di non aver sbagliato chat?',
                        sent: true
                    },
                    {
                        date: '28/03/2020 16:15',
                        text: 'Ah scusa!'
                    }
                ],
            },
            {
                name: 'Doge',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        sent: true
                    },
                    {
                        date: '10/01/2020 15:50',
                        text: 'Si, ma preferirei andare al cinema'
                    }
                ],
            },
        ],
    },
    
    methods: {
        changeChat(index){
            this.counter = index;
        },
        submit(){
            if(!this.newMessage == 0){
                this.contacts[this.counter].messages.push({
                    date: '10/01/2020 18:00',
                    text: this.newMessage,
                    sent: true
                })
            }
            this.newMessage = ''
        }
    }
})












