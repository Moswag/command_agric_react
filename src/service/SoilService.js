import axios from 'axios';
import AuthService from './AuthService';

const USER_API_BASE_URL = 'http://localhost:5000/api/soil';

class SoilService {

    fetchSoilTypes() {
        return axios.get(USER_API_BASE_URL, AuthService.getAuthHeader());
    }

    fetchSoilById(soilId) {
        return axios.get(USER_API_BASE_URL + '/' + soilId, AuthService.getAuthHeader());
    }

    deleteSoil(soilId) {
        return axios.delete(USER_API_BASE_URL + '/' + soilId, AuthService.getAuthHeader());
    }

    addSoil(soil) {
        return axios.post(""+USER_API_BASE_URL, soil, AuthService.getAuthHeader());
    }

    editSoil(soil) {
        return axios.put(USER_API_BASE_URL + '/' + soil.id, soil, AuthService.getAuthHeader());
    }

}

export default new SoilService();