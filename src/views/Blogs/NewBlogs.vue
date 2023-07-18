<template>
  <NavBarNLogin /> 
  <section class="card-content is-widescree margin-custom">
    <div class="columns is-multiline">
      <div class="column is-8 is-offset-2 register">
        <div class="columns">
          <div class="column left">
            <h1 class="title is-1">Create Posts</h1>
            <p>Welcome to the post creation page! Here, you can unleash your creativity and write captivating content to share with others. Whether it's a personal story, an informative article, or an exciting announcement, this is your space to express yourself. Let's get started!.</p>
          </div>
          <div class="column right has-text-centered">
            <form @submit.prevent="createBlog">
              <div class="field">
                <div class="control">
                  <input class="input is-medium" type="text" placeholder="Title" v-model="blogTitle">
                </div>
              </div>

              <div class="field">
                <div class="control">
                  <textarea class="textarea" placeholder="Content" rows="10" v-model="blogContent"></textarea>
                </div>
              </div>
              <button class="button is-block is-primary is-fullwidth is-medium" type="submit">Submit</button>
              <br />
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import NavBarNLogin from '@/components/NavBar/LoginNavBar.vue';


export default {
  name: "NewBlogs",
  components: {
    NavBarNLogin
  },
  data() {
    return {
      email: '',
      password: ''
    };
  },
  computed: {
    isUserLoggedIn() {
      const token = localStorage.getItem('token');
      return !!token; // Devuelve true si hay un token almacenado, indicando que el usuario está logeado
    }
  },
  methods: {
    createBlog() {
      // Lógica para crear un nuevo blog
      // Ejemplo:
      const token = localStorage.getItem('token');

      // Verificar si el token existe
      if (token) {
        // Convertir el token en un objeto JSON

        fetch('http://localhost:3000/api/v1/blogs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: this.blogTitle,
          body: this.blogContent, 
          token: token
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
      
      this.blogTitle = '';
      this.blogContent = '';
    },
  }
};
</script>

<style scoped>
.container {
  max-width: 400px;
  margin: 0 auto;
  margin-top: 3rem;
}

.margin-custom{
  margin-top: 10rem;
}
</style>
