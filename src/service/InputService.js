import axios from 'axios';
import AuthService from './AuthService';

const USER_API_BASE_URL = 'http://localhost:5000/api/inputs';

class InputService {

    fetchInputs() {
        return axios.get(USER_API_BASE_URL, AuthService.getAuthHeader());
    }

    fetchInputById(inputId) {
        return axios.get(USER_API_BASE_URL + '/' + inputId, AuthService.getAuthHeader());
    }

    deleteInput(inputId) {
        return axios.delete(USER_API_BASE_URL + '/' + inputId, AuthService.getAuthHeader());
    }

    addInput(input) {
        return axios.post(""+USER_API_BASE_URL, input, AuthService.getAuthHeader());
    }

    editInput(input) {
        return axios.put(USER_API_BASE_URL + '/' + input.id, input, AuthService.getAuthHeader());
    }

}

export default new InputService();