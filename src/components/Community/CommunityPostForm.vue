<template>
  <div class="card">
    <div class="card-content">
      <div class="container has-text-centered">
        <div class="is-offset-2">
          <h3 class="title has-text-black">Create Post</h3>
          <div>
            <form @submit.prevent="register">
              <div class="field">
                <div class="control">
                  <input class="input" type="title" v-model="email" placeholder="Ttile" required>
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <textarea class="textarea" placeholder="Content" rows="7" v-model="blogContent"></textarea>
                </div>
              </div>
              <button class="button is-fullwidth is-success" type="submit">Create<i class="fa fa-sign-in" aria-hidden="true"></i></button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>  
</template>

<script>

  export default {
    name: 'CommunityPostForm'
  };
</script>

<style>
</style>