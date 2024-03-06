<template>
    <!-- Resume -->
    <div id="resume">
        <div class="container module">
            <SubComponentsTitle :title='title' :color='color' :classParent='faParent' :classIcon='faIcon'></SubComponentsTitle>

            <div class="content">
                <SubComponentsSubTitle :subtitle='subtitle' :color='color'></SubComponentsSubTitle>

                <ul class="work-table" v-for="item in list" :key="item.id">
                    <li class="date-table">{{item.date}}</li>
                    <li class="company-name">{{item.company}}</li>
                    <li><span>Title:</span> {{item.title}}</li>
                    <li><span>Role:</span> {{item.role}}</li>
                    <li><span>Employment:</span> {{item.employment}}</li>
                    <li><span>Skills:</span> {{item.skillsEmployed}}</li>
                    <li class="desc">
                        <span @click="showDesc(item)">Description: <i class="arrow" :class="{right: !item.showHide, down: item.showHide}" ></i></span>
                        <div :class="{showhide: item.showHide}" v-html="item.description"></div>
                    </li>
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
const faIcon = ref('fa-star');

const list = page_data.acf.employer.map((item, i)=>(
    {
        id: i, 
        company: item.field_62eaf95af9e7d,        
        date: item.field_62eaf963f9e7e,        
        title: item.field_62eaf96cf9e7f,        
        role: item.field_62eaf979f9e80,        
        employment: item.field_62eaf982f9e81,
        skillsEmployed: item.field_62eaf98df9e82,
        description: item.field_6307ba0ea2372,
        showHide: false
    }
));

function showDesc(el) {
    try {
        list.value[el.id].showHide = !list.value[el.id].showHide;
    } catch (error) {
        console.log(error);
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#resume {
    scroll-margin-top: 50px;
    background-color: $darkblue;
    
    @media (max-width: $sm) {
        scroll-margin-top: 136px;
    }
    .content {

        margin-bottom: 15px;
        margin-top: 20px;
        
        @media only screen and (max-width: $md) {
            margin-bottom: 0;
            margin-top: 20px;
        }
        
        ul.work-table {
            text-align: center;
            color: $white;
            padding-bottom: 20px;
            &:last-child {
                padding-bottom: 0;
            }

            @media only screen and (max-width: $md) {
                &:last-child {
                    padding-bottom: 8px;
                }
            }
            
            > li {
                padding: 11px;
                border-bottom: 1px solid $lightblue;
                font-size: 18px;
                span {
                    color: $yellow;
                    @media only screen and (max-width: $md) {
						display: block;
                        font-weight: bold;
					}
                    
                    .arrow {
                        border: solid $yellow;
                        border-width: 0 2px 2px 0;
                        display: inline-block;
                        padding: 3px;
                    }

                    .right {
                        transform: rotate(-45deg);
                        -webkit-transform: rotate(-45deg);
                    }

                    .left {
                        transform: rotate(135deg);
                        -webkit-transform: rotate(135deg);
                    }

                    .up {
                        transform: rotate(-135deg);
                        -webkit-transform: rotate(-135deg);
                    }

                    .down {
                        transform: rotate(45deg);
                        -webkit-transform: rotate(45deg);
                    }
                }

                &.date-table {
                    color: $darkblue;
                    border-bottom: none;
                    padding: 6px;
                    background-color: $yellow;
                    font-size: 24px;
                }

                &.company-name {
                    font-size: 24px;
                    font-weight: bold;
                }

                &:last-child {
                    border-bottom:0;
                }
                
                &.desc {
                    span {
                        cursor: pointer;
                    }
                   
                    div {
                        padding-top: 10px;
                        display: none; 
                        max-width: 770px;
                        margin:auto;
                        text-align: center;
                        &.showhide {
                            display: block;
                        }
                        li {
                             padding-bottom: 20px;
                             
                             &:last-child {
                                padding-bottom: 0;
                             }
                        }
                        li:before {
                            content: '>> ';
                            font-weight: bold;
                            color: $yellow;
                        }
                    }
                }
            }
        }
    }
}

</style>
