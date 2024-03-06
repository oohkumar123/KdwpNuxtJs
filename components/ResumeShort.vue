<template>
    <!-- Resume -->
    <div id="resume">
        <div class="container module">
            <SubComponentsTitle :title='title' :color='color' :classParent='faParent' :classIcon='faIcon'></SubComponentsTitle>

            <div class="content">
                <SubComponentsSubTitle :subtitle='subtitle' :color='colorSub'></SubComponentsSubTitle>
                <ul class="work-table" v-for="item in list" :key="item.id">
                    <li class="date-table">{{item.date}}</li>
                    <li class="company-name">{{item.company}},  {{item.title}}</li>
                </ul>
                <NuxtLink to="/engineer#resume" class="more-detail">
                    Click here for more detail
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['data'])
const page_data = props.data;

const title = ref(page_data.title.rendered);
const subtitle = ref(page_data.content.rendered);

const color = ref('darkblue');
const colorSub = ref('white');
const faParent = ref('fa-solid');
const faIcon = ref('fa-star');

const list = page_data.acf.employer.map((item, i)=>(
    {
        id: i, 
        date: item.field_62eaf963f9e7e,        
        company: item.field_62eaf95af9e7d,        
        title: item.field_62eaf96cf9e7f,        
    }
));

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#resume {
    scroll-margin-top: 50px;
    background-color: white;
    text-align: center;
    padding-bottom:20px;
    
    @media (max-width: $sm) {
        scroll-margin-top: 136px;
        padding-left:10px;
        padding-right: 10px;
        padding-bottom:0;
    }
    .content {
        display: inline-block; 
        background-image: url(/assets/images/parallax-main.jpg);
        background-size: cover;
        background-position: 100% center;
        background-color: $lightblue;
        padding:20px;
        border-radius: 20px;;
        margin-bottom: 15px;
        margin-top: 20px;
        
        @media only screen and (max-width: $md) {
            margin-bottom: 0;
            margin-top: 14px;
        }
        
        ul.work-table {
            text-align: center;
            color: $white;
            border-bottom: 1px dotted $white;
            padding-bottom: 10px;
            margin-bottom: 10px;
            
            &:last-child {
                padding-bottom: 0;
                border-bottom: 0;
            }

            @media only screen and (max-width: $md) {
                &:last-child {
                    padding-bottom: 8px;
                }
            }
            
            > li {
                font-size: 18px;

                &.date-table {
                    color: $white;
                    border-bottom: none;
                    font-size: 18px;
                }

                &.company-name {
                    font-size: 18px;
                    font-weight: bold;
                }

            }
        }
        .more-detail {
            margin-top: 15px;;
            display: inline-block;
            color:$darkblue;
            background-color: $yellow;
            padding: 10px 20px;
            border-radius: 20px;;


        }
    }
}

</style>
