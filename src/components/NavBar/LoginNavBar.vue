<template>
  <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <!-- Logo y otros elementos de la marca -->
    </div>
    <div :id="menuId" class="navbar-menu" :class="{ 'is-active': isMenuOpen }">
      <div class="navbar-start">
        <router-link to="/" class="navbar-item">Home</router-link>
        <a class="navbar-item" @click="send_show_blog">Ver mis Posts</a>
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
      return this.isMenuOpen ? "navbarMenu" : null;
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

<style>
/* Agrega estilos personalizados para el navbar aquí, si es necesario */

/* Hace que el menú se oculte por defecto en pantallas pequeñas */
@media screen and (max-width: 768px) {
  .navbar-menu {
    display: none;
  }

  /* Muestra el menú cuando está activo */
  .navbar-menu.is-active {
    display: flex;
    flex-direction: column;
  }
}
</style>