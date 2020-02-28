import axios from 'axios';
import AuthService from './AuthService';

const USER_API_BASE_URL = 'http://localhost:5000/api/distribution';

class DistributionService {

    fetchDistributions() {
        return axios.get(USER_API_BASE_URL, AuthService.getAuthHeader());
    }

    fetchDistributionById(distributionId) {
        return axios.get(USER_API_BASE_URL + '/' + distributionId, AuthService.getAuthHeader());
    }

    deleteDistribution(distributionId) {
        return axios.delete(USER_API_BASE_URL + '/' + distributionId, AuthService.getAuthHeader());
    }

    addDistribution(distribution) {
        return axios.post(""+USER_API_BASE_URL, distribution, AuthService.getAuthHeader());
    }

    editDistribution(distribution) {
        return axios.put(USER_API_BASE_URL + '/' + distribution.id, distribution, AuthService.getAuthHeader());
    }

}

export default new DistributionService();