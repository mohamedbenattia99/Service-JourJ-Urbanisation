import axios from 'axios';


const url = "http://localhost:3003";

export const getAllActivities = async () => {
    return await axios.get(`${url}/activities`)
}