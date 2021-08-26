<template>
  <div id="app">
    <div id="container-app">
      <b-container fluid="lg">
        <b-row class="d-flex h-100">
          <b-col cols="12" md="4" class="h-100 position-relative">
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
                    <div @click="show_overlay = true" class="icon pe-2 ps-2">
                      <svg viewBox="0 0 24 24" width="24" height="24" class="">
                        <path fill="currentColor"
                              d="M19.005 3.175H4.674C3.642 3.175 3 3.789 3 4.821V21.02l3.544-3.514h12.461c1.033 0 2.064-1.06 2.064-2.093V4.821c-.001-1.032-1.032-1.646-2.064-1.646zm-4.989 9.869H7.041V11.1h6.975v1.944zm3-4H7.041V7.1h9.975v1.944z"></path>
                      </svg>
                    </div>
                    <div class="icon pe-2 ps-2">
                      <svg viewBox="0 0 24 24" width="24" height="24" class="">
                        <path fill="currentColor"
                              d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"></path>
                      </svg>
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
                  <div class="search d-flex pt-1 pe-2 pb-1 ps-2 align-items-center justify-content-center">
                    <div class="button-search">
                      <button class="btn d-none">
                        <svg viewBox="0 0 24 24" width="24" height="24" class="">
                          <path fill="currentColor" d="M12 4l1.4 1.4L7.8 11H20v2H7.8l5.6 5.6L12 20l-8-8 8-8z"></path>
                        </svg>
                      </button>
                      <button class="btn">
                        <svg viewBox="0 0 24 24" width="24" height="24" class="">
                          <path fill="currentColor"
                                d="M15.009 13.805h-.636l-.22-.219a5.184 5.184 0 0 0 1.256-3.386 5.207 5.207 0 1 0-5.207 5.208 5.183 5.183 0 0 0 3.385-1.255l.221.22v.635l4.004 3.999 1.194-1.195-3.997-4.007zm-4.808 0a3.605 3.605 0 1 1 0-7.21 3.605 3.605 0 0 1 0 7.21z"></path>
                        </svg>
                      </button>
                    </div>
                    <div class="text-search flex-grow-1">
                      <input type="text" class="btn" placeholder="Cerca o inizia una nuova chat">
                    </div>
                  </div>
                </b-col>
              </b-row>
              <!--End Search-->
              <!--List Chat-->
              <b-row class="h-100 overflow-hidden">
                <b-col cols="12" class="ps-0 pe-0 h-100">
                  <div class="list-chat overflow-auto">

                    <!--Single Card-->
                    <div v-for="(contact, index) in contacts" :key="index" class="chat-box d-flex align-items-center"
                         @mouseenter="chavron = index"
                         @mouseleave="chavron = false">
                      <div class="image-chat ps-1">
                        <img :src="require('@/assets/img/avatar'+contact.avatar+'.jpg')"
                             alt="" class="rounded-circle">
                      </div>
                      <div class="text-chat ps-2 flex-grow-1">
                        <div class="name">{{ contact.name }}</div>
                        <div class="last-message">
                        <span class="pe-1" v-if="contact.messages[contact.messages.length-1].status === 'sent'">
                          <svg viewBox="0 0 18 18" width="18" height="18" class="">
                            <path fill="currentColor"
                                  d="M17.394 5.035l-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-.427-.388a.381.381 0 0 0-.578.038l-.451.576a.497.497 0 0 0 .043.645l1.575 1.51a.38.38 0 0 0 .577-.039l7.483-9.602a.436.436 0 0 0-.076-.609zm-4.892 0l-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-2.614-2.556a.435.435 0 0 0-.614.007l-.505.516a.435.435 0 0 0 .007.614l3.887 3.8a.38.38 0 0 0 .577-.039l7.483-9.602a.435.435 0 0 0-.075-.609z">

                            </path>
                          </svg>
                        </span>{{ contact.messages[contact.messages.length - 1].text }}
                        </div>
                      </div>
                      <div class="icon-hour d-flex flex-column justify-content-around h-100 align-items-end pe-2">
                        <div class="hour">
                          13.05
                        </div>
                        <div class="icon pe-1">
                          <i v-if="chavron === index" class="fas fa-chevron-down me-2"></i>
                          <i v-if="contact.muted" class="fas fa-volume-mute"></i>
                        </div>
                      </div>
                    </div>
                    <!--End Single Card-->

                  </div>
                </b-col>
              </b-row>
              <!--End List Chat-->

            <b-overlay class="h-100" :show="show_overlay" no-wrap opacity="1" variant="">
              <template #overlay>
                <div class="text-center">
                  <p id="cancel-label">Please wait...</p>
                  <b-button
                      ref="cancel"
                      variant="outline-danger"
                      size="sm"
                      aria-describedby="cancel-label"
                      @click="show_overlay = false"
                  >
                    Cancel
                  </b-button>
                </div>
              </template>
            </b-overlay>

          </b-col>
          <b-col cols="12" md="8">
            lsita messaggi
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>

import Contact from './js'

export default {
  name: 'App',
  components: {},
  data() {
    return {
      chavron: false,
      contacts: Contact.contacts,
      show_overlay: false
    }
  },
  mounted() {
  }
}
</script>

