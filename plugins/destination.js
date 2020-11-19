import Vue from 'vue'

Vue.mixin({
  methods: {
    getDestination() {
      this.$store.dispatch('destinations/getDestination')
    },
  },
})
