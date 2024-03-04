<template>
    <!-- About Me -->
    <div id="about" class="container module">
                
        <SubComponentsTitle :title='title' :color='color' :classParent='faParent' :classIcon='faIcon'></SubComponentsTitle>
        
        <div class="content">
            <div class="image"><img v-bind:src="img"/></div>
            <div class="text" v-html="bio"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "About",
    data() {
        return {
            color: 'darkblue',
            bio: "",
            name: "",
            title: "",
            img: 'https://www.kumardesai.com/wp-content/uploads/2021/11/me-port.jpg',
            image_id: 0,
            faParent: 'fa-regular', 
            faIcon: 'fa-eye'

        };
    },
    created() {
        this.getPageData (35);
    },
    methods: {
        async getPageData(id) {

            const {data:{value:page_data}} = await useFetch ("https://www.kumardesai.com/wp-json/wp/v2/pages/"+id);
            const {data:{value:image_data}} = await useFetch ("https://www.kumardesai.com/wp-json/wp/v2/media/" + page_data.acf.bio_image);
            
            //Page
            this.title = page_data.title.rendered; // about me
            this.bio = page_data.content.rendered;
            this.img = image_data.source_url;
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
#about {
    background-color: $white;
    scroll-margin-top: 50px;        
    @media (max-width: $sm) {
        scroll-margin-top: 136px;
    }
    
    .content {
        padding: 0 20px 18px 20px;
        display: grid;
        grid-template-columns: auto 1fr;
        grid-template-areas: "header header" "left right";
        column-gap: 20px;
        
        @media screen and (max-width: $sm) {
            padding-top: 20px;
            grid-template-columns: 1fr;
            grid-template-areas: "header" "left" "right";
        }
            
        .title {
            grid-area: header;
            @media screen and (max-width: $sm) {
                grid-area: left;
                padding-bottom: 10px;
            }
            
            h3 {
                text-align: center;
                clear: both;
                font-size: 48px;
                @media screen and (max-width: $sm) {
                    line-height: 50px;
                }

                span {
                    color: $yellow;
                    @media screen and (max-width: $sm) {
                        display: block;
                    }
                }
            }
        }
        
        .image {
            grid-area: left;
            
            @media screen and (max-width: $sm) {
                grid-area: header;
                display: flex;
                justify-content: center;
            }
            
            img {
                width: 150px;
                display: block;
                grid-area: left;
                @media screen and (max-width: $sm) {
                    width: 200px;
                }
            }
        }
        
        .text {
            grid-area: right;
            display: flex;
            align-items: center;
            @media screen and (max-width: $sm) {
                grid-area: right;
                padding-top:20px;
            }          
            
            p {
                text-align: left;
                font-size: 16px;
                grid-area: right;
            }
        }
    }
}
</style>
