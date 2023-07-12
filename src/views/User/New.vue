<template>
  <NavBar />
  <div class="container" style="margin: top -5rem;">
    <h1 class="title">Registro</h1>
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
          <button class="button is-primary" type="submit">Registrarse</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar/NLoginNavBar.vue';

export default {
  name: "NewUser",
  components: {
    NavBar
  },
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    register() {
      // Realizar la petición POST al servidor
      fetch('http://localhost:3000/api/v1/users', {
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