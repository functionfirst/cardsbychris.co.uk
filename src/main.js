import DefaultLayout from '~/layouts/Default.vue';
require('~/assets/css/style.sass');
require('typeface-source-sans-pro');

export default function(Vue, { head }) {
  Vue.component('Layout', DefaultLayout);

  head.bodyAttrs = { class: 'font-sans' };
}
