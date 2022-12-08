<template>
  <div>
    <h1>Comments</h1>
    <pre>{{ comments }}</pre>
  </div>
</template>

<script setup>
  const comments = ref( [] )
  const fetchComments = async () => {
    comments.value = await $fetch( 'https://jsonplaceholder.typicode.com/comments' )
  }
  await fetchComments()
</script>