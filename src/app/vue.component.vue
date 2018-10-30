<template>
    <div>
        <Header />
        <main>
            <section style="background-image: url(assets/1_background.jpg);">
                <section style=" background: linear-gradient(to bottom, rgba(6, 142, 202, 0.5), rgba(6, 142, 202, 0.9)); background-size: 100% 100%;">
                    <General />
                </section>
            </section>
            <section>
                <section></section>
            </section>
        </main>
    </div>
</template>

<script lang="ts">
import Header from "./vue-header/Header.vue";
import General from "./vue-general/general.component.vue";
export default {
    name: 'Vue-root',
    components: {
        Header,
        General
    }
}
</script>

<style scoped>

</style>



