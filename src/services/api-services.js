import axios from 'axios'
import { request } from 'http';

class apiService {
    static get(url, option) {
        return axios.get(url, option)
    }

    static post(url, request, option) {
        return axios.post(url, request, option)
    }

    static put(url, request, option) {
        return axios.put(url, request, option)
    }

    static delete(url, request, option) {
        return axios.delete(url, request, option)
    }
}