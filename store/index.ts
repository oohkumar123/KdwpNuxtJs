import { defineStore } from 'pinia'

export const usePageStore = defineStore('page-data', {
    state: () => ({
        headData: {},
        pageData: {}
    }),
    actions: {
		async getHeadData() {
            this.headData = await $fetch("https://www.kumardesai.com/wp-json");
        },
		async getAllData() {
            
            const allData = await $fetch("https://www.kumardesai.com/wp-json/wp/v2/pages/?per_page=100");

            this.pageData = allData.reduce((arr:any, item:any)=>{
                let id = item['id'];
                arr[id] = item;
                return arr;
            }, [])
        }
	},
})