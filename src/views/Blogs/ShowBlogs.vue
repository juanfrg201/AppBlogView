<template>
  <div class="container" style="margin-top: 7rem;" v-if="blog">
    <div class="card">
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">{{ blog.title }}</p>
            <p class="subtitle is-6">{{ blog.user_id }}</p>
          </div>
        </div>
        <div class="content">
          {{ blog.body }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogDetail',
  data() {
    return {
      blog: null
    };
  },
  created() {
    this.fetchBlog();
  },
  methods: {
    fetchBlog() {
      const blogId = this.$route.params.id; // Obtener el ID del blog de los parámetros de la ruta
      fetch(`http://localhost:3000/api/v1/blogs/${blogId}`)
        .then(response => response.json())
        .then(data => {
          this.blog = data;
        })
        .catch(error => {
          console.error('Error fetching blog:', error);
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
</style>