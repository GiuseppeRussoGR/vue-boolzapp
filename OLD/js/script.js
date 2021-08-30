let app = new Vue({
    el: '#wrapper',
    data: {
        userClicked: 0,
        messageUserSend: '',
        filterName: "",
        inDarkMode: {
            wrapperBackground: false,
        },
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent',
                        dropVisible: false
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent',
                        dropVisible: false
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received',
                        dropVisible: false
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent',
                        dropVisible: false
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received',
                        dropVisible: false
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent',
                        dropVisible: false
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received',
                        dropVisible: false
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent',
                        dropVisible: false
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received',
                        dropVisible: false
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_6',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent',
                        dropVisible: false
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received',
                        dropVisible: false
                    }
                ],
            },
        ]
    },
    methods: {
        selectUser(index) {
            //resetto la visualizzazione della dropDown al cambio di utente
            this.contacts[this.userClicked].messages.forEach((element) => {
                element.dropVisible = false;
            });
            //rendo visibile l'utente cliccato
            this.userClicked = index;
        },
        /**
         * * Funzione che permette l'invio di un testo nella chat selezionata
         */
        sendMessage() {
            //verifico se il messaggio inviato non è vuoto
            if (this.messageUserSend !== 0) {
                //push all'interno dell'array
                this.contacts[this.userClicked].messages.push({
                    date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                    text: this.messageUserSend,
                    status: 'sent',
                    dropVisible: false
                });
                //resetto la variabile per cancellare il valore scritto dall'utente
                this.messageUserSend = "";

                //risposta automatica dopo 1s
                const sentMessageUser = this.userClicked;
                setTimeout(() => {
                    this.contacts[sentMessageUser].messages.push({
                        date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                        text: 'ok',
                        status: 'received',
                        dropVisible: false
                    });
                }, 1000);
            }
        },
        /**
         * * Funzione filtro
         */
        searchName() {
            //ciclo l'array contatti per effettuare la ricerca dei valori inseriti
            this.contacts.forEach((element) => {
                if (this.filterName !== 0) {
                    element.visible = element.name.toLowerCase().includes(this.filterName.toLowerCase()) !== false;
                } else {
                    element.visible = true;
                }
            });
        },
        /**
         * * Funzione che permette di avere l'ultima attività del bot
         * @param {number} index indice dell'array da scorrere
         * @return ritorna una stringa
         */
        lastActivities(index) {
            let last = '';
            //ciclo per settarmi nella variabile l'ultimo messaggio inviato/ricevuto
            this.contacts[index].messages.forEach((element) => {
                if (element.status === 'received') {
                    last = element.date;
                }
            });
            return last;
        },
        /**
         * * Funzione che permette di attivare o disattivare il dropDown dinamicamente
         * @param value {number} indice numerico dell'oggetto cliccato
         */
        dropMenu(value) {
            //eseguo in ciclo all'interno dei messaggi per nascondere/visualizzare la dropdown
            this.contacts[this.userClicked].messages.forEach((element) => {
                if (this.contacts[this.userClicked].messages[value] === element) {
                    element.dropVisible = !element.dropVisible;
                } else {
                    element.dropVisible = false;
                }
            });
        },
        /**
         * * Funzione che permette di cancellare un messaggio nella chat
         * @param value {number} indice numerico dell'oggetto cliccato
         */
        deleteMessage(value) {
            this.contacts[this.userClicked].messages.splice(value, 1);
        },
        /**
         * Funzione per attivare o disattivare la modalità notturna
         */
        darkMode() {
            this.inDarkMode.wrapperBackground = !this.inDarkMode.wrapperBackground;
        }
    }
});
Vue.config.devtools = true