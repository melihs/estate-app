import Vue from 'vue'
import VueRouter from 'vue-router'
import Users from './components/Users'
import Notfound from './components/Notfound'
import NewUser from './components/NewUser'
import UpdateUser from './components/UpdateUser'
import Cms from './components/Cms'
import Login from './components/Login'

Vue.use(VueRouter)

export const router = new VueRouter({
    routes : [
        { path  : '/cms', component: Cms},
        { path  : '/login', component: Login},
        { path  : '/', component: Users},
        { path  : '/create', component : NewUser},
        { path  : '/update', component : UpdateUser},
        { path  : '/404', component: Notfound},
        { path  : '*', component : Notfound},
    ],
    mode : 'history'
})
