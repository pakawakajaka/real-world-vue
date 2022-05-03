import { defineStore } from 'pinia'

export const useFlashMessageStore = defineStore('FlashMessageStore', {
  state: () => ({
    message: '',
  }),
})
