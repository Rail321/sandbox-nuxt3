<template>
  <div>
    <h1>Posts</h1>
    <pre>{{ posts }}</pre>
  </div>
</template>

<script setup>
  const posts = ref( [] )
  const fetchPosts = async () => {
    posts.value = await $fetch( useRuntimeConfig().public.API_BASE_URL + '/posts' )
  }
  await fetchPosts()
</script>