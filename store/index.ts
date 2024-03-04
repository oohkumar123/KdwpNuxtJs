import { defineStore } from 'pinia'

export const useAlertsStore = defineStore('alerts', {
	state: () => {
		return {
			pagedData: ['car1', 'car2', 'car3'],
		}
	},
	getters: {
		getData: (state) => state.pagedData,
	},
})