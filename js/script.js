const app = new Vue ({
    el: '#app',
    data: {
        counter: 0,
        newMessage: '',
        searchUser: '',
        contacts: [
            {
                name: 'Sandra',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30',
                        text: 'Ciao Sandra, da quanto non ci si vede!',
                        sent: true
                    },
                    {
                        date: '10/01/2020 15:50',
                        text: 'Giovedì sera ti andrebbe di organizzare un aperitivo?',
                        sent: true
                    },
                    {
                        date: '10/01/2020 16:15',
                        text: 'Ciao Luca, certo!',
                    },
                    {
                        date: '10/01/2020 16:32',
                        text: 'Facciamo per le 20?',
                        sent: true
                    },
                    {
                        date: '10/01/2020 16:38',
                        text: 'Va bene, allora a sabato!',
                    },
                ],
            },
            {
                name: 'Laura',
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
                name: 'David',
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
                name: 'Marco',
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
        answer: ['No', 'Sì', 'Forse', 'Ciao', 'A domani', 'Non saprei', 'Addio', 'A presto!', 'Ti voglio bene', 'Buonanotte']
    },
    
    methods: {
        changeChat(index){
            this.counter = index;
        },

        submit(){
            new Date();
            if(!this.newMessage == ''){
                this.contacts[this.counter].messages.push({
                    date: dayjs().date() + '/' + (dayjs().month()+1) + '/' + dayjs().year() + ' ' + dayjs().hour() + ':' + dayjs().minute(),
                    text: this.newMessage,
                    sent: true,
                })
                setTimeout(myFunction, 1000);
                let randomAnswer = Math.floor(Math.random() * app.answer.length);
                function myFunction(){
                    app.contacts[app.counter].messages.push({
                        date: dayjs().date() + '/' + (dayjs().month()+1) + '/' + dayjs().year() + ' ' + dayjs().hour() + ':' + dayjs().minute(),
                        text: app.answer[randomAnswer],
                    })   
                }
            }
            this.newMessage = '';
        },

        deleteMessage(){
            this.newMessage.slice(1,1)
        }
    },


    computed:{
        filterChat(){
            
            if(this.searchUser == ''){
                return this.contacts
            } else {
                return this.contacts.filter(contatto => {
                    if(contatto.name.toLowerCase().includes(this.searchUser.toLowerCase())){
                        return true
                    } else if (contatto.name.includes(this.searchUser)){
                        return true
                    }
                })
            }
        },
    }
    


})
