<template>
  <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <!-- Logo y otros elementos de la marca -->
    </div>
    <div :id="menuId" class="navbar-menu" :class="{ 'is-active': isMenuOpen }">
      <div class="navbar-start">
        <router-link to="/" class="navbar-item">Home</router-link>
        <router-link to="/documentation" class="navbar-item">Documentation</router-link>

        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            More
          </a>
          <div class="navbar-dropdown">
            <router-link to="/about" class="navbar-item">About</router-link>
            <router-link to="/jobs" class="navbar-item">Jobs</router-link>
            <router-link to="/contact" class="navbar-item">Contact</router-link>
            <hr class="navbar-divider">
            <router-link to="/report" class="navbar-item">Report an issue</router-link>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <router-link to="/register_user" class="button is-primary">
              <strong>Sign up</strong>
            </router-link>
            <router-link to="/login_user" class="button is-light">
              Log in
            </router-link>
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
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
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

.navbar-item,
.buttons {
  margin: 0.5rem; /* Agrega margen de 0.5 rem a los componentes del Navbar */
}
</style>