<template>
  <div>
    <h1>Albums</h1>
    <pre>{{ albums }}</pre>
  </div>
</template>

<script setup>
  const albums = ref( [] )
  const fetchAlbums = async () => {
    albums.value = await $fetch( 'https://jsonplaceholder.typicode.com/albums' )
  }
  await fetchAlbums()
</script>