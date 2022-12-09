<template>
  <div>
    <h1>Posts</h1>
    <pre>{{ posts }}</pre>
  </div>
</template>

<script setup>
  const {
    posts,
    fetchPosts
  } = usePosts()

  await fetchPosts()
</script>