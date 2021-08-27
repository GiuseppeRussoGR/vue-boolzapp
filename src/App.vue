<template>
  <div id="app">
    <div id="container-app">
      <b-container fluid="lg">
        <b-row class="d-flex h-100">
          <b-col cols="12" md="4" class="h-100 position-relative left-column">
            <!-- HEADER-->
            <b-row>
              <b-col cols="12" class="d-flex align-items-center justify-content-between header">
                <div class="profile flex-grow-1">
                  <img src="https://www.studiofrancesconi.com/wp-content/uploads/2019/03/placeholder-profile-sq.jpg"
                       class="rounded-circle" alt="">
                </div>
                <div class="icon-profile d-flex justify-content-around align-items-center">
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
          <b-col cols="12" md="8" class="h-100">
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
              <b-col v-else cols="12" class="h-100 ps-0 pe-0">
                <div class="chat-user-header d-flex justify-content-between align-items-center">
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
                  <div class="icon-user-header">
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
                    <div>{{ message.text }}</div>
                    <div class="hour-sent">{{ hourMessage(message.date) }}</div>
                  </div>

                </div>
              </b-col>
              <b-col cols="12" class="footer-chat"></b-col>
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
      init: true,
      userSelected: false
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
    }
  },
}
</script>

