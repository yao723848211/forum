import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import {Button} from "element-ui";
import { Icon,Search,Col, Row  } from 'vant';

Vue.use(Button);

Vue.use(Col);
Vue.use(Row);
Vue.use(Search )
Vue.use(Icon);
Vue.use(VueAxios, axios)


Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
