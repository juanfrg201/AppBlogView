<template>
  <NavBarNLogin />
	<section class="card-content custom-margin-top">
		<div class="card">
			<div class="column">
				<div class="column is-4">
					<p class="control has-icons-left">
						<input class="input is-primary" type="text" placeholder="Search">
						<span class="icon is-left">
							<i class="fas fa-search" aria-hidden="true"></i>
						</span>
					</p>
				</div>
			</div>
		</div>
		<div class="card">
			<div class="column">
				<div class="content" v-for="blog in blogs" :key="blog.id">
					<div class="box">
						<article class="message is-success">
							<div class="message-header">
								<h4 id="const" class="title is-3">{{ blog.title }}</h4>
								<router-link :to="`/blogs/${blog.id}`" target="_blank" class="button is-info is-right">
									<span>Ver</span>
								</router-link>

							</div>		
							<div class="message-body">
								{{ blog.body }}
							</div>
						</article>
				</div>
			</div>
		</div>
		
		</div> 
	</section>
</template>

<script>

import NavBarNLogin from '@/components/NavBar/LoginNavBar.vue';

export default {
  name: 'IndePost',
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
			const user_id = localStorage.getItem("user_id");
			if (user_id){
				fetch(`http://localhost:3000/api/v1/user/blogs/user_blogs?user_id=${user_id}`)
					.then(response => response.json())
					.then(data => {
						this.blogs = data;
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