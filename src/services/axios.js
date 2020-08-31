import AsyncStorage from '@react-native-community/async-storage';
import Axios from 'axios';
import Preferences from '../common/preferences'

export const BASE_URL = "https://aplushome.facebhoook.com/api"
const instance = Axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
});

instance.interceptors.request.use(
    async config => {
        // const token = await AsyncStorage.getItem(Preferences.KEYS.ACCESS_TOKEN);
        // if (token) {
        //     config.headers.Authorization = token;
        // }
        config.headers.Accept = 'application/json';
        config.headers['Content-Type'] = 'application/json';
        return config;
    },
    err => {
        return Promise.reject(err);
    }
);

instance.interceptors.response.use(
    async response => {
        // if(response?.data){
        //     console.log('axios-response', response.status, response.data)
        // }

        return response
    },
    err => {
        return Promise.reject(err);
    }
);

export default instance;