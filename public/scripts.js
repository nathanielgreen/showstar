import topNav from './components/topnav/index.js';
import sidebar from './components/sidebar/index.js';
import HomeVideo from './components/HomeVideo/index.js';
import PageLoughborough from './pages/PageLoughborough.js';
import PageHome from './pages/PageHome.js';

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: PageHome },
  ],
});

const app = new Vue({
  router,
  el: '#app', 
});
