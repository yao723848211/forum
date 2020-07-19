import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
// import {Button} from "element-ui";
import { Form, FormItem, Input} from "element-ui";
import { Icon,Search,Col, Row  } from 'vant';
import { Button } from 'vant';

import { Field ,CellGroup} from 'vant';
import store from "./store";
import {ActionSheet} from 'vant';

Vue.use(Button);
Vue.use(VueAxios, axios)
Vue.use(Icon)
Vue.use(Col);
Vue.use(Row);
Vue.use(Search )
Vue.use(VueAxios, axios)
Vue.use(Field);
Vue.use(CellGroup);


Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
import { Dialog,Popup } from 'vant';
Vue.use(Dialog)
Vue.use(ActionSheet);
Vue.use(Popup)
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')
