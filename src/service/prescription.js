import axios from "axios"
import { API_URL } from '../treatment/common/constant';
import { addIcon } from "@iconify/react";

const PrescriptionService = {
    getByPatient: async (patientId) => {
        return await axios.get(`${API_URL}/api/prescription/getByPatient`, {params: {patientId}})
    },

    getById: async (id) => {
        return await axios.get(`${API_URL}/api/prescription/getById`, {params: {id}})
    },

    addPescription: async (prescriptionData) => {
        return await axios.post(`${API_URL}/api/prescription/add`, prescriptionData)
    }
}

export default PrescriptionService