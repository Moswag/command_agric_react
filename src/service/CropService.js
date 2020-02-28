import axios from 'axios';
import AuthService from './AuthService';

const USER_API_BASE_URL = 'http://localhost:5000/api/crops';

class CropService {

    fetchCrops() {
        return axios.get(USER_API_BASE_URL, AuthService.getAuthHeader());
    }

    fetchCropById(cropId) {
        return axios.get(USER_API_BASE_URL + '/' + cropId, AuthService.getAuthHeader());
    }

    deleteCrop(cropId) {
        return axios.delete(USER_API_BASE_URL + '/' + cropId, AuthService.getAuthHeader());
    }

    addCrop(crop) {
        return axios.post(""+USER_API_BASE_URL, crop, AuthService.getAuthHeader());
    }

    editCrop(crop) {
        return axios.put(USER_API_BASE_URL + '/' + crop.id, crop, AuthService.getAuthHeader());
    }

}

export default new CropService();