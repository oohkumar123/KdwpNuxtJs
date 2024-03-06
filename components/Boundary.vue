<template>
    <!-- Boundary -->
    <div id="boundary" class="parallax-boundary"></div>
</template>

<style lang="scss">
#boundary {
    background-color: $darkblue;
    height: 150px;
    &.parallax-boundary {
        background-image: url(/assets/images/parallax-main.jpg);
        background-size: cover;
        background-position: 100% center;
        background-color: $lightblue;
    }
}
</style>
