<template>
  <NavBarNLogin /> 
  <section class="hero is-success is-fullheight">
    <div class="hero-body">
        <div class="container has-text-centered">
            <div class="column is-4 is-offset-4">
                <h3 class="title has-text-black">Login</h3>
                <hr class="login-hr">
                <p class="subtitle has-text-black">Please login to proceed.</p>
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
                        <button class="button is-fullwidth is-primary" type="submit">Login<i class="fa fa-sign-in" aria-hidden="true"></i></button>
                    </form>
                </div>
                <p class="has-text-grey">
                    <a href="../">Sign Up</a> &nbsp;·&nbsp;
                </p>
            </div>
        </div>
    </div>
  </section>
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
