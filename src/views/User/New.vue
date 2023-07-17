<template>
  <NavBar />
  <section class="hero is-success is-fullheight">
    <div class="hero-body">
        <div class="container has-text-centered">
            <div class="column is-4 is-offset-4">
                <h3 class="title has-text-black">Sign Up</h3>
                <hr class="login-hr">
                <p class="subtitle has-text-black">Please Sign Up to proceed.</p>
                <div class="box">
                    <form @submit.prevent="register">
                        <div class="field">
                            <div class="control">
                              <input class="input" type="email" v-model="email" placeholder="Your Email" required>
                            </div>
                        </div>

                        <div class="field">
                            <div class="control">
                              <input class="input" type="password" v-model="password" placeholder="Your Password" required>
                            </div>
                        </div>
                        <button class="button is-fullwidth is-primary" type="submit">Sign Up<i class="fa fa-sign-in" aria-hidden="true"></i></button>
                    </form>
                </div>
                <p class="has-text-grey">
                    <a href="../">Login</a> &nbsp;·&nbsp;
                </p>
            </div>
        </div>
    </div>
  </section>
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
        localStorage.setItem('token', data.authentication_token);
        this.$router.push('/');

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