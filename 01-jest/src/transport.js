import axios from 'axios'
const API_URL = 'http://localhost:20002'
let client = axios.create({
    baseURL: API_URL,
    timeout: 10000
});

export function pingRequset () {
    return client.get('/api/test');
}