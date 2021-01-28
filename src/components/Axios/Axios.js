import axios from 'axios';

export const post =async (url,data) =>{
    const response = await axios.post(`https://git.heroku.com/wine-production.git${url}`,data)
    return response.data
}