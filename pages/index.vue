<template>
    <div>
        <Header />
        <NavBar />
        <About :data="data[35]"/>
        <Qualities :data="data[284]"/>
        <TechStack :data="data[319]" />
        <RangeOfSkills :data="data[42]" />
        <ProjectStats :data="data[292]" />
        <Resume :data="data[329]" />
        <GitHub :data="data[343]" />
        <HighProfileClients :data="data[45]" />
        <Portfolio :data="data[359]"/>
        <Testimonials :data="data[53]" />
        <Contact :data="data[59]" />
        <Footer />
    </div>
</template>

<script setup>
    import { usePageStore } from '@/store'
    const store = usePageStore();
    await store.getAllData();
    const data = store.pageData;
</script>

<style></style>