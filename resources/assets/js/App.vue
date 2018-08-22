<template>
<div class="container">
    <app-header></app-header>
    <router-view></router-view>
</div>
</template>


<script>

import header from './components/header.vue';

export default {
    components: {
        'app-header': header
    }
}
</script>


<style scoped>

</style>
