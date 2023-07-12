<template>
  <LoginNavBar />
  <div class="container" style="margin-top: 7rem;">
    <div class="columns is-multiline">
      <div class="column is-4" v-for="blog in blogs" :key="blog.id">
        <div class="card">
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">{{ blog.title }}</p>
                <p class="subtitle is-6">{{ blog.body }}</p>
              </div>
            </div>
            <div class="content">
              {{ blog.body }}
            </div>
            <div class="buttons is-centered">
              <router-link :to="'/blogs/' + blog.id" class="button is-primary">Leer más</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoginNavBar from '@/components/NavBar/LoginNavBar.vue';
export default {
  name: 'BlogList',
  components: {
    LoginNavBar
  },
  data() {
    return {
      blogs: []
    };
  },
  created() {
    this.fetchBlogs();
  },
  methods: {
    fetchBlogs() {
      fetch('http://localhost:3000/api/v1/blogs')
        .then(response => response.json())
        .then(data => {
          this.blogs = data;
        })
        .catch(error => {
          console.error('Error fetching blogs:', error);
        });
    }
  }
};
</script>

<style scoped>
.container {
  margin-top: 3rem;
}

.card {
  margin-bottom: 2rem;
}

.buttons {
  margin-top: 1rem;
}
</style>