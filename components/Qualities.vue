<template>
    <!-- Qualities -->
    <div id="qualities" class="parallax-qualities">
        <div class="container module">
            <div class="content">
                <div class="info-box" v-for="value in list" :key="value.id">
                    <div class="icon fa-solid" :class="value.data_icon"></div>
                    <h3>{{ value.title }}</h3>
                    <p>{{ value.quality }}</p>
                </div>
            </div>
        </div> 
    </div>
</template>

<script setup>
const props = defineProps(['data'])
const page_data = props.data;

let list = page_data.acf.quality.map((item, i)=>(
    {
        id: i, 
        data_icon: item.field_62e99f1d7a348, 
        title: item.field_62e99f267a349,          
        quality: item.field_62e99f2e7a34a
    }
));

</script>

<style lang="scss">
#qualities {
    &.parallax-qualities {
        background-image: url(/assets/images/parallax-main.jpg); 
        background-size: cover;
        background-position: 100% center;
        background-color: $lightblue;
    }

    .content {
        display: flex;
        padding: 20px 0;

        @media screen and (max-width: $md) {
            flex-direction: column;
        }            
        
        .info-box {
            color: $white;
            text-align: center;
            flex: 1;
                
            @media screen and (max-width: $md) {
                margin-bottom:30px;
                &:last-child {
                    margin-bottom:0;
                }
            }            
            
            .icon {
                font-size: 35px;
                margin-bottom: 16px;
                color: $yellow;
                @media screen and (max-width: $md) {
                    margin-bottom:4px;
                }            

            }
            
            h3 {
                font-size: 26px;
            }
            
            p {
                font-size: 14px;
                margin-top: 5px;
                padding: 0 20px;
            }
        }
    }
}
</style>
