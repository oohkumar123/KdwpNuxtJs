<template>
    <!-- High Profile Clients -->
    <div id="high-profile-clients" class="parallax-high-profile" style="background-image: url(/assets/images/parallax-main.jpg);background-position: 50% 0px;">
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
    let color=ref('white');
    let title=ref('');
    let subtitle=ref('');
    let list=[];
    let faParent=ref('fa-solid');
    let faIcon=ref('fa-building');
    
    const props = defineProps(['data'])
    const page_data = props.data;
    
    //Page
    title = page_data.title.rendered;
    subtitle = page_data.content.rendered;

    //ACF
    const client_image = page_data.acf.client_image;
    for (let i in client_image) {
        const response_img = await fetch ("https://www.kumardesai.com/wp-json/wp/v2/media/" + page_data.acf.client_image[i])
        const image_data = await response_img.json();
        list.push({ 
            id: i, 
            img: image_data.source_url 
        })
    }
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
        background-size: cover;
        background-position: 100% center;
        background-color: $lightblue;
        background-attachment: fixed;
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
