import axios from 'axios';
axios.defaults.withCredentials = true;
const host = 'http://localhost:5000';

export const getRegisteredWords = async () => {
    const result = await axios.get(`${host}/v1/words`);
    return result;
};
