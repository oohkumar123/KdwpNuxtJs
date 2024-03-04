<template>
    <!-- JS Projects -->
    <div id="github" class="container module">
        <SubComponentsTitle :title='title' :color='color' :classParent='faParent' :classIcon='faIcon'></SubComponentsTitle>

        <div class="content">
            <SubComponentsSubTitle :subtitle='subtitle' :color='color'></SubComponentsSubTitle>

            <div class="projects">
                <div class="project flip-this" v-for="(value, index) in list" :key="index">
                    <div class="proj">
                        <div class="thumb">
                            <a v-bind:href="value.demo" target="_blank" class="demo"><img v-bind:src="value.image"></a>
                        </div>
                        <div class="desc">
                            <h3><img v-bind:src="value.logo" alt=""><a v-bind:href="value.demo" target="_blank" class="demo">{{ value.title }}</a></h3>
                            <p>{{ value.description }}</p>
                            
                        </div>
                        <div class="tech-stack">
                            <div class="stack-items">
                                <span v-for="(item, index) in value.techstack" :key="index">{{ item }}</span>
                            </div>
                        </div>
                        <div class="github-links">
                            <a v-bind:href="value.demo" target="_blank" class="demo">Demo</a>
                            <a v-bind:href="value.github" target="_blank" class="button">Repo</a>
                        </div>

                    </div>
                    <div class="bord"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

let color=ref("darkblue");
let title=ref('');
let subtitle=ref('');
let list=[];
let faParent=ref('fa-brands');
let faIcon= ref('fa-github');
let project=ref([
    {
        "image": "/assets/images/temp1.jpg",
        "title": "Weather Dashboard",
        "description": "Retrieves data from the Open Weather Map service via API calls. The data is parsed and presented using a dashboard theme. Graphs and diagrams are taken from a jQuery library and integrated into the Vue framework.",
        "demo": "https://oohkumar123.github.io/WeatherDashboardVueJs/",
        "github": "https://github.com/oohkumar123/WeatherDashboardVueJs",
        "techstack": ["VueJS", "Vuex", "Open Weather Map API", "Options API", "Javascript", "CSS", "SCSS", "Webpack", "NodeJs", "jQuery"],
        "logo": "/assets/images/vue.png"
    },
    {
        "image": "/assets/images/temp2.jpg",
        "title": "TicTacToe",
        "description": "Simple game interface comprised of various components. I use Vuex to keep track of game data - the score, winners, losers, overall player status.",
        "demo": "https://oohkumar123.github.io/TicTacToeVueJs/",
        "github": "https://github.com/oohkumar123/TicTacToeVueJs",
        "techstack": ["VueJS", "Vuex", "Options API", "Javascript", "CSS", "SCSS", "Webpack", "NodeJs"],
        "logo": "/assets/images/vue.png"
    },
    {
        "image": "/assets/images/temp3.jpg",
        "title": "Shopping Cart",
        "description": "Simple shopping cart that leverages Vue Router to allow the user to navigate through a product purchase.",
        "demo": "https://oohkumar123.github.io/ShoppingCartVueJs/",
        "github": "https://github.com/oohkumar123/ShoppingCartVueJs",
        "techstack": ["VueJS", "Vuex", "Vue Router", "Options API", "Javascript", "CSS", "SCSS", "Webpack", "NodeJs"],
        "logo": "/assets/images/vue.png"
    },
    {
        "image": "/assets/images/temp4.jpg",
        "title": "Journey Planner",
        "description": "Accesses Google Maps API to send requests and retrieves map data to draw upon the map. Data is managed via Vuex which sends and retrieves data from different components",
        "demo": "https://oohkumar123.github.io/JourneyPlannerVueJs/",
        "github": "https://github.com/oohkumar123/JourneyPlannerVueJs",
        "techstack": ["VueJS", "Vuex", "Options API", "Google Maps API", "Javascript", "CSS", "SCSS", "Webpack", "NodeJs"],
        "logo": "/assets/images/vue.png"
    },
    {
        "image": "/assets/images/temp5.png",
        "title": "Job Application Tracker",
        "description": "An applicaton to track job applications. Built in Express JS, using an Express templating system and connected to MongoDB",
        "demo": "https://lazy-duck-hose.cyclic.app/login",
        "github": "https://github.com/oohkumar123/JobHuntExpressJS",
        "techstack": ["Express Js", "MongoDB ", "EJS templates", "Javascript", "CSS", "SCSS", "NodeJs", "Docker"],
        "logo": "/assets/images/express.png"
    }
]);

const page_data = await setPageData(343);

//Page
title = page_data.title.rendered;
subtitle = page_data.content.rendered;

//ACF
const jsProject = project.value;
for (let i in jsProject) {
    list.push({
        id: i,
        image: jsProject[i].image,
        title: jsProject[i].title,
        description: jsProject[i].description,
        demo: jsProject[i].demo,
        github: jsProject[i].github,
        techstack: jsProject[i].techstack,
        logo: jsProject[i].logo
    })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#github {
    background-color: $white;
    scroll-margin-top: 50px;
    @media (max-width: $sm) {
        scroll-margin-top: 136px;
    }

    .content {
        padding-bottom: 20px;

        @media (max-width: $sm) {
            padding: 0 20px 20px 20px;
        }

        .projects {
            margin: auto;

            .project {
                &:last-of-type {
                    .bord {
                        display: none;                        
                    }
                }            
                .bord {
                    margin-bottom: 10px;
                    border-bottom: 1px dotted #ccc;
                    padding-bottom: 10px;
                    
                }
                .proj {
                    display: flex;
                    width: 100%;
                    height: 100%;

                    &:hover {
                        transition: 0.2s;
                        transform: translateX(25px);
                    }

                    @media (max-width: $lg) {
                        display: grid;
                        grid-template-columns: auto 1fr;
                        grid-template-rows: auto;
                        row-gap: 20px;
                        column-gap: 15px;;
                        grid-template-areas:
                            "image description"
                            "techstack techstack"
                            "github github";
                        margin-bottom: 20px;
                        padding-bottom: 20px;
                    }

                    @media (max-width: $sm) {
                        // grid-template-areas:
                        //     "image image"
                        //     "description description"
                        //     "techstack techstack"
                        //     "github github";
                        // transition: none !important;
                        &:hover {
                            transition:  none !important;
                            transform: none !important;
                        }
                    }

                    &:last-child {
                        border: 0;
                        padding-bottom: 0;
                    }

                    .thumb {
                        grid-area: image;
                        width: 150px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        img {
                            display: block;
                        }

                        @media (max-width: $sm) {
                            align-items: flex-start;
                            width: 100%;
                            a {
                                width: 100%;
                                img {
                                    width: 100%;
                                }
                            }
                        }
                    }

                    .desc {
                        grid-area: description;
                        color: $lightblue;
                        padding: 10px;
                        padding-left: 20px;
                        flex-grow: 1;
                        
                        @media (max-width: $sm) {
                            padding: 0;
                        }

                        h3 {
                            font-size: 23px;
                            margin-bottom: 5px;
                            display: flex; 
                            align-items: center; 
                            column-gap: 5px;
                            @media (max-width: $sm) {
                                align-items: flex-start; 
                                line-height: 1;
                                font-size: 20px;
                            }
                            img {
                                width:25px;
                                @media (max-width: $sm) {
                                    margin-top: 2px;;
                                }
                            }

                            a {
                                color: $lightblue;
                            }
                        }

                        p {
                            font-size: 14px;
                        }

                    }

                    .tech-stack {
                        grid-area: techstack;
                        padding: 10px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        max-width: 200px;;
                        min-width: 200px;;

                        @media (max-width: $lg) {
                            justify-content: flex-start;
                            padding: 0;
                            max-width: 100%;

                        }

                        .stack-items {
                            display: flex;
                            flex-wrap: wrap;
                            gap: 4px;
                            justify-content: center;
                            width:100%;

                            @media (max-width: $lg) {
                                justify-content: flex-start;
                            }
                        }

                        span {
                            display: block;
                            color: white;
                            border-radius: 10px;
                            font-size: 12px;
                            padding: 5px;
                            float: left;
                            box-shadow: 2px 2px 3px #666666;


                            $i: 0;
                            $colors-list: #1d1d33, #322E2E, #463E2A, #5B4F25, #6F6020, #84701C, #988117, #AD9113, #C1A20E, #D6B309, #EAC305, #FFD400;

                            @each $current-color in $colors-list {
                                $i: index($colors-list, $current-color);

                                &:nth-child(#{$i}) {
                                    background-color: $current-color
                                }
                            }
                        }
                    }

                    .github-links {
                        grid-area: github;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        row-gap: 10px;
                        width: 150px;

                        @media (max-width: $lg) {
                            flex-direction: row;
                            width: auto;
                            justify-content: left;
                        }

                        a {
                            display: block;
                            color: white;
                            border-radius: 10px;
                            font-size: 25px;
                            padding: 5px;
                            background-color: red;
                            float: left;
                            width: 150px;
                            border: 0;
                            text-align: center;


                            &.demo {
                                background-color: #1d1d33;
                            }

                            &.button {
                                background-color: #988117;
                            }

                            @media (max-width: $lg) {
                                margin-right: 15px;
                            }

                        }
                    }
                }
            }
        }
    }

}</style>
