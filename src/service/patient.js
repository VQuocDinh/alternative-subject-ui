import axios from 'axios';
import { API_URL } from '@App/treatment/common/constant';

const PatientService = {
  getAll: async () => {
    const response = await axios.get(`${API_URL}/api/patient/get`);
    return response.data;
  },
};

export default PatientService;
