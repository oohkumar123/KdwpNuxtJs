<template>
    <div class="title" :class=color>
        <h2><span class="fs1" :class="[classParent, classIcon]" ></span><span v-html="title"></span></h2>
        <div class="head-line" :class=color></div>
    </div>
</template>
<script>
export default {
    name: "Title",
    props: ['title','color','classParent', 'classIcon'],
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

.title {
    text-align: center;
    padding: 7px 20px 0 20px;
    
    @media (max-width: $lg) {
        padding: 7px 20px 20px 20px;
    }
    
    @media (max-width: $sm) {
        padding: 7px 20px 12px 20px;
    }

    &.darkblue {
        color: $lightblue;
    }
    &.white {
        color: $white;
    }
    
    h2 {
        font-size: 35px;
        display: flex;
        align-items: center;
        justify-content: center;        
        @media screen and (max-width: $sm) {
            font-size: 30px;
            padding-bottom:10px;
            line-height: 120%;
        }            
        
        span {
            @media only screen and (max-width: $md) {
                display: block;
            }
            &.fa-brands {
                font-size: 40px;
                color:#1D1D33
            }
        }
        
        .fs1 {
            font-size: 25px;
            padding-right: 12px;
            line-height: 49px;
            position: relative;
            top: -1px;
            // @media screen and (max-width: $sm) {
            //     display: none;
            // }            

        }
    }

    .head-line {
        width: 100px;
        height: 1px;
        margin: auto;
        clear: both;
        margin-top: 4px;
        &.darkblue {
            background-color: $lightblue;
        }
        &.white {
            background-color: $white;
        }
    }
}

</style>
