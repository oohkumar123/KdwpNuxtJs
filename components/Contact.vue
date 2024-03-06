<template>
    <!-- Contact -->
    <div id="contact" class="container module">
        
        <SubComponentsTitle :title='title' :color='color' :classParent='faParent' :classIcon='faIcon'></SubComponentsTitle>
        
        <div class="content">
            <!-- <SubTitle :subtitle='subtitle' :color='color'></SubTitle> -->
                
            <div class="contact-info">
                <div class="contact-content" v-for="value in list" :key="value.id">
                    <div class="icon">
                        <i class="fa fa-2x" :class=value.icon></i>
                    </div>
                    <div class="contact-text-info">
                        <span>{{value.method}}:</span> <span class="nobold" v-html="value.info"></span>
                    </div>
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
const color = ref('darkblue');
const faParent = ref('fa-regular');
const faIcon = ref('fa-address-card');

let list = page_data.acf.contact_methods.map((item, i)=>({ 
    id: i, 
    method: item.field_62fc0e8b05d29,        
    icon: item.field_62fc0e9d05d2a,
    info: item.field_62fc0ea305d2b
}))

</script>

<style lang="scss">
#contact {
    background-color: $white;
    scroll-margin-top: 50px;
        
    @media (max-width: $sm) {
        scroll-margin-top: 136px;
    }

    .content {
        padding-top: 2px;
        
        .contact-info {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            padding: 30px 0 30px 0;
            //border-top: 1px dashed $lightgrey;
            //border-bottom: 1px dashed $lightgrey;
            
            @media only screen and (max-width: $md) {
                grid-template-columns: auto;
                justify-content: center;
            }
            
            .contact-content {
                display: flex;
                justify-content: center;
                align-items: center;
                @media only screen and (max-width: $md) {
                    justify-content: flex-start;
                    margin-bottom: 20px;
                    &:last-of-type {
                        margin-bottom: 0;
                    }
                }
                
                .icon {
                    width: 80px;
                    height: 80px;
                    background-color: $yellow;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    
                    @media only screen and (max-width: $md) {
                        width: 60px;
                        height: 60px;
                    }
                    
                    i {
                        color: $lightblue

                    }
                }
                .contact-text-info {
                    padding-left: 10px; 
                    font-size: 20px;
                    span {
                        font-weight: bold;
                        color: $darkblue;
                        display: block;
                        &.nobold {
                            font-weight: normal;
                            a {
                                color: $darkblue
                            }            
                        }
                    }                              
                }
            }
        }
    }
}

</style>
