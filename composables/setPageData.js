export default async (pageNum) => {
    const path = (pageNum) ? '/wp/v2/pages/'+pageNum : '';
    const {data:{value:page_data}} = await useFetch ("https://www.kumardesai.com/wp-json" + path);
    return page_data;
}
