// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
//定义组件
import App from './App';
import goods from './components/goods/goods';
import ratings from './components/ratings/ratings';
import seller from './components/seller/seller';
//通过npm安装的vue-router使用下面方式来给vue安装路由功能和交互
//使用vue.use方法进行全局注册

Vue.use(VueRouter);
Vue.use(VueResource);

//定义路由
const rout = [
{ path: '/', component: goods },
{ path: '/goods', component: goods },
{ path: '/ratings', component: ratings },
{ path: '/seller', component: seller }
]

//实例化一个路由
const router = new VueRouter({
	routes:rout,   //上面定义的路由变量
	linkActiveClass:"active"
});

//创建vue实例并挂载到根实例
const app = new Vue({
	el: '#app',
    template: '<App>',
    components: { App },
	router
}).$mount('#app')

//设置开始就指向指定的路由
router.push('/goods')  //在2.0版本之前是router.go()


