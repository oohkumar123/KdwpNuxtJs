<template>
    <div id="navigation" class="container-fluid">
        <div class="navbar-new container">
            <a href="#about">About Me</a>
            <a href="#resume">Resume</a> 
            <a href="#tech_stack">Tech Stack </a>
            <a href="#github">GitHub</a> 
            <a href="#portfolio">Portfolio</a> 
            <a href="#contact">Contact</a>
        </div>  
    </div>
</template>
<script setup>
onMounted(() => {
    let navigation = document.querySelector('#navigation');
    let offsetTop = navigation.offsetTop;
    window.addEventListener("scroll", (event) => {
        if (window.scrollY > offsetTop) {
            navigation.classList.add('fixed-nav')
        } else if ( window.scrollY < offsetTop ) {
            navigation.classList.remove('fixed-nav')
        }
    })
})
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
body:has(.fixed-nav) {
    margin-top: 50px;
}

#navigation {
    background-color: $darkblue;
    border-top:1px solid $yellow;
    border-bottom:2px solid $yellow;
    z-index: 5000;

    &.fixed-nav{position: fixed;width:100%; top:0}
    
    .navbar-new {
        display: flex;
        justify-content: space-between;
        font-size: 18px;
        color: white;
        padding:0;
        flex-wrap: wrap;
        
        @media (max-width: $lg) {
            justify-content: center;
            padding-bottom: 10px;
            font-size: 20px;
        }
        
        a {
            color:white;
            padding: 10px;
            @media (max-width: $lg) {
                padding: 10px 10px 0 10px;
            }

            &:hover {
                background-color: $yellow;
                color:$darkblue;
                @media (max-width: $lg) {
                    background-color: transparent;
                    color:$yellow;
                }

            }
        }
    }

}

</style>
