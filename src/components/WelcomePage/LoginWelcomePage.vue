<template>
  <div>
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="columns">
          <div class="column is-12">
            <div class="container content">
              <i class="is-large fab fa-discord"></i>
              <i class="is-large fas fa-code"></i>
              <h1 class="title">Code <em>All</em> The Things</h1>
              <h3 class="subtitle">
                Collection of code goodies for next-level dev
              </h3>
              <div class="columns">
                <div class="column is-2">
                  <a href="https://github.com/BulmaTemplates/bulma-templates" target="_blank" class="button is-success is-right">
                    <span>Create Post</span>
                  </a>
                </div>
                <div class="column is-2">
                  <a href="https://github.com/BulmaTemplates/bulma-templates" target="_blank" class="button is-warning is-right">
                    <span>Create Community</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-half">
            <div class="notification is-primary">
              <div class="buttons are-medium">
                <button class="button is-success" :class="{ 'is-active': selectedAction === 'post' }" @click="selectedAction = 'post'">Post</button>
                <button class="button is-warning" :class="{ 'is-active': selectedAction === 'community' }" @click="selectedAction = 'community'">Community</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section" >
      <div class="container" v-if="selectedAction === 'post'">
        <PostView />
      </div>
      <div class="container" v-else-if="selectedAction === 'community'">
        <CommunityView />
      </div>
    </section>
  </div>
</template>

<script>

import PostView from '@/components/ShowPostCommunity/PostView.vue';
import CommunityView from '@/components/ShowPostCommunity/CommunityView.vue';

export default {
  name: 'LoginWelcomePage',
  components: {
    PostView,
    CommunityView
  },
  data() {
    return {
      selectedAction: ''
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