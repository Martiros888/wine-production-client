import axios from 'axios';

export const post =async (url,data) =>{
    const response = await axios.post(`https://wine-production-server.herokuapp.com${url}`,data)
    return response.data
}