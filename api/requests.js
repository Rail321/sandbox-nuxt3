import { getApiBaseUrl } from './helpers'

export const getPosts = ( options = {} ) => (
  $fetch( getApiBaseUrl() + '/posts', options )
)

export default {
  getPosts
}