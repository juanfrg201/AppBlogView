<template>

	<div class="columns">
		<div class="column is-3">
			<aside class="is-medium menu">
		<p class="menu-label">
			Filters
		</p>
		<ul class="menu-list">
			<li class="is-right"><a href="#const" class="is-active"><i class="fab fa-css3-alt"></i> CSS</a></li>
		</ul>
			</aside>
		</div>
		<div class="column is-9">
			<div class="content is-medium" v-for="blog in blogs" :key="blog.id">
				<div class="box">
					<div class="columns">
						<div class="column is-11">
							<h4 id="const" class="title is-3">{{ blog.title }}</h4>
						</div>
						<div class="column is-2">
							<a href="https://github.com/BulmaTemplates/bulma-templates" target="_blank" class="button is-info is-right">
								<span>Ver</span>
							</a>
						</div>
					</div>
					<article class="message">
						<div class="message-body">
							{{ blog.body }}
						</div>
					</article>
			</div>
		</div>
	</div>
	</div> 
</template>

<script>

export default {
  name: 'PostView',
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
.hero {
  background-color: #f5f5f5;
}
.custom-margin-top{
  margin-top: 8rem;
}

.title {
  margin-bottom: 2rem;
}
</style>