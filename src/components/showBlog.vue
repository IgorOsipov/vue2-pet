<template>
  <div v-theme:column="'narrow'" id="show-blogs">
      <h1>All Blog Articles</h1>
      <input type="text" id="search" v-model="search" placeholder="Search...">
      <div v-for="blog in filteredBlogs" :key="blog.id" class="single-blog">
          <router-link :to="`/blog/${blog.id}`"><h2 v-rainbow>{{blog.title | to-uppercase}}</h2></router-link>
          <article>{{blog.body | snippet}}</article>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            blogs: [],
            search: ''
        }
    },
    methods: {

    },
    computed: {
        filteredBlogs: function() {
            return this.blogs.filter((blog) => {
                return blog.title.match(this.search);
            })
        }
    },
    created(){
        this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data){
            this.blogs = data.body.slice(0, 10);
        })
    },
    filters:{
        toUppercase(value){
            return value.toUpperCase();
        }
    },
    directives:{
        'rainbow': {
            bind(el){
                el.style.color = '#' + Math.floor(Math.random()*16777215).toString(16);
            }
        }
    }
}
</script>

<style scoped>
#search{
    width: 100%;
    padding: 5px;
    margin-top: 5px;
}
#show-blogs{
    max-width: 800px;
    margin: 0 auto;
}
.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}
</style>