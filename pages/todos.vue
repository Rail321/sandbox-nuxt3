<template>
  <div>
    <h1>Todos</h1>
    <pre>{{ todos }}</pre>
  </div>
</template>

<script setup>
  const todos = ref( [] )
  const fetchTodos = async () => {
    todos.value = await $fetch( useRuntimeConfig().public.API_BASE_URL + '/todos' )
  }
  await fetchTodos()
</script>