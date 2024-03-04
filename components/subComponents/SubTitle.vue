

<template>
    <h2 class="subtitle" :class=color v-html="subtitle"></h2>
</template>
<script>
export default {
    name: "SubTitle",
    props: {
        subtitle: String,
        color: String
    }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.subtitle {
    text-align: center;
    font-size: 25px;
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 0 20px;
    
    @media only screen and (max-width: $md) {
        line-height: 24px;
        font-size: 18px;
    }
    
    span {
        @media only screen and (max-width: $md) {
            display: block;
        }
    }
    
    &.darkblue {
        color: $lightblue;
    }
    &.white {
        color: $white;
    }
    &.red {
        color: $red;
    }

}

</style>
