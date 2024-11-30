import axios from "axios"
import { API_URL } from '../treatment/common/constant';

const PrescriptionService = {
    getByPatient: async () => {
        return await axios.get(`${API_URL}/api/prescription/getByPatient`)
    }
}

export default PrescriptionService