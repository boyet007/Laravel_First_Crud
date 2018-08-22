require('./bootstrap');
window.Vue = require('vue');

import VueRouter from 'vue-router';
import App from './App.vue';

window.Vue.use(VueRouter);

import CompaniesIndex from './components/CompaniesIndex.vue';
import CompaniesCreate from './components/CompaniesCreate.vue';
import CompaniesEdit from './components/CompaniesEdit.vue';

const routes = [
    { path: '/', component:  CompaniesIndex },
    { path: '/create', component: CompaniesCreate },
    { path: '/edit', component:  CompaniesEdit }
];

const router = new VueRouter({ routes: routes })

new Vue ({
    el: '#app',
    render: h=> h(App),
    router: router
})