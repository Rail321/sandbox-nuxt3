export const getApiBaseUrl = () => (
  useRuntimeConfig().public.API_BASE_URL
)

export const baseRequest = ( route = '', options = {} ) => {
  const url = getApiBaseUrl() + route
  return $fetch( url, options )
}