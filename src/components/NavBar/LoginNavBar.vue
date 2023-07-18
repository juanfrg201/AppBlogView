<template>
  <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <!-- Logo y otros elementos de la marca -->
    </div>
    <div :id="menuId" class="navbar-menu" :class="{ 'is-active': isMenuOpen }">
      <div class="navbar-start">
        <router-link to="/" class="navbar-item">Home</router-link>
        <a class="navbar-item" @click="send_show_blog">Ver mis Posts</a>
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            More
          </a>
          <div class="navbar-dropdown">
            <router-link to="/" class="navbar-item">Tu perfil</router-link>
            <router-link to="/" class="navbar-item">Tus Blogs</router-link>
            <router-link to="/" class="navbar-item">Tus comunidades</router-link>
            <hr class="navbar-divider">
            <router-link to="/report" class="navbar-item">Report an issue</router-link>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <button class="button is-light" @click="logout">Salir</button>

          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      isMenuOpen: false,
    };
  },
  computed: {
    menuId() {
      return 'navbarBasicExample'; // ID del elemento navbar-menu
    },
  },
  methods: {
    send_show_blog() {
      const userId = localStorage.getItem('user_id');

      if (userId) {
        this.$router.push(`/user/${userId}/blogs`);
      } else {
        this.$router.push('/');
      }
      
      
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    logout() {
      // Eliminar el token de autenticación del almacenamiento local
      localStorage.removeItem('token');
      this.$router.push('/');
      
      // Redirigir al usuario a la página de inicio de sesión o a otra ruta
      
    }
  },
};
</script>

<style scoped>
.navbar {
  justify-content: center; /* Centra los elementos en el Navbar */
}

@media screen and (max-width: 1023px) {
  .navbar-menu {
    background-color: #f5f5f5; /* Cambia el color de fondo del menú en pantallas más pequeñas */
  }
}
</style>