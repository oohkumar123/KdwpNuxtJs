<template>
    <!-- Range of Skills -->
    <div id="range-of-skills">
        <div class="container module">
                    
            <SubComponentsTitle :title='title' :color='color' :classParent='faParent' :classIcon='faIcon'></SubComponentsTitle>
            
            <div class="content">
                <div class="services-box" v-for="value in list" :key="value.id">
                    <div class="services-icon icon fa-solid" :class="value.data_icon"></div>
                    <h4>{{value.title}}</h4>
                    <p>{{value.description}}</p>
                </div>
            </div>
        </div>
    </div>
</template>
 
<script setup>
let color = ref('white');
let title = ref('Range of Skills');
let faParent = ref('fa-solid');
let faIcon = ref('fa-kitchen-set');
let list = ref([]);
let services = ''

const page_data = await setPageData(42);

//Page
title = page_data.title.rendered;

//ACF
services = page_data.acf.services;

list = services.map((item, i)=>{ 
    return {
        id: i, 
        data_icon: item.field_62eac54bbb81c, 
        title: item.field_52e5c83b7909b,          
        description: item.field_52e5c8437909c
    }
});
</script>

<style lang="scss">

#range-of-skills {
    background-color: $darkblue;
    
    .content {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        margin-top: 20px;
        padding: 0 20px;

        @media only screen and (max-width: $lg) {
            grid-template-columns: 1fr 1fr;
        }
        @media only screen and (max-width: $md) {
            grid-template-columns: 1fr;
        }

        .services-box {
            position: relative;
            padding-left: 60px !important;
            margin-bottom: 20px;
            color: $white;

            @media screen and (max-width: $md) {
                padding-left: 47px !important;
            }            
            
            .services-icon {
                font-size: 25px;
                color: $yellow;
                padding-right: 15px;
                line-height: 49px;
                position: absolute;
                top: -7px;
                left: 15px;
                
                @media screen and (max-width: $md) {
                    left: 0;
                }            
                
                &[data-icon]:before {
                    font-family: 'linecons';
                    content: attr(data-icon);
                    font-weight: normal;
                    line-height: 1;
                    -webkit-font-smoothing: antialiased;
                }
            }
            h4 {
                font-weight: 500;
                margin-bottom: 10px;
                font-size: 23px;
                @media screen and (max-width: $md) {
                    margin-bottom: 5px;
                }            
            }
            p {
                font-size: 15px;
            }
        }    
    }
}
</style>
