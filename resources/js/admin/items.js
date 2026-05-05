//
import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
const Vue = createApp({});

//
import Items from './components/Items.vue';
Vue.component('items', Items);

//
Vue.mount('#app');
