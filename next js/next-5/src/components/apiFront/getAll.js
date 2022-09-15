import axios from 'axios'

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const getAll = async () => {
    const data = await axios.get(apiUrl + 'all');    
    return data.data
}