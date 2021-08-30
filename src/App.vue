<template>
  <div id="app">
    <div id="container-app" :class="{'dark' : darkClass}">
      <b-container fluid="lg">
        <b-row class="d-flex h-100">
          <b-col cols="12" md="4" class="h-100 position-relative left-column"
                 :class="{'d-none d-md-block': userSelected !== false }">
            <!-- HEADER-->
            <b-row>
              <b-col cols="12" class="d-flex align-items-center justify-content-between header">
                <div class="profile flex-grow-1">
                  <img src="https://www.studiofrancesconi.com/wp-content/uploads/2019/03/placeholder-profile-sq.jpg"
                       class="rounded-circle" alt="">
                </div>
                <div class="icon-profile d-flex justify-content-around align-items-center">
                  <div class="icon pe-2 ps-2">
                    <i @click="darkMode" class="fas fa-adjust"></i>
                  </div>
                  <div class="icon pe-2 ps-2">
                    <svg id="ee51d023-7db6-4950-baf7-c34874b80976" viewBox="0 0 24 24" width="24" height="24"
                         class="">
                      <path fill="currentColor"
                            d="M12 20.664a9.163 9.163 0 0 1-6.521-2.702.977.977 0 0 1 1.381-1.381 7.269 7.269 0 0 0 10.024.244.977.977 0 0 1 1.313 1.445A9.192 9.192 0 0 1 12 20.664zm7.965-6.112a.977.977 0 0 1-.944-1.229 7.26 7.26 0 0 0-4.8-8.804.977.977 0 0 1 .594-1.86 9.212 9.212 0 0 1 6.092 11.169.976.976 0 0 1-.942.724zm-16.025-.39a.977.977 0 0 1-.953-.769 9.21 9.21 0 0 1 6.626-10.86.975.975 0 1 1 .52 1.882l-.015.004a7.259 7.259 0 0 0-5.223 8.558.978.978 0 0 1-.955 1.185z"></path>
                    </svg>
                  </div>
                  <div @click="show_overlay = true; resetVisualList('contacts_chat')" class="icon pe-2 ps-2">
                    <svg viewBox="0 0 24 24" width="24" height="24" class="">
                      <path fill="currentColor"
                            d="M19.005 3.175H4.674C3.642 3.175 3 3.789 3 4.821V21.02l3.544-3.514h12.461c1.033 0 2.064-1.06 2.064-2.093V4.821c-.001-1.032-1.032-1.646-2.064-1.646zm-4.989 9.869H7.041V11.1h6.975v1.944zm3-4H7.041V7.1h9.975v1.944z"></path>
                    </svg>
                  </div>
                  <div class="icon pe-1 ps-1">
                    <b-dropdown variant="link" toggle-class="text-decoration-none" no-caret menu-class="icon"
                                offset="-120">
                      <template #button-content>
                        <svg viewBox="0 0 24 24" width="24" height="24" class="">
                          <path fill="currentColor"
                                d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"></path>
                        </svg>
                      </template>
                      <b-dropdown-item v-for="element in optionsDropdown" :key="element">{{ element }}</b-dropdown-item>
                    </b-dropdown>
                  </div>
                </div>
              </b-col>
            </b-row>
            <!-- End Header-->
            <!--Notify-->
            <b-row>
              <b-col cols="12" class="pe-0 ps-0">
                <div class="notify d-flex align-items-center p-3">
                  <div class="icon ps-3">
                    <svg viewBox="0 0 48 48" width="48" height="48" class="">
                      <path fill="currentColor"
                            d="M24.154 2C11.919 2 2 11.924 2 24.165S11.919 46.33 24.154 46.33s22.154-9.924 22.154-22.165S36.389 2 24.154 2zm-.744 15.428v-.618c0-.706.618-1.324 1.324-1.324s1.323.618 1.323 1.324v.618c2.559.618 4.412 2.823 4.412 5.559v3.176l-8.294-8.294a5.056 5.056 0 0 1 1.235-.441zm1.323 15.706a1.77 1.77 0 0 1-1.765-1.765h3.529a1.768 1.768 0 0 1-1.764 1.765zm7.236-.883l-1.765-1.765H17.233v-.882l1.765-1.765v-4.853a5.56 5.56 0 0 1 .794-2.912l-2.559-2.559 1.147-1.147 14.735 14.736-1.146 1.147z"></path>
                    </svg>
                  </div>
                  <div class="text ps-3">
                    <div>Ricevi notifiche di nuovi messaggi</div>
                    <div>Attiva notifiche desktop <span><svg viewBox="0 0 8 12" width="8" height="12" class=""><path
                        fill="currentColor"
                        d="M2.173 1l4.584 4.725-4.615 4.615-1.103-1.103 3.512-3.512L1 2.173 2.173 1z"></path></svg></span>
                    </div>
                  </div>
                </div>
              </b-col>
            </b-row>
            <!-- End notify-->
            <!--Search-->
            <b-row>
              <b-col cols="12" class="pe-0 ps-0">
                <search ref="searchHome" @filter="filterElement($event, 'contacts_chat')"
                        placeholder="Cerca o inizia una nuova chat"/>
              </b-col>
            </b-row>
            <!--End Search-->
            <!--List Chat-->
            <b-row class="h-100 overflow-hidden">
              <b-col cols="12" class="ps-0 pe-0 h-100">
                <div class="h-100">

                  <!--Single Card-->
                  <single_card @userSelected="userSelect($event)" :list_contacts="contacts_chat"></single_card>
                  <!--End Single Card-->

                </div>
              </b-col>
            </b-row>
            <!--End List Chat-->

            <!--Overlay-->
            <b-overlay class="h-100" :show="show_overlay" no-wrap opacity="1" variant="" no-center>
              <template #overlay>
                <div class="container-overlay h-100 d-flex flex-column">

                  <div class="top">
                    <div class="text-overlay-top d-flex justify-content-around align-items-center">
                      <i class="fas fa-arrow-left" @click="show_overlay = false; resetVisualList('contacts')"></i><span
                        class="ps-5">Nuova Chat</span>
                    </div>
                  </div>
                  <!--Search-->
                  <search @filter="filterElement($event,'contacts')" placeholder="Cerca un contatto"/>
                  <!--End Search-->
                  <div class="h-100 overflow-hidden bg-light">
                    <!-- Single Card-->
                    <single_card :list_contacts="contacts"/>
                    <!-- Single Card-->
                  </div>

                </div>
              </template>
            </b-overlay>
            <!--End Overlay-->
          </b-col>
          <b-col cols="12" md="8" class="h-100" :class="{'d-none d-md-block ': userSelected === false }">
            <!--Chat-->
            <b-row class="h-100 init-chat overflow-hidden">
              <!--INIT-->
              <b-col v-if="init" cols="12 d-flex flex-column justify-content-center align-items-center">
                <div class="image-init pb-3">
                  <img width="300" height="300" :src="require('@/assets/img/intro-connection.jpg')" alt="">
                </div>
                <div class="text-init text-center">
                  <h1>Mantieni il telefono connesso</h1>
                  <p class="pb-5 message">WhatsApp si collega al tuo telefono per sincronizzare i messaggi. Per ridurre
                    l'utilizzo dei dati, collega il telefono al Wi-Fi.</p>
                  <p class="pt-3"><span class="pe-3"><i class="fas fa-laptop"></i></span>WhatsApp è disponibile per
                    Windows. <a href="https://www.whatsapp.com/download" target="_blank">Scaricala qui</a>.</p>
                </div>
              </b-col>
              <!--End INIT-->

              <!--User Chat-->
              <b-col v-else-if="userSelected !== false" cols="12" class="h-100 ps-0 pe-0">
                <div class="chat-user-header d-flex justify-content-between align-items-center">
                  <div class="d-sm-block d-md-none pe-4 ps-3" @click="userSelected = false" style="color: #00bfa5; cursor: pointer">
                    <i class="fas fa-arrow-left"></i>
                  </div>
                  <div class="user-img-profile">
                    <img class="rounded-circle"
                         :src="require('@/assets/img/avatar'+ contacts_chat[userSelected].avatar +'.jpg')" alt="">
                  </div>
                  <div class="user-information flex-grow-1 ps-2">
                    <div class="name-user">
                      <div>{{ contacts_chat[userSelected].name }}</div>
                      <small>Ultimo accesso {{ lastAccess() }} </small>
                    </div>
                  </div>
                  <div class="icon-user-header pe-2">
                    <svg viewBox="0 0 24 24" width="24" height="24" class="">
                      <path fill="currentColor"
                            d="M15.009 13.805h-.636l-.22-.219a5.184 5.184 0 0 0 1.256-3.386 5.207 5.207 0 1 0-5.207 5.208 5.183 5.183 0 0 0 3.385-1.255l.221.22v.635l4.004 3.999 1.194-1.195-3.997-4.007zm-4.808 0a3.605 3.605 0 1 1 0-7.21 3.605 3.605 0 0 1 0 7.21z"></path>
                    </svg>
                    <svg viewBox="0 0 24 24" width="24" height="24" class="">
                      <path fill="currentColor"
                            d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"></path>
                    </svg>
                  </div>
                </div>
                <div class="chat-container overflow-auto d-flex flex-column">
                  <div class="message mt-4 mb-4 me-4 ms-4 box3"
                       :class="{'align-self-end' : message.status === 'sent', 'sb13' : message.status === 'sent','sb14' : message.status === 'received' }"
                       v-for="(message,index) in contacts_chat[userSelected].messages" :key="index">
                    <div class="ps-2 pb-2" :class="{'disabled': message.text === 'Messaggio Eliminato'}">
                      {{ message.text }}
                    </div>
                    <div class="hour-sent">
                      <span :class="{'read' : message.read}" v-if="message.status === 'sent'">
                        <svg viewBox="0 0 18 18" width="18" height="18" class="">
                         <path fill="currentColor"
                               d="M17.394 5.035l-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-.427-.388a.381.381 0 0 0-.578.038l-.451.576a.497.497 0 0 0 .043.645l1.575 1.51a.38.38 0 0 0 .577-.039l7.483-9.602a.436.436 0 0 0-.076-.609zm-4.892 0l-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-2.614-2.556a.435.435 0 0 0-.614.007l-.505.516a.435.435 0 0 0 .007.614l3.887 3.8a.38.38 0 0 0 .577-.039l7.483-9.602a.435.435 0 0 0-.075-.609z"></path>
                        </svg>
                      </span>
                      {{ hourMessage(message.date) }}
                    </div>
                    <div v-if="message.status === 'sent'" class="hover-chavron">
                      <b-dropdown variant="link" toggle-class="text-decoration-none" no-caret menu-class="icon"
                                  offset="-120">
                        <template #button-content>
                          <i class="fas fa-chevron-down"></i>
                        </template>
                        <b-dropdown-item v-for="(element,index_el) in optionsChatDropdown" :key="index_el"
                                         :disabled="minor7(index)"
                                         @click="handle_function_call(element.func, index)">
                          <span :class="{'disabled': minor7(index)}">{{ element.el }}</span>
                        </b-dropdown-item>
                      </b-dropdown>

                    </div>
                  </div>

                </div>
                <div class="footer-chat d-flex justify-content-around align-items-center">
                  <div class="icon-send ps-2 pe-2">
                    <svg viewBox="0 0 24 24" width="24" height="24" class="">
                      <path fill="currentColor"
                            d="M19.1 17.2l-5.3-5.3 5.3-5.3-1.8-1.8-5.3 5.4-5.3-5.3-1.8 1.7 5.3 5.3-5.3 5.3L6.7 19l5.3-5.3 5.3 5.3 1.8-1.8z"></path>
                    </svg>
                  </div>
                  <div class="icon-send ps-2 pe-2">
                    <svg viewBox="0 0 24 24" width="24" height="24" class="">
                      <path fill="currentColor"
                            d="M1.816 15.556v.002c0 1.502.584 2.912 1.646 3.972s2.472 1.647 3.974 1.647a5.58 5.58 0 0 0 3.972-1.645l9.547-9.548c.769-.768 1.147-1.767 1.058-2.817-.079-.968-.548-1.927-1.319-2.698-1.594-1.592-4.068-1.711-5.517-.262l-7.916 7.915c-.881.881-.792 2.25.214 3.261.959.958 2.423 1.053 3.263.215l5.511-5.512c.28-.28.267-.722.053-.936l-.244-.244c-.191-.191-.567-.349-.957.04l-5.506 5.506c-.18.18-.635.127-.976-.214-.098-.097-.576-.613-.213-.973l7.915-7.917c.818-.817 2.267-.699 3.23.262.5.501.802 1.1.849 1.685.051.573-.156 1.111-.589 1.543l-9.547 9.549a3.97 3.97 0 0 1-2.829 1.171 3.975 3.975 0 0 1-2.83-1.173 3.973 3.973 0 0 1-1.172-2.828c0-1.071.415-2.076 1.172-2.83l7.209-7.211c.157-.157.264-.579.028-.814L11.5 4.36a.572.572 0 0 0-.834.018l-7.205 7.207a5.577 5.577 0 0 0-1.645 3.971z"></path>
                    </svg>
                  </div>
                  <div class="send flex-grow-1">
                    <input type="text" class="input-group" placeholder="Scrivi il messaggio" v-model="messageSend"
                           @keyup.enter="sendMessage">
                  </div>
                  <div class="icon-send ps-2 pe-2">
                    <svg viewBox="0 0 24 24" width="24" height="24" class="">
                      <path fill="currentColor"
                            d="M11.999 14.942c2.001 0 3.531-1.53 3.531-3.531V4.35c0-2.001-1.53-3.531-3.531-3.531S8.469 2.35 8.469 4.35v7.061c0 2.001 1.53 3.531 3.53 3.531zm6.238-3.53c0 3.531-2.942 6.002-6.237 6.002s-6.237-2.471-6.237-6.002H3.761c0 4.001 3.178 7.297 7.061 7.885v3.884h2.354v-3.884c3.884-.588 7.061-3.884 7.061-7.885h-2z"></path>
                    </svg>
                  </div>
                </div>
              </b-col>

              <!--End User Chat-->

            </b-row>
            <!-- End Chat-->
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>

import Contact from './contacts.js'
import search from "@/components/search";
import single_card from "@/components/single_card";
import moment from "moment";

export default {
  name: 'App',
  components: {search, single_card},
  data() {
    return {
      contacts_chat: Contact.contacts_chat,
      contacts: this.sortArrayObjectString(name, Contact.contacts),
      show_overlay: false,
      optionsDropdown: [
        'Nuovo gruppo',
        'Crea una stanza',
        'Profilo',
        'Archiviate',
        'Importanti',
        'Impostazioni',
        'Disconnetti'
      ],
      optionsChatDropdown: [
        {
          el: 'Cancella',
          func: 'deleteMessage'
        }
      ],
      init: true,
      userSelected: false,
      messageSend: '',
      darkClass: false,
    }
  },
  methods: {
    sortArrayObjectString(elementSort, ArrayToSort) {
      return ArrayToSort.sort((a, b) => (a[elementSort] > b[elementSort]) ? 1 : ((b[elementSort] > a[elementSort]) ? -1 : 0));
    },
    resetVisualList(list) {
      this[list].forEach((element) => {
        element.visible = true;
      })
    },
    filterElement(data, list) {
      console.log(data, list)
      this[list].forEach((element) => {
        if (data !== 0) {
          element.visible = element.name.toLowerCase().includes(data.toLowerCase()) !== false;
        } else {
          element.visible = true;
        }
      });
    },
    userSelect(data) {
      this.userSelected = data;
      this.init = false;
    },
    lastAccess() {
      let last = '';
      this.contacts_chat[this.userSelected].messages.forEach((element) => {
        if (element.status === 'received') {
          last = element.date;
        }
      });
      return moment(last, 'MM/DD/YYYY HH:mm', 'it').fromNow();
    },
    hourMessage(date) {
      return moment(date, 'MM/DD/YYYY HH:mm').format('HH:mm');
    },
    sendMessage() {
      const user = this.contacts_chat[this.userSelected];
      user.messages.push({
        date: moment().locale('it').format('MM/DD/YYYY HH:mm'),
        text: this.messageSend,
        status: 'sent',
        read: false
      });
      this.messageSend = '';
      this.botSeeMessage(user);
    },
    botSeeMessage(user) {
      let lastMessage = user.messages[user.messages.length - 1];
      setTimeout(() => {
        this.lastAccess();
        lastMessage.read = true;
      }, 3000);
      setTimeout(() => {
        user.messages.push({
          date: moment().locale('it').format('MM/DD/YYYY HH:mm'),
          text: 'Grazie',
          status: 'received'
        });
      }, 4000)
    },
    handle_function_call(function_name, index) {
      this[function_name](index);
    },
    deleteMessage(index) {
      const user = this.contacts_chat[this.userSelected];
      const messageToDelete = user.messages[index];
      messageToDelete.text = 'Messaggio Eliminato';
    },
    minor7(index) {
      const dateMessage = moment(this.contacts_chat[this.userSelected].messages[index].date, 'MM/DD/YYYY HH:mm');
      return moment().diff(dateMessage, 'minutes') > 7;
    },
    darkMode() {
      document.querySelector("body").classList.toggle('dark');
      this.darkClass = !this.darkClass;
    },
  },
}
</script>

