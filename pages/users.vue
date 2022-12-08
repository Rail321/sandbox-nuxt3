<template>
  <div>
    <h1>Users</h1>
    <pre>{{ users }}</pre>
  </div>
</template>

<script setup>
  const users = ref( [] )
  const fetchUsers = async () => {
    users.value = await $fetch( 'https://jsonplaceholder.typicode.com/users' )
  }
  await fetchUsers()
</script>