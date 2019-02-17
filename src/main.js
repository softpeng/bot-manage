// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'es6-promise/auto'
import Vue from 'vue'
import { Button,
    Input,
    Row,
    Col,
    Menu,
    MenuItem,
    Dialog,
    Form,
    FormItem,
    Select,
    Option,
    MessageBox,
    Table,
    TableColumn,
    Pagination,
    Upload
} from 'element-ui'
import App from './App'
import router from './router'
import '@/styles/index.scss'

// 第三方组件
Vue.use(Button)
Vue.use(Input)
Vue.use(Row)
Vue.use(Col)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Dialog)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Select)
Vue.use(Option)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Pagination)
Vue.use(Upload)
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
