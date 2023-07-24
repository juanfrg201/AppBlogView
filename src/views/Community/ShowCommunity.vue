<template>
  <NavBarNLogin />
  <section class="card-content custom-margin-top mx-3">
    <div class="container">
      <div class="columns">
        <div class="column is-6">
          <Info />
          <br>
          <Post />
        </div>
        <div class="column is-6">
          <PostForm />
        </div>
      </div>
    </div>
    
  </section>
</template>

<script>

  import NavBarNLogin from '@/components/NavBar/LoginNavBar.vue';
  import Info from '@/components/Community/CommunityInfo.vue';
  import PostForm from '@/components/Community/CommunityPostForm.vue';
  import Post from '@/components/Community/CommunityPosts.vue';

  export default {
    name: 'ShowBlogs',
    components: {
      NavBarNLogin,
      Info,
      PostForm,
      Post
    }
  };
</script>
  
<style>
.custom-margin-top{
    margin-top: 4rem;
  }
</style>