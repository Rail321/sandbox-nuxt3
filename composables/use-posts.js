import { getPosts } from '@/api/requests'

const posts = ref( [] )

const fetchPosts = async () => (
  posts.value = await getPosts()
)

export default () => (
  {
    posts,
    fetchPosts
  }
)