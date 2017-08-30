const routers = [
    {
        path: '/',
        component: (resolve) => require(['./views/index.vue'], resolve)
    },
    {
        path: '/expertList',
        component: require('./views/expert/expertList.vue')
    },
    {
        path: '/masterList',
        component: require('./views/master/masterList.vue')
    },
    {
        path: '/shopList',
        component: require('./views/shop/shopList.vue')
    },
    {
        path: '/projectList',
        component: require('./views/project/projectList.vue')
    }
];
export default routers;