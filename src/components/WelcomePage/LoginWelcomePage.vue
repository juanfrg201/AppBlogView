<template>
  <div>
    <section class="hero is-fullheight-with-navbar custom-margin-top">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column">
              <h1 class="title">Crear Blog</h1>
              <div class="box">
                <form @submit.prevent="createBlog">
                  <div class="field">
                    <label class="label">Título</label>
                    <div class="control">
                      <input class="input" type="text" v-model="blogTitle" required>
                    </div>
                  </div>
                  <div class="field">
                    <label class="label">Contenido</label>
                    <div class="control">
                      <textarea class="textarea" v-model="blogContent" required></textarea>
                    </div>
                  </div>
                  <div class="field">
                    <div class="control">
                      <button class="button is-primary" type="submit">Crear</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="column">
              <h1 class="title">Crear Comunidad</h1>
              <div class="box">
                <form @submit.prevent="createCommunity">
                  <div class="field">
                    <label class="label">Nombre</label>
                    <div class="control">
                      <input class="input" type="text" v-model="communityName" required>
                    </div>
                  </div>
                  <div class="field">
                    <div class="control">
                      <button class="button is-primary" type="submit">Crear</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  name: 'LoginWelcomePage',
  data() {
    return {
      blogTitle: '',
      blogContent: '',
      communityName: '',
      publishedBlogs: [],
      publishedCommunities: []
    };
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
    createCommunity() {
      const token = localStorage.getItem('token');

// Verificar si el token existe
      if (token) {
        // Convertir el token en un objeto JSON

        fetch('http://localhost:3000/api/v1/communities', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: this.communityName,
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
      this.communityName = '';
    }
  }
};
</script>

<style scoped>
.hero {
  background-color: #f5f5f5;
}
.custom-margin-top{
  margin-top: 8rem;
}

.title {
  margin-bottom: 2rem;
}
</style>