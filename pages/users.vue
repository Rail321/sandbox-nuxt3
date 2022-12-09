<template>
  <div>
    <h1>Users</h1>
    <pre>{{ users }}</pre>
  </div>
</template>

<script setup>
  const {
    users,
    fetchUsers
  } = useUsers()

  await fetchUsers()
</script>