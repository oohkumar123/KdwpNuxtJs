<template>
    <!-- High Profile Clients -->
    <div id="high-profile-clients" class="parallax-high-profile">
        <div class="container module">
                
            <SubComponentsTitle :title='title' :color='color' :classParent='faParent' :classIcon='faIcon'></SubComponentsTitle>

            <div class="content">
                <SubComponentsSubTitle :subtitle='subtitle' :color='color'></SubComponentsSubTitle>
                
                <ul class="client-carousel">
                    <li v-for="value in list" :key="value.id"><img v-bind:src="value.img" class="img-responsive" alt="" /></li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script setup>
    const props = defineProps(['data'])
    const page_data = props.data;

    const title = ref(page_data.title.rendered);
    const subtitle = ref(page_data.content.rendered);
    const color = ref('white');
    const faParent = ref('fa-solid');
    const faIcon = ref('fa-building');
    let response_img = '';
    let image_data = '';
    let list = [];
    
    for (let i in page_data.acf.client_image) {
        response_img = await fetch ("https://www.kumardesai.com/wp-json/wp/v2/media/" + page_data.acf.client_image[i])
        image_data = await response_img.json();
        list.push({ 
            id: i, 
            img: image_data.source_url 
        })
    }
    
    // let list = page_data.acf.client_image.map(async (item, i)=>{
    //     response_img = await fetch ("https://www.kumardesai.com/wp-json/wp/v2/media/" + item)
    //     image_data = await response_img.json();
    //     return { 
    //         id: i, 
    //         img: image_data.source_url 
    //     }
    // })
    // console.log('%clist: %o', 'color: red;font-size:12px', list);
    // list = ref(list)
    
    
    onMounted(() => {
        $(document).ready(() => {
            $(".client-carousel").flexisel({
            visibleItems: 5
        });
    });
})

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

#high-profile-clients {
    background-color: $darkblue;
    
    &.parallax-high-profile {
        background-image: url(/assets/images/parallax-main.jpg); 
        background-size: cover;
        background-position: 100% center;
        background-color: $lightblue;
    }
    .content {

        .nbs-flexisel-container {
            max-width: 100%;
            text-align: center;
            
            .nbs-flexisel-inner {
                overflow: hidden;
                border-top: 1px dashed $white;
                border-bottom: 1px dashed $white;
                margin-bottom: 30px;
                
                .nbs-flexisel-ul {
                    position: relative;
                    width: 9999px;
                    margin: 0px;
                    padding: 0px;
                    list-style-type: none;
                    text-align: center;
                    overflow: hidden;
                    .nbs-flexisel-item {
                        float: left;
                        margin: 0px;
                        padding: 0px;
                        position: relative;
                        line-height: 0px;
                        img {
                            position: relative;
                        }
                    }
                }
            }
            .button-nav {
                width: 27px;
                height: 27px;
                color: $white;
                border: 1px solid $white;
                display: inline-block;
                text-align: center;
                line-height: 26px;
                font-size: 16px;
                cursor: pointer;
                margin-right: 8px;
            }
        }

    }

}

</style>
