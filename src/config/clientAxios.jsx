import axios from "axios";

const clienteAxios = axios.create({
    baseURL: import.meta.env.MODE === 'development' ? `${import.meta.env.VITE_BACKEND_URL}/api` : `${import.meta.env.VITE_BACKEND_URL_PRODUCTION}/api`
}) 

export default clienteAxios;