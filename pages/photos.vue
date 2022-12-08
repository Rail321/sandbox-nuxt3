<template>
  <div>
    <h1>Photos</h1>
    <pre>{{ photos }}</pre>
  </div>
</template>

<script setup>
  const photos = ref( [] )
  const fetchPhotos = async () => {
    photos.value = await $fetch( 'https://jsonplaceholder.typicode.com/photos' )
  }
  await fetchPhotos()
</script>