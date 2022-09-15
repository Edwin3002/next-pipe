import axios from 'axios'
import { apiUrl } from './apiUrl';


export const getAll = async () => {
    const data = await axios.get(apiUrl + 'all');    
    return data.data
}