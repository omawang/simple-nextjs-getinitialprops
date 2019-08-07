import axios from 'axios'

export const placeholder = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
})
