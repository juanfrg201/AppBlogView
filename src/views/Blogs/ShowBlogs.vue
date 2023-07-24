<template>
  <NavBarNLogin />
  <section class="card-content custom-margin-top mx-3">
    <div class = "card">
      <div class = "card-content">
        <div class="columns">
          <div class="column is-3">
            <article class="message is-info">
              <div class="card-content">
                <h2>Title</h2>
              </div>
              <div class="card">
                <div class="card-content">
                  <h2>{{ blogs.title }}</h2>
                </div>
              </div>
            </article>
          </div>
          <div class="column is-8">
            <article class="message is-info">
              <div class="card-content">
                <h2>Content</h2>
              </div>
              <div class="card">
                <div class="card-content">
                  <h2>{{ blogs.body }}</h2>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
    <div class = "card custom-margin-top">
      <div class="columns">
        <div class="column is-3">
          <div class="field card-content">
            <label class="label">Crea un comentario</label>
            <div class="control">
              <textarea class="textarea is-link" id="body" v-model="blogContent" placeholder="Info del comentario"></textarea>
            </div>
            <button class="button is-fullwidth is-link my-3" @click="createComment">Crear</button>
          </div>
        </div>
        <div class="column is-8">
          <div class="card-content">
            <h2>Comentarios</h2>
          </div>
          <div v-for="comment in comments" :key="comment.id">
            <div class="card my-3">
              <div class="card-content message is-info">
                <p>{{ comment.body }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import NavBarNLogin from '@/components/NavBar/LoginNavBar.vue';

export default {
  name: 'ShowBlogs',
  components: {
    NavBarNLogin
  },
  data() {
    return {
			blogs: [],
      comments: [],
      blogContent: ''
    };
  },
  created() {
    this.fetchBlogs();
    this.fetchComments();
  },
  methods: {
    fetchBlogs() {
      const blog_id = this.$route.params.id;
			if (blog_id){
				fetch(`http://localhost:3000/api/v1/blogs/${blog_id}`)
					.then(response => response.json())
					.then(data => {
						this.blogs = data;
					})
					.catch(error => {
						console.error('Error fetching blogs:', error);
					});
			} else {
				console.log("error")
			}
		
    },
    fetchComments(){
      const blog_id = this.$route.params.id;
      if (blog_id){
				fetch(`http://localhost:3000/api/v1/comments?blog_id=${blog_id}`)
					.then(response => response.json())
					.then(data => {
						this.comments = data;
            console.log(data)
					})
					.catch(error => {
						console.error('Error fetching blogs:', error);
					});
			} else {
				console.log("error")
			}
    },
    createComment() {
      // Lógica para crear un nuevo blog
      // Ejemplo:
      const blog_id = this.$route.params.id;
      const userId = localStorage.getItem('user_id');

      // Verificar si el token existe
      if (blog_id && userId) {
        // Convertir el token en un objeto JSON

        fetch('http://localhost:3000/api/v1/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json' 
        },
        body: JSON.stringify({
          comment: {
            body: this.blogContent, 
            blog_id: blog_id,
            user_id: userId
          }
        })
      })
      .then(response => response.json())
      .then(data => {
        // Lógica para manejar la respuesta del servidor
        console.log('Respuesta del servidor:', data);
      })
      .catch(error => {
        // Manejo de errores
        console.error('Error en la petición:', error);
      });
      }

      window.location.reload();
      this.blogContent = '';
    
    }
  }
};
</script>

<style scoped>
.hero {
  background-color: #f5f5f5;
}
.custom-margin-top{
  margin-top: 4rem;
}

.title {
  margin-bottom: 2rem;
}
</style>