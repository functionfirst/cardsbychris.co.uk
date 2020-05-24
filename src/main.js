import DefaultLayout from '~/layouts/Default.vue'
require('~/assets/sass/main.scss')
require('typeface-source-sans-pro')

export default function (Vue, { head }) {
  Vue.component('Layout', DefaultLayout)

  head.bodyAttrs = { class: 'is-preload' }
}
