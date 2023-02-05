import axios from 'axios'

const baseUrl = 'http://localhost:1337/api'

export const api = {
  get: (url: string, params?: any) => {
    return axios.get(baseUrl + url).then((r) => r.data)
  },
  post: (url: string, data: any) => {
    return axios.post(baseUrl + url, data).then((r) => r.data)
  },
  put: (url: string, data: any) => {
    return axios.put(baseUrl + url, data).then((r) => r.data)
  },
}
