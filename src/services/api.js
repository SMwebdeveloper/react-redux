import axios from "axios";
import { getItem } from "../helpers/persistence-store";

axios.defaults.baseURL = 'https://api.realworld.io/api'

axios.interceptors.request.use(config => {
    const token = getItem('token')
    const authorization = `Token ${token}`
    config.headers.Authorization = authorization
    return config
})

export default axios