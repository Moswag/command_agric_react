import axios from 'axios';
import AuthService from './AuthService';

const USER_API_BASE_URL = 'http://localhost:5000/api/farm';

class FarmService {

    fetchFarms() {
        return axios.get(USER_API_BASE_URL, AuthService.getAuthHeader());
    }

    fetchFarmById(farmId) {
        return axios.get(USER_API_BASE_URL + '/' + farmId, AuthService.getAuthHeader());
    }

    deleteFarm(farmId) {
        return axios.delete(USER_API_BASE_URL + '/' + farmId, AuthService.getAuthHeader());
    }

    addFarm(farm) {
        return axios.post(""+USER_API_BASE_URL, farm, AuthService.getAuthHeader());
    }

    editDistrict(farm) {
        return axios.put(USER_API_BASE_URL + '/' + farm.id, farm, AuthService.getAuthHeader());
    }

}

export default new FarmService();