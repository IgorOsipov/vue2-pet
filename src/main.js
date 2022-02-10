import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import router from './router'

Vue.config.productionTip = false

Vue.use(VueResource)


//Custom directives

Vue.directive('theme',{
  bind(el, binding){
    switch (binding.value) {
      case 'wide':
        el.style.maxWidth = "1200px";
        break;

      case 'narrow':
        el.style.maxWidth = "560px";
        break;

      default:
        break;
    }

    switch (binding.arg) {
      case 'column':
        el.style.backgroundColor = "#ddd";
        el.style.padding = "20px"
        break;
    
      default:
        break;
    }
  }
});

//Filters 
Vue.filter('to-uppercase', function(value){
  return value.toUpperCase();
});

Vue.filter('snippet', function(value){
  return `${value.slice(0, 100)}...`;
})


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
