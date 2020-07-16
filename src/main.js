import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import {Button,} from "element-ui";
import {Search,Col, Row,Icon,ActionSheet} from 'vant';

Vue.use(Button);
Vue.use(Icon)
Vue.use(Col);
Vue.use(Row);
Vue.use(Search )
Vue.use(VueAxios, axios)
Vue.use(ActionSheet);

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
