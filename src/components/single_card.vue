<template>
  <div class="list-chat overflow-auto" :class="{'h-100' : isContacts()}">

    <div v-if="isContacts()" class="chat-box d-flex align-items-center">
      <div class="icon-group ms-2 p-2 rounded-circle">
        <svg viewBox="0 0 32 32" width="32" height="32" class="">
          <path fill="currentColor"
                d="M15.313 15.672c2.401 0 4.237-1.835 4.237-4.235S17.713 7.2 15.313 7.2s-4.235 1.836-4.235 4.237 1.834 4.235 4.235 4.235zm9.349-.64c1.571 0 2.773-1.201 2.773-2.772 0-1.571-1.202-2.773-2.773-2.773s-2.772 1.202-2.772 2.773c0 1.571 1.201 2.772 2.772 2.772zm-1.724 5.841a7.856 7.856 0 0 0-.889-1.107 8.074 8.074 0 0 0-1.825-1.413 9.05 9.05 0 0 0-.675-.346l-.021-.009c-1.107-.502-2.5-.851-4.232-.851-1.732 0-3.124.349-4.232.851l-.112.054a9.247 9.247 0 0 0-.705.374 8.137 8.137 0 0 0-1.705 1.341 7.991 7.991 0 0 0-.656.773 8.584 8.584 0 0 0-.233.334c-.063.095-.116.184-.164.263l-.012.02a4.495 4.495 0 0 0-.213.408v2.276h16.061v-2.276s-.07-.164-.225-.427a4.257 4.257 0 0 0-.162-.265zm1.724-4.357c-1.333 0-2.376.3-3.179.713a9.409 9.409 0 0 1 1.733 1.218c1.402 1.25 1.959 2.503 2.017 2.641l.021.049h4.954v-1.571s-1.294-3.05-5.546-3.05zM9.41 13.78H6.261v-3.152H4.344v3.152H1.2v1.918h3.144v3.145h1.917v-3.145H9.41V13.78z"></path>
        </svg>
      </div>
      <div class="text-chat ps-2 flex-grow-1">
        <div class="name text-black">Nuovo gruppo</div>
      </div>
    </div>

    <div v-for="(contact, index) in list_contacts" :key="index" @click="$emit('userSelected', index)">
      <div class="chat-box d-flex align-items-center"
           @mouseenter="chevron = index"
           @mouseleave="chevron = false" v-if="contact.visible">
        <div class="image-chat ps-1">
          <img :src="require('@/assets/img/avatar'+contact.avatar+'.jpg')"
               alt="" class="rounded-circle">
        </div>
        <div class="text-chat ps-2 flex-grow-1">
          <div class="name">{{ contact.name }}</div>
          <div v-if="contact.messages !== undefined" class="last-message">
        <span :class="{'read' : contact.messages[contact.messages.length - 1].read}" class="pe-1" v-if="contact.messages[contact.messages.length-1].status === 'sent'">
          <svg viewBox="0 0 18 18" width="18" height="18" class="" >
            <path fill="currentColor"
                  d="M17.394 5.035l-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-.427-.388a.381.381 0 0 0-.578.038l-.451.576a.497.497 0 0 0 .043.645l1.575 1.51a.38.38 0 0 0 .577-.039l7.483-9.602a.436.436 0 0 0-.076-.609zm-4.892 0l-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-2.614-2.556a.435.435 0 0 0-.614.007l-.505.516a.435.435 0 0 0 .007.614l3.887 3.8a.38.38 0 0 0 .577-.039l7.483-9.602a.435.435 0 0 0-.075-.609z">

            </path>
          </svg>
        </span>
            {{ contact.messages[contact.messages.length - 1].text }}
          </div>
        </div>
        <div v-if="contact.messages !== undefined"
             class="icon-hour d-flex flex-column justify-content-around h-100 align-items-end pe-2">
          <div class="hour">
            {{ lastMessage(contact.messages[contact.messages.length - 1].date) }}
          </div>
          <div class="icon pe-1">
            <i v-if="chevron === index" class="fas fa-chevron-down me-2"></i>
            <i v-if="contact.muted" class="fas fa-volume-mute"></i>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>


<script>
import moment from 'moment'

export default {
  name: "single_card",
  data() {
    return {
      chevron: false
    }
  },
  props: {
    list_contacts: Array
  },
  methods: {
    isContacts() {
      return this.list_contacts[this.list_contacts.length - 1].messages === undefined;
    },
    lastMessage(date) {
      return moment(date, 'MM/DD/YYYY HH:mm:ss').locale('it').fromNow();
    }
  }
}
</script>

