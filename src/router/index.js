import { createRouter, createWebHistory } from 'vue-router' 
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '',
        name: 'Register',
        component: () => import(/* webpackChunkName: "Register" */ '../views/Register.vue')
      },
      {
        path: '/login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue')
      }
    ]
  },
  {
    path: '/user/:username',
    name: 'User',
    component: () => import(/* webpackChunkName: "User" */ '../views/User.vue'),
    meta: { requiresAuth: true },
    children: [
      {
        path: '',
        name: 'UserLists',
        component: () => import(/* webpackChunkName: "UserLists" */ '../views/UserLists'),
        children: [
          {
            path: 'list/:id',
            name: 'ListContainer',
            component: () => import(/* webpackChunkName: "ListContainer" */ '../views/ListContainer'),
            children: [
              {
                path: '',
                name: 'List',
                component: () => import(/* webpackChunkName: "List" */ '../views/List'),
              }
            ]
          },
          {
            path: 'new-list',
            name: 'NewListContainer',
            component: () => import(/* webpackChunkName: "NewListContainer" */ '../views/NewListContainer'),
            children: [
              {
                path: '',
                name: 'new-list',
                component: () => import(/* webpackChunkName: "NewList" */ '../views/NewList')
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
}) 

/*router.beforeEach((to, from, next) => {

  const routeProtected = to.matched.some(record => record.meta.requiresAuth);

  if(routeProtected && store.modules.user.token === "") {
    next({name: 'Login'});
  } else {
    next();
  }
  
});*/

export default router
