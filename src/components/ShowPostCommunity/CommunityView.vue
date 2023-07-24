<template>
	<section class="is-info is-small">
		<div class="columns">
			<div class="column is-4" v-for="community in communities" :key="community.id">
				<div class="card is-shady">
					<div class="card-content">
						<div class="content">
							<h4>{{ community.name }}</h4>
							<p>{{ community.description }}</p>
							<router-link :to="`/user/${community.user_id}/community/${community.id}`" target="_blank" class="button is-info is-right">
								<span>Ver</span>
							</router-link>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>

	export default {
		name: 'CommunityView',
		data() {
			return {
				communities: []
			};
		},
		created() {
			this.fetchCommunitites();
		},
		methods: {
			fetchCommunitites() {
				fetch('http://localhost:3000/api/v1/communities')
					.then(response => response.json())
					.then(data => {
						this.communities = data;
					})
					.catch(error => {
						console.error('Error fetching blogs:', error);
					});
			}
		}
	};
</script>