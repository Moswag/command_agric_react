import axios from 'axios';
import AuthService from './AuthService';

const USER_API_BASE_URL = 'http://localhost:5000/api/district';

class DistrictService {

    fetchDistricts() {
        return axios.get(USER_API_BASE_URL, AuthService.getAuthHeader());
    }

    fetchDIstrictById(districtId) {
        return axios.get(USER_API_BASE_URL + '/' + districtId, AuthService.getAuthHeader());
    }

    deleteDistrict(districtId) {
        return axios.delete(USER_API_BASE_URL + '/' + districtId, AuthService.getAuthHeader());
    }

    addDistrict(district) {
        return axios.post(""+USER_API_BASE_URL, district, AuthService.getAuthHeader());
    }

    editDistrict(district) {
        return axios.put(USER_API_BASE_URL + '/' + district.id, district, AuthService.getAuthHeader());
    }

}

export default new DistrictService();