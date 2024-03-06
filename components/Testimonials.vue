<template>
    <!-- Testimonials -->
    <div id="testimonials" class="parallax-testimonials">
        <div class="container module">
                
            <SubComponentsTitle :title='title' :color='color' :classParent='faParent' :classIcon='faIcon'></SubComponentsTitle>

            <div class="content">
                
                <SubComponentsSubTitle :subtitle='subtitle' :color='color'></SubComponentsSubTitle>

                <div class="testimonial">
                    <ul class="rslides-testimonials rslides">
                        <li v-for="value in list" :key="value.id">
                            <blockquote v-html="value.quote"></blockquote>
                            <span>{{value.author}}</span>
                        </li>
                    </ul>
                    <nav class="rslides-navi testimonials-navi"></nav>
                </div>                    
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
const faParent = ref('fa-regular');
const faIcon = ref('fa-thumbs-up');

let list = page_data.acf.testimonials.map((item, i)=>({ 
    id: i, 
    author: item.field_52e5ce5dc31f8,        
    quote: item.field_52e5ce52c31f7
}))

onMounted(() => {
    $(document).ready(() => {
        $(".rslides-testimonials").responsiveSlides({
            nav: true,
            auto: false,
            prevText: "<i class='fs1 fa-solid fa-angle-left'></i>",
            nextText: "<i class='fs1 fa-solid fa-angle-right'></i>",
            navContainer: ".testimonials-navi"
        })
    });
}); 
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

#testimonials {
    background-color: $darkblue;
    
    &.parallax-testimonials {
        background-image: url(/assets/images/parallax-main.jpg); 
        background-size: cover;
        background-position: 100% center;
        background-color: $lightblue;
        color: $white;
        text-align: center;
    }
    
    .content {
        padding-bottom: 14px;
        .testimonial {
            .rslides {
                position: relative;
                list-style: none;
                overflow: hidden;
                width: 100%;
                padding: 0;
                margin: 0;
                li {
                    position: absolute;
                    display: none;
                    width: 100%;
                    left: 0;
                    top: 0;
                    &:first-child {
                        position: relative;
                        display: block;
                        float: left;
                    }
                    blockquote {
                        font-style: italic;
                        width: 50%;
                        margin: 0 auto 10px auto;
                        quotes: none;
                    }
                    span {
                        font-size: 20px;
                    }
                }
            }
            .rslides-navi {
                border-top: 1px dashed $white;
                padding-top: 35px;
                width: 100px;
                margin: 15px auto 0;
            }
        }

    }
}
</style>
