import VueRouter from 'vue-router';
import Home from "./components/Home.vue";
import Create from "./components/Create.vue";
import Details from "./components/Details.vue";


export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
		},
		{
            path: '',
            name: 'home',
            component: Home
		},
		{
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/create',
            name: 'create',
            component: Create
		},
		{
            path: '/details',
            name: 'details',
            component: Details
        },
        // {
        //     path: '/filme/:id',
        //     name: 'filme',
        //     component: Filme,
        //     children: [
        //         {
        //             path: 'edit',
        //             name: 'editar-filme',
        //             component: EditarFilme
        //         }
        //     ]
        // },
    ]
});