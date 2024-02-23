import axios from 'axios'; 

export const getCategoryData = async () => {
    return axios.get(`https://s4.bg2.eu/services.json`)
}