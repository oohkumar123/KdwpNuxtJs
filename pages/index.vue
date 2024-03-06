<template>
    <div>
        <Header :data="headData" />
        <NavBar />
        <About :data="data[35]"/>
        <Qualities :data="data[284]"/>
        <ProjectStats :data="data[292]" />
        <RangeOfSkills :data="data[42]" />
        <Portfolio :data="data[359]"/>
        <HighProfileClients :data="data[45]" />
        <ResumeShort :data="data[329]"/>
        <!-- <ResumeLong :data="data[329]" style="display: none;"/> -->
        <Testimonials :data="data[53]" />
        <Contact :data="data[59]" />
        <Footer />
    </div>
</template>

<script setup>
    import { usePageStore } from '@/store'
    const store = usePageStore();
    
    await store.getHeadData();
    const headData = store.headData;
    
    await store.getAllData();
    const data = store.pageData;
</script>