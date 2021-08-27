<template>
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
      <input type="text" class="btn" :placeholder="placeholder" v-model="filter" @keyup="filterElement()">
    </div>
  </div>
</template>

<script>
export default {
  name: "search",
  data() {
    return {
      filter: ''
    }
  },
  props: {
    placeholder: String
  },
  methods: {
    filterElement() {
      this.$emit('filter', this.filter);
    }
  }
}
</script>
