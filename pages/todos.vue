<template>
  <div>
    <h1>Todos</h1>
    <pre>{{ todos }}</pre>
  </div>
</template>

<script setup>
  const {
    todos,
    fetchTodos
  } = useTodos()

  await fetchTodos()
</script>