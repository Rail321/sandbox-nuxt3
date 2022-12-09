import { getTodos } from '@/api/requests'

const todos = ref( [] )

const fetchTodos = async () => (
  todos.value = await getTodos()
)

export default () => (
  {
    todos,
    fetchTodos
  }
)