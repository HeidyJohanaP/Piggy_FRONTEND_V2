import vueRouter from 'vue-router'

import Movimiento from './components/Movimiento'
import consulta from './components/consulta'
import App from './App'
import reportes from './components/reportes'
import User from './components/User'
import logIn from './components/logIn'
import register from './components/register'

const router = new vueRouter({
    mode: 'history',
    base: __dirname,

    routes: [
        {
            path: '/',
            name: "root",
            component: App
        },

        {
            path: '/user/:username',
            name: "user",
            component: User
        },

        {
            path: '/autenticar',
            name: "login",
            component: logIn
        },

        {
            path: '/register',
            name: "register",
            component: register
        },

        {
            path: '/mov/nuevo',
            name: "crear_movimiento",
            component: Movimiento
        },
        {
            name: "consulta",
            path: "usuario_mov",
            component: consulta
        },
        {
            name: "reporte",
            path: "/reporte",
            component: reportes
        }
    ]
});

export default router;
