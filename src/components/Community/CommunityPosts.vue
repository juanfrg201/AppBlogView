<template>
  <div class="card">
    <div class="card-content">
      <div class="column">
        <div class="content" >
          <article class="message is-success">
            <div class="message-header">
              <h4 id="const" class="title is-3">titulo</h4>
              <router-link :to="`/`" target="_blank" class="button is-info is-right">
                <span>Ver</span>
              </router-link>
            </div>		
            <div class="message-body">
              cuerpo
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>  
</template>

<script>

  export default {
    name: 'CommunityPost'
  };
</script>

<style>
</style>