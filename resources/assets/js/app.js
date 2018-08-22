require('./bootstrap');
window.Vue = require('vue');

import VueRouter from 'vue-router';
import App from './App.vue';

window.Vue.use(VueRouter);

import CompaniesIndex from './components/CompaniesIndex.vue';
import CompaniesCreate from './components/CompaniesCreate.vue';
import CompaniesEdit from './components/CompaniesEdit.vue';

const routes = [
    { path: '/', component:  CompaniesIndex, name: 'indexCompanies' },
    { path: '/create', component: CompaniesCreate, name: 'createCompanies' },
    { path: '/edit/:id', component:  CompaniesEdit, name: 'editCompanies' }
];

const router = new VueRouter({ routes: routes })

new Vue ({
    el: '#app',
    render: h=> h(App),
    router: router
})