import Vue from 'vue'
import ERP from './erp.vue'

Vue.config.productionTip = false

new Vue({
    render: h => h(ERP),
}).$mount('#app')
