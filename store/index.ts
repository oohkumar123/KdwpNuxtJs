import { defineStore } from 'pinia'

export const usePageStore = defineStore('page-data', {
    state: () => ({
        pageData: {}
    }),
    getters: {
        getPageData: (state) => {
            return state.pageData;
        }
    },
    actions: {
		async getAllData() {
            
            const response = await fetch("https://www.kumardesai.com/wp-json/wp/v2/pages/?per_page=100");
            const allData = await response.json();

            this.pageData = allData.reduce((arr:any, item:any)=>{
                let id = item['id'];
                arr[id] = item;
                return arr;
            }, [])
        }
	},
})