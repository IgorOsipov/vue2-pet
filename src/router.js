import Vue from "vue";
import VueRouter from "vue-router";
import showBlog from './components/showBlog.vue';
import addBlog from './components/addBlog.vue';
import singleBlog from './components/singleBlog';




Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: showBlog,
  },
  {
    path: "/add",
    component: addBlog
  },
  {
    path: "/blog/:id",
    component: singleBlog
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;