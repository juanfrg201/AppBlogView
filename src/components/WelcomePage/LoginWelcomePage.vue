<template>
  <div>
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="columns">
          <div class="column is-12">
            <div class="container content">
              <i class="is-large fab fa-discord"></i>
              <i class="is-large fas fa-code"></i>
              <h1 class="title">Create <em>All</em> The Things</h1>
              <h3 class="subtitle">
                Collection of post and communities
              </h3>
              <div class="columns">
                <div class="column is-2">
                  <a @click="send_new_blog" target="_blank" class="button is-success is-right">
                    <span>Create Post</span>
                  </a>
                </div>
                <div class="column is-2">
                  <a @click="send_new_community" target="_blank" class="button is-warning is-right">
                    <span>Create Community</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-half">
            <div class="notification is-primary">
              <div class="buttons are-medium">
                <button class="button is-success" :class="{ 'is-active': selectedAction === 'post' }" @click="selectedAction = 'post'">Post</button>
                <button class="button is-warning" :class="{ 'is-active': selectedAction === 'community' }" @click="selectedAction = 'community'">Community</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section" >
      <div class="container" v-if="selectedAction === 'post'">
        <PostView />
      </div>
      <div class="container" v-else-if="selectedAction === 'community'">
        <CommunityView />
      </div>
    </section>
  </div>
</template>

<script>

import PostView from '@/components/ShowPostCommunity/PostView.vue';
import CommunityView from '@/components/ShowPostCommunity/CommunityView.vue';

export default {
  name: 'LoginWelcomePage',
  components: {
    PostView,
    CommunityView
  },
  data() {
    return {
      selectedAction: ''
    };
  },
  methods: {
    
		send_new_blog() {
      const userId = localStorage.getItem('user_id');

      if (userId) {
        this.$router.push(`/user/${userId}/new/blog`);
      } else {
        this.$router.push('/');
      }
      
      
    },
    send_new_community() {
      const userId = localStorage.getItem('user_id');

      if (userId) {
        this.$router.push(`/user/${userId}/new/community`);
      } else {
        this.$router.push('/');
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
  margin-top: 8rem;
}

.title {
  margin-bottom: 2rem;
}
</style>