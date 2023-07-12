<template>
  <div>
    <div v-if="isUserLoggedIn">
      <LoginNavBar />
      <LoginWelcomePage />
    </div>
    <div v-else>
      <NLoginNavBar />
      <NLoginWelcomePage />
    </div>
  </div>
</template>

<script>
import LoginNavBar from '@/components/NavBar/LoginNavBar.vue';
import NLoginNavBar from '@/components/NavBar/NLoginNavBar.vue';
import LoginWelcomePage from '@/components/WelcomePage/LoginWelcomePage.vue';
import NLoginWelcomePage from '@/components/WelcomePage/NLoginWelcomePage.vue';

export default {
  name: 'HomePage',
  components: {
    LoginNavBar,
    NLoginNavBar,
    LoginWelcomePage,
    NLoginWelcomePage
  },
  computed: {
    isUserLoggedIn() {
      const token = localStorage.getItem('token');
      return !!token; // Devuelve true si hay un token almacenado, indicando que el usuario está logeado
    }
  }
};
</script>

<style scoped>
.hero {
  margin-top: 3rem;
  margin-bottom: 3rem;
  padding: 3rem 0;
}

.subtitle {
  margin-top: 1.5rem;
}

.card {
  margin-bottom: 2rem;
}

.card-footer-item {
  justify-content: center;
}
</style>







