import { getUsers } from '@/api/requests'

const users = ref( [] )

const fetchUsers = async () => (
  users.value = await getUsers()
)

export default () => (
  {
    users,
    fetchUsers
  }
)