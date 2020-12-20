import vueRouter from 'vue-router'
import Movimiento from './components/Movimiento'
import consulta from './components/consulta'
import App from './App'
import reportes from './components/reportes'
import logIn from './components/logIn'
import register from './components/register'

const router = new vueRouter({

    routes: [
        {
            path: '/',
            name: "root",
            component: App
        },

        /*{
            path: '/user/:username',
            name: "user",
            component: user
        },*/

        {
            path: '/login',
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
            path: "/mov",
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