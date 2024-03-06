<template>
    <div>
        <HeaderEngineer :data="headData" />
        <NavBarEngineer />
        <About :data="data[35]"/>
        <Resume :data="data[329]" />
        <TechStack :data="data[319]" />
        <Boundary />
        <GitHub :data="data[343]" />
        <Boundary />
        <Portfolio :data="data[359]"/>
        <Boundary />
        <Contact :data="data[59]" />
        <Footer />
    </div>
</template>

<script setup>
    import { usePageStore } from '@/store'
import HeaderEngineer from '~/components/HeaderEngineer.vue';
    const store = usePageStore();
    
    await store.getHeadData();
    const headData = store.headData;
    
    await store.getAllData();
    const data = store.pageData;
</script>

<style></style>