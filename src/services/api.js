import axios from   'axios'

const api = axios.create({

    baseURL: 'https://the-one-api.dev/v2'
})

api.interceptors.request.use(async config =>{
    const token = 'I9LWF7Vl4TJZ2hEApGLK'

    config.headers.authorization = `Bearer ${token}`

    return config
})

export default api