import VueRouter from 'vue-router';
import Home from "./components/Home.vue";
import Create from "./components/Create.vue";
import Details from "./components/Details.vue";
import Edit from "./components/Edit.vue";


export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/home',
            
		},
		{
            path: '',
            redirect: '/home',            
		},
		{
            path: '*',
            redirect: '/home',            
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
            path: '/product/:id',
            name: 'product',
			component: Details,
			props: true,
			children: [
				{
					path: 'edit',
					name: 'productEdit',
					component: Edit,
					props: true,
				}
			]
        }        
    ]
});