<template>
    <!-- Portfolio -->
    <div id="portfolio" class="slide-menu">
        <div class="container module">
            
            <SubComponentsTitle :title='title' :color='color' :classParent='faParent' :classIcon='faIcon'></SubComponentsTitle>

            <div class="content">
                <SubComponentsSubTitle :subtitle='subtitle' :color='color'></SubComponentsSubTitle>
                
                <div class="portfolio-container showbuttons" v-on:click.prevent="setPopUp">
                    <div v-for="value in list" :key="value.id">
                        <img v-bind:src="value.full" v-bind:data-full="value.full" class="showDialog" />
                    </div>
                </div>

                <dialog id="favDialog">
                    <form>
                        <div>
                            <button value="cancel" formmethod="dialog">Close</button>
                        </div>
                        <img src="" alt="" value="cancel" v-on:click="imageClicked">
                    </form>
                </dialog>

            </div>
        </div>
    </div>
</template>
<script setup>

    let color= ref('darkblue');
    let title= ref("projects");
    let subtitle= ref("Below are a few examples of over 700 websites built in the last 15 years.");
    let list = [];
    let faParent= ref('fa-regular');
    let faIcon= ref('fa-eye');

    const page_data = await setPageData(359);

    //Page
    title = page_data.title.rendered;
    subtitle = page_data.content.rendered;

    //ACF
    const jsprojects = page_data.acf.projects;
    async function getImagesPort() {
        for (let i in jsprojects) {
            const response_img = await fetch("https://www.kumardesai.com/wp-json/wp/v2/media/" + jsprojects[i].field_62fbf8a4b071e)
            const image_data = await response_img.json();

            list.push({
                id: i,
                thumbnail: image_data.media_details.sizes.thumbnail.source_url,
                medium: image_data.media_details.sizes.medium.source_url,
                full: image_data.media_details.sizes.full.source_url,
                name: jsprojects[i].field_62fbf898b071d
            })
        }

    }
    getImagesPort();
    //this.list = [...this.list,...mylist];

    function setPopUp(item) {
        const favDialog = document.getElementById("favDialog");
        favDialog.querySelector('img').src = item.target.dataset.full
        favDialog.showModal();
    }

    function imageClicked() {
        const favDialog = document.getElementById("favDialog");
        favDialog.close();

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/scss/variables.scss';
@import '../assets/scss/styles.scss';
@import '../assets/scss/mixins.scss';

dialog {
    div {
        text-align: right;
        padding-bottom:5px;
    }
    img {
        width:100%; 
        cursor: pointer;
    }
}
::backdrop {
    background-color: black;
    opacity: 0.75;
}

button {
    outline: 0;
    border:0;
    font-size: 17px;
}

dialog:modal {
    overlay: auto !important;
    padding: 5px;
}

#portfolio {

    background-color: $white;
    scroll-margin-top: 50px;

    @media (max-width: $sm) {
        scroll-margin-top: 136px;
    }

    .container {
        padding-bottom: 20px;

        .content {
            .portfolio-container {
                display: grid;
                grid-template-columns: repeat(auto-fill, 150px);
                justify-content: center;

                img {
                    width: 100%;
                    cursor: pointer;
                }

                @media (max-width: 500px) {
                    grid-template-columns: 1fr 1fr;
                }

            }
        }
    }
}</style>
