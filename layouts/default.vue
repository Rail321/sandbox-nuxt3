<template>
  <div style="min-height: 100vh; display: flex; flex-direction: column;">
    <div style="width: 100%; max-width: 900px; margin: 0 auto; background-color: cornflowerblue;">
      <nuxt-link style="margin-right: 10px;"
        v-for="( item, index ) of items"
        v-bind:key="index"
        v-bind:to="item.path"
      >
        <span>{{ item.title }}</span>
      </nuxt-link>
    </div>
    <div style="flex-grow: 1; width: 100%; max-width: 900px; margin: 0 auto; background-color: aliceblue;">
      <slot/>
    </div>
    <div style="width: 100%; max-width: 900px; margin: 0 auto; background-color: cornflowerblue;">
      <span>&nbsp;</span>
    </div>
  </div>
</template>

<script setup>
  const items = ref( [
    { path: '/', title: 'Start' },
    { path: '/posts', title: 'Posts' },
    { path: '/todos', title: 'Todos' },
    { path: '/users', title: 'Users' },
    { path: '/albums', title: 'Albums' },
    { path: '/comments', title: 'Comments' },
    { path: '/photos', title: 'Photos' }
  ] )
</script>