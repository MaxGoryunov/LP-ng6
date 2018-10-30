<template>
    <div>
        <Header />
        <main>
            <section style="background-image: url(assets/1_background.jpg);">
                <section style=" background: linear-gradient(to bottom, rgba(6, 142, 202, 0.5), rgba(6, 142, 202, 0.9)); background-size: 100% 100%;">
                    <General />
                </section>
            </section>
            <section id="2_background" style="background-image: url(assets/2_background.jpg);">
                <section style="background: linear-gradient(to bottom, rgba(6, 142, 202, 0.9), rgba(2, 68, 126, 1)) ;">
                    <Skills />
                </section>
            </section>
        </main>
    </div>
</template>

<script lang="ts">
import Header from "./vue-header/Header.vue";
import General from "./vue-general/general.component.vue";
import Skills from "./vue-skills/skills.component.vue";
export default {
    name: 'Vue-root',
    components: {
        Header,
        General,
        Skills
    }
}
</script>

<style scoped>

</style>



