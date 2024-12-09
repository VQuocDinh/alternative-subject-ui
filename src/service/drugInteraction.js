import { API_URL } from '@App/treatment/common/constant';
import axios from 'axios';
export const drugInteractionService = {
  checkDrugInteraction: async ({selectedDrugs, newDrug}) => {
    console.log('selectedDrugss: ', selectedDrugs)
    console.log('newDrugs: ', newDrug)
    const response = await axios.post(`${API_URL}/api/drug-interaction/check`, {
      selectedDrugs,
      newDrug,
    });
    return response.data;
  },
};
