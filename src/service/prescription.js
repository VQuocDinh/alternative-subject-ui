import axios from "axios"
import { API_URL } from '../treatment/common/constant';

const PrescriptionService = {
    getByPatient: async (patientId) => {
        return await axios.get(`${API_URL}/api/prescription/getByPatient`, {params: {patientId}})
    },

    getById: async (id) => {
        return await axios.get(`${API_URL}/api/prescription/getById`, {params: {id}})
    }
}

export default PrescriptionService