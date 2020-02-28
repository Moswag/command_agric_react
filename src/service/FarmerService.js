import axios from 'axios';
import AuthService from './AuthService';

const USER_API_BASE_URL = 'http://localhost:5000/api/farmer';

class FarmerService {

    fetchFarmers() {
        return axios.get(USER_API_BASE_URL, AuthService.getAuthHeader());
    }

    fetchFarmerById(farmerId) {
        return axios.get(USER_API_BASE_URL + '/' + farmerId, AuthService.getAuthHeader());
    }

    deleteFarmer(farmerId) {
        return axios.delete(USER_API_BASE_URL + '/' + farmerId, AuthService.getAuthHeader());
    }

    addFarmer(farmer) {
        return axios.post(""+USER_API_BASE_URL, farmer, AuthService.getAuthHeader());
    }

    editFarmer(farmer) {
        return axios.put(USER_API_BASE_URL + '/' + farmer.id, farmer, AuthService.getAuthHeader());
    }

}

export default new FarmerService();