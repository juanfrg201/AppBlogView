<template>
  <NavBarNLogin />
  <section class="card-content custom-margin-top mx-3">
    <div class="columns">
      <div class="column is-3">
        <div class="card-content">
          <h2>Title</h2>
        </div>
        <div class="card">
          <div class="card-content">
            <h2>{{ blogs.title }}</h2>
          </div>
        </div>
      </div>
      <div class="column is-8">
        <div class="card-content">
          <h2>Content</h2>
        </div>
        <div class="card">
          <div class="card-content">
            <h2>{{ blogs.body }}</h2>
          </div>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column is-3">
      </div>
      <div class="column is-8">
        <div class="card-content">
          <h2>Comentarios</h2>
        </div>
        <div class="card">
          <div class="card-content">
            <h2>Comentarios</h2>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import NavBarNLogin from '@/components/NavBar/LoginNavBar.vue';

export default {
  name: 'ShowBlogs',
  components: {
    NavBarNLogin
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
      const blog_id = this.$route.params.id;
			if (blog_id){
				fetch(`http://localhost:3000/api/v1/blogs/${blog_id}`)
					.then(response => response.json())
					.then(data => {
						this.blogs = data;
            console.log(data)
					})
					.catch(error => {
						console.error('Error fetching blogs:', error);
					});
			} else {
				console.log("error")
			}
		
    }
  }
};
</script>

<style scoped>
.hero {
  background-color: #f5f5f5;
}
.custom-margin-top{
  margin-top: 4rem;
}

.title {
  margin-bottom: 2rem;
}
</style>