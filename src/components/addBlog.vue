<template>
  <div id="add-blog">
      <h2>Add a New Blog Post</h2>
      <form v-if="!submitted">
          <label for="blog-title">Blog Title:</label>
          <input v-model="blog.title" type="text" id="blog-title" required>
          <label for="blog-content">Blog Content:</label>
          <textarea v-model="blog.content" id="blog-content"></textarea>
          <div id="checkboxes">
              <label for="c-ninjas">Ninjas</label>
              <input type="checkbox" value="ninjas" v-model="blog.categories" id="c-ninjas">
              <label for="c-wizards">Wizards</label>
              <input type="checkbox" value="wizards" v-model="blog.categories" id="c-wizards">
              <label for="c-mario">Mario</label>
              <input type="checkbox" value="mario" v-model="blog.categories" id="c-mario">
              <label for="c-cheese">Cheese</label>
              <input type="checkbox" value="cheese" v-model="blog.categories" id="c-cheese">
          </div>
          <label for="author">Author:</label>
          <select v-model="blog.author" name="author" id="author">
              <option v-for="author in authors" :key="author">{{author}}</option>
          </select>
          <button type="submit" @click.prevent="post">Add Post</button>
      </form>
      <div v-if="submitted">
          <h3>Your post has been added</h3>
      </div>
      <div id="preview">
          <h3>Preview Blog</h3>
          <p>Blog Title: {{blog.title}}</p>
          <p>Blog Content:</p>
          <p>{{blog.content}}</p>
          <p>Blog Categories: </p>
          <ul>
              <li :key="category" v-for="category in blog.categories">{{category}}</li>
          </ul>
          <p>Author: {{blog.author}}</p>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            blog: {
                title: '',
                content: '',
                categories: [],
                author: ''
            },
            authors: ['Yoshi', 'Tackeda', 'Hirohito', 'Naruto'],
            submitted: false
        }
    },
    methods:{
        post: function() {
            this.$http.post('https://jsonplaceholder.typicode.com/posts', {
                title: this.blog.title,
                body: this.blog.content,
                userId: Date.now(),
                id: 1
            }).then(function(data){
                if(data.status === 201){
                    this.submitted = true;
                }
            })
        }
    }
}
</script>

<style scoped>
#add-blog *{
    box-sizing: border-box;
}
#add-blog{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}

#checkboxes input{
    display: inline-block;
    margin-right: 10px;
}

#checkboxes label{
    display: inline-block;
}
</style>