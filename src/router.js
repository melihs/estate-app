import Vue from 'vue'
import VueRouter from 'vue-router'
import Users from './components/ListUser/Users'
import Notfound from './components/Notfound'
import NewUser from './components/NewUser'
import UpdateUser from './components/UpdateUser'

Vue.use(VueRouter)

export const router = new VueRouter({
    routes : [
        { path  : '/404', component: Notfound},
        { path  : '/', component: Users},
        { path  : '/create', component : NewUser},
        { path  : '/update', component : UpdateUser},
        { path  : '*', Qcomponent : Notfound},
    ],
    mode : 'history'
})
