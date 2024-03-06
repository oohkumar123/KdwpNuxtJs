<template>
    <!-- Tech Stack -->
    <div id="tech_stack" class="container module">

        <SubComponentsTitle :title='title' :color='color' :classParent='faParent' :classIcon='faIcon'></SubComponentsTitle>

        <div class="content">
            <div id="tagCloud"></div>
        </div>
    </div>
</template>


<script setup>
const props = defineProps(['data'])
const page_data = props.data;

let title = ref(page_data.title.rendered);
let faParent = ref('fa-solid');
let faIcon = ref('fa-robot');
let color = 'darkblue';
let bgColor = [
    "#1d1d33",
    "#322E2E",
    "#463E2A",
    "#5B4F25",
    "#6F6020",
    "#84701C",
    "#988117",
    "#AD9113",
    "#C1A20E",
    "#D6B309",
    "#EAC305",
    "#FFD400",
]; 

let list = page_data.acf.coding_skills.map((item, i)=>{ 
    return {
        name: item.field_62eae81596744,
        link: '#',
        weight: item.field_62eae82296745,
        backgroundColor: bgColor[i % 12]
    }
});

onMounted(() => {
    $(document).ready(() => {
        let options = {
            data: list,
            container: {
                width: 'auto',
                maxWidth: '100%',
                height: 'auto',
                fontFamily: "arial",
                backgroundColor: '#ffffff'
            },
            tag: {
                format: '{tag.name}',
                maxFontSize: 45,
                minFontSize: 8,
                textShadow: true
            }
        }
        $('#tagCloud').tagCloud(options);
    });
})

</script>

<style lang="scss">
#tech_stack {
    background-color: $white;
    scroll-margin-top: 50px;

    @media (max-width: $sm) {
        scroll-margin-top: 136px;
    }

    .content {
        padding: 20px;
        padding-bottom: 20px;
    }
}
</style>
