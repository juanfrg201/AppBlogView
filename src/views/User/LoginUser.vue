<template>
  <NavBarNLogin /> 
  <div class="container" style="margin: top -5rem;">
    <h1 class="title">Login</h1>
    <form @submit.prevent="register">
      <div class="field">
        <label class="label">Correo electrónico</label>
        <div class="control">
          <input class="input" type="email" v-model="email" required>
        </div>
      </div>

      <div class="field">
        <label class="label">Contraseña</label>
        <div class="control">
          <input class="input" type="password" v-model="password" required>
        </div>
      </div>

      <div class="field">
        <div class="control">
          <button class="button is-primary" type="submit">Login</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>

import NavBarNLogin from '@/components/NavBar/NLoginNavBar.vue';


export default {
  name: "NewUser",
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
    register() {
      // Realizar la petición POST al servidor
      fetch('http://localhost:3000/api/v1/users/sign_in', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: this.email,
          password: this.password
        })
      })
      .then(response => response.json())
      .then(data => {
        // Lógica para manejar la respuesta del servidor
        console.log('Respuesta del servidor:', data);
        if (data.authentication_token) {
          // Almacenar el token en localStorage o en una cookie
          localStorage.setItem('token', data.authentication_token);
          
          // Redirigir al usuario a la página de inicio o a otra ruta
          this.$router.push('/');
        } else {
          console.log('no se puede iniciar sesion')
        }

        // Reiniciar los campos del formulario
        this.email = '';
        this.password = '';
      })
      .catch(error => {
        // Manejo de errores
        console.error('Error en la petición:', error);
      });
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
</style>
