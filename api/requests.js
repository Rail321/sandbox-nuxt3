import { baseRequest } from './helpers'

export const getPosts = ( options = {} ) => (
  baseRequest( '/posts', options )
)

export const getUsers = ( options = {} ) => (
  baseRequest( '/users', options )
)

export const getTodos = ( options = {} ) => (
  baseRequest( '/todos', options )
)

export default {
  getPosts
}