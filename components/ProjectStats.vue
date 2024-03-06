<template>
    <!-- Project Stats -->
    <div id="project-stats" class="container module">
                
        <SubComponentsTitle :title='title' :color='color' :classParent='faParent' :classIcon='faIcon'></SubComponentsTitle>

        <div class="content">
            <div class="number_container"  v-for="value in list" :key="value.id">
                <div class="number">{{value.data_perc}}</div>
                <h3 class="number_details" v-html="value.title"></h3>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['data'])
const page_data = props.data;

let color = ref('darkblue');
let title = ref(page_data.acf.title);
let faParent = ref('fa-solid');
let faIcon = ref('fa-display');

let list = page_data.acf.project_stats.map((item, i)=>(
    {
        id: i, 
        data_perc: item.field_62e9a6795bbee, 
        title: item.field_62e9a6805bbef      
    }
));
    
onMounted(() => {
    $(document).ready(() => {
        $('.number_container').appear(function() {
            var count_element = $(".number", this).html();
            $('.number', this).countTo({
                from: 0,
                to: count_element,
                speed: 2500,
                refreshInterval: 50,
            });
        });
    });
})

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

    #project-stats {
        background-color: $white;
        
        .content {
            padding-bottom: 15px;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
           
            @media screen and (max-width: $lg) {
                grid-template-columns: 1fr 1fr;
            }            
            @media screen and (max-width: $sm) {
                grid-template-columns: 1fr;
            }            

            
            
            .number_container {
                display: flex;
                justify-content: center;
                flex-direction: column;
                text-align: center;
                
                @media screen and (max-width: $lg) {
                    margin-bottom: 20px;;
                }            
                
                .number {
                    font-size: 80px;
                    line-height: 1.2;
                    color: $yellow;
                    margin-bottom: 10px;
                    @media screen and (max-width: $lg) {
                        margin-bottom: 0;;
                    }            
                    @media screen and (max-width: $lg) {
                        font-size: 135px;
                    }            

                }
                
                .number_details {
                    color: $lightblue;
                    font-size: 26px;
                    line-height: 31px;
                    @media screen and (max-width: $lg) {
                        font-size: 44px;
                        line-height: 42px;
                    }            
                }
            }
        }
        .divider {
            border-top: 6px dashed $lightgrey;
            margin-top: 32px;
        }
    }

</style>
