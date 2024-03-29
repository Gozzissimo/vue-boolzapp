// Milestone 1
// Replica della grafica con la possibilità di avere messaggi scritti dall’utente(verdi) e dall’interlocutore(bianco) assegnando due classi CSS diverse
// Visualizzazione dinamica della lista contatti: tramite la direttiva v -for, visualizzare nome e immagine di ogni contatto

const app = new Vue(
    {
        el: '#app',
        data: {
            messageMenu: false,
            newMessage: '',
            contactName: '',
            counter: 0,
            contacts: [
                {
                    name: "Michele",
                    avatar: "_1",
                    visible: true,
                    messages: [
                        {
                            date: "10/01/2020 15:30:55",
                            text: "Hai portato a spasso il cane?",
                            status: "sent",
                        },
                        {
                            date: "10/01/2020 15:50:00",
                            text: "Ricordati di dargli da mangiare",
                            status: "sent",
                        },
                        {
                            date: "10/01/2020 16:15:22",
                            text: "Tutto fatto!",
                            status: "received",
                        },
                    ],
                },
                {
                    name: "Fabio",
                    avatar: "_2",
                    visible: true,
                    messages: [
                        {
                            date: "20/03/2020 16:30:00",
                            text: "Ciao come stai?",
                            status: "sent",
                        },
                        {
                            date: "20/03/2020 16:30:55",
                            text: "Bene grazie! Stasera ci vediamo?",
                            status: "received",
                        },
                        {
                            date: "20/03/2020 16:35:00",
                            text: "Mi piacerebbe ma devo andare a fare la spesa.",
                            status: "sent",
                        },
                    ],
                },

                {
                    name: "Samuele",
                    avatar: "_3",
                    visible: true,
                    messages: [
                        {
                            date: "28/03/2020 10:10:40",
                            text: "La Marianna va in campagna",
                            status: "received",
                        },
                        {
                            date: "28/03/2020 10:20:10",
                            text: "Sicuro di non aver sbagliato chat?",
                            status: "sent",
                        },
                        {
                            date: "28/03/2020 16:15:22",
                            text: "Ah scusa!",
                            status: "received",
                        },
                    ],
                },
                {
                    name: "Luisa",
                    avatar: "_4",
                    visible: true,
                    messages: [
                        {
                            date: "10/01/2020 15:30:55",
                            text: "Lo sai che ha aperto una nuova pizzeria?",
                            status: "sent",
                        },
                        {
                            date: "10/01/2020 15:50:00",
                            text: "Si, ma preferirei andare al cinema",
                            status: "received",
                        },
                    ],
                },
            ]
        },

        methods: {
            contactSelect(index) {
                this.counter = index;
            },

            sendMessage(index) {
                if (this.newMessage.trim() !== '') {
                    this.contacts[index].messages.push({
                        date: "data finta",
                        text: this.newMessage,
                        status: "sent"});
                    this.newMessage = '';
                };
                setTimeout(()=>{
                    this.defaultResp(index)
                },1000);
            },

            defaultResp(index) {
                this.contacts[index].messages.push({
                    date: "data finta",
                    text: "ok",
                    status: "received"
                });
            },
            
            filter() {
                // console.log('ciao');
                for (let i = 0; i < this.contacts.length; i++) {
                    if (this.contacts[i].name.toLowerCase().includes(this.contactName.toLowerCase())) {
                        this.contacts[i].visible = true;
                    } else {
                        this.contacts[i].visible = false;
                    };
                }
            },

            dropdownMenu(message, index) {
                this.messageMenu = true;
            },

            deleteMessage(index) {
                this.contacts[this.counter].messages[index].splice(index, 1);
            }
        }

        // array[array.length - 1]
    }
);