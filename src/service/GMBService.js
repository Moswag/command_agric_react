import axios from 'axios';
import AuthService from './AuthService';

const USER_API_BASE_URL = 'http://localhost:5000/api/gmb';

class GMBService {

    fetchPrices() {
        return axios.get(USER_API_BASE_URL, AuthService.getAuthHeader());
    }

    fetchPriceById(priceId) {
        return axios.get(USER_API_BASE_URL + '/' + priceId, AuthService.getAuthHeader());
    }

    deletePrice(priceId) {
        return axios.delete(USER_API_BASE_URL + '/' + priceId, AuthService.getAuthHeader());
    }

    addPrice(price) {
        return axios.post(""+USER_API_BASE_URL, price, AuthService.getAuthHeader());
    }

    editPrice(price) {
        return axios.put(USER_API_BASE_URL + '/' + price.id, price, AuthService.getAuthHeader());
    }

}

export default new GMBService();