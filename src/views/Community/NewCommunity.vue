<template>
  <NavBarNLogin /> 
  <section class="card-content is-widescree margin-custom">
    <div class="columns is-multiline">
      <div class="column is-8 is-offset-2 register">
        <div class="columns">
          <div class="column left">
            <h1 class="title is-1">Create Communities</h1>
            <p>Once logged in, users can access a community creation form. This form will prompt users to enter essential details about the community, such as the community name, description, and tags that best represent its focus. Additionally, users may upload an image or logo to personalize the community.</p>
          </div>
          <div class="column right has-text-centered">
            <form @submit.prevent="createCommunity">
              <div class="field">
                <div class="control">
                  <input class="input is-medium" type="text" placeholder="Title" v-model="communityTitle">
                </div>
              </div>

              <div class="field">
                <div class="control">
                  <textarea class="textarea" placeholder="Content" rows="10" v-model="communityDescription"></textarea>
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
  name: "NewCommunity",
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
    createCommunity() {
      const user_id = localStorage.getItem('user_id');

// Verificar si el token existe
      if (user_id) {
        // Convertir el token en un objeto JSON

        fetch('http://localhost:3000/api/v1/communities', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          community: {
            name: this.communityTitle,
            user_id: user_id,
            description: this.communityDescription
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
      this.communityTitle = '';
      this.communityDescription = '';
    }
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
