import { defineStore } from 'pinia'

export const useUserStore = defineStore('UserStore', {
  state: () => ({
    user: 'Austin',
  }),
  getters: {
    name() {
      return this.user
    },
  },
})
