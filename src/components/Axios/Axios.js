import axios from 'axios';

export const post =async (url,data) =>{
    const response = await axios.post(`http://localhost:5000${url}`,data)
    return response.data
}