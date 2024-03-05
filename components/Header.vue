<template>
    <!-- Header -->
    <header id="header" class="parallax-home" style="background-image: url(/assets/images/parallax-main.jpg); background-position: 50% 0px;">
        <div class="content">
            <div class="welcome">
                <img src="/assets/images/line.png" />
                <h3>Welcome</h3>
                <img src="/assets/images/line.png" />
            </div>

            <p class="my-name">{{ name }}</p>

            <p class="my-description" v-html="description"></p>

            <div class="down-pointer" style="background-image: url(/assets/images/site_header_line.png);">
                <span><i class="fa-solid fa-angle-down"></i></span>
            </div>

        </div>
    </header>
</template>

<script setup>
    import { usePageStore } from '@/store'
    const store = usePageStore();
    await store.getAllData();
    
    let name = ref('');
    let description = ref('');
    const response = await fetch("https://www.kumardesai.com/wp-json");
    const page_data = await response.json();

    description = page_data.description;
    name = page_data.name;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
#header {

    display: flex;
    justify-content: center;
    align-items: center;

    &.parallax-home {
        background-size: cover;
        background-position: 100% center;
        background-color: $lightblue;
        background-attachment: fixed;
    }

    .content {
        color: $white;
        text-align: center;
        padding: 20px;

        .welcome {
            padding-bottom: 20px;

            h3 {
                font-size: 36px;

                @media (max-width: $sm) {
                    font-size: 24px;
                }
            }

            img {
                background-color: $white;
                height: 1px;
                vertical-align: middle;
                width: 125px;

                @media (max-width: $sm) {
                    display: none;
                }
            }
        }

        p {
            text-transform: uppercase;
            padding-bottom: 20px;

            &.my-name {
                font-size: 120px;
                line-height: normal;

                @media (max-width: $sm) {
                    font-size: 74px;
                }
            }

            &.my-description {
                font-size: 36px;

                //br {display: none;}
                @media (max-width: $sm) {
                    font-size: 27px;
                    //br {display: block;}
                    //span {display: none;}
                }
            }
        }

        .down-pointer {
            display: flex;
            position: relative;
            background-position: 0 40px;
            background-repeat: repeat-x;
            background-position: center center;

            span {
                border: 1px solid #ffffff;
                border-radius: 50%;
                color: $white;
                display: block;
                margin: auto;
                width: 80px;
                height: 80px;

                i {
                    line-height: 80px;
                    font-size: 35px;
                }
            }
        }
    }
}
</style>
