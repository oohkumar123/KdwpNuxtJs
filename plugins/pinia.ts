import { usePageStore } from '~/store'

export default defineNuxtPlugin(({ $pinia }) => {
  return {
    provide: {
      store: usePageStore($pinia)
    }
  }
})