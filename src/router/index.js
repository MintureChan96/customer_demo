import Vue from 'vue'
import Router from 'vue-router'
import Customers from '../components/Customers'
import About from '../components/About'
import CustomerDetails from "../components/CustomerDetails";
import AddCustomer from "../components/AddCustomer";
import EditCustomer from "../components/EditCustomer";

Vue.use(Router)

export default new Router({
    routes: [
        {path: '/', component: Customers},
        {path: '/about', component: About},
        {path:'/details/:id',component:CustomerDetails},
        {path:'/add',component:AddCustomer},
        {path:'/edit/:id',component:EditCustomer}
    ],
    mode: 'history'
})
