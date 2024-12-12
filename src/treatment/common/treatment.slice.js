import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentMedicalRecordId: null,
  patientId: null,
  countFetchVitalSign: 0,
};

const treatmentSlice = createSlice({
  name: 'treatment',
  initialState,
  reducers: {
    setCurrentMedicalRecordId(state, action) {
      state.currentMedicalRecordId = action.payload;
    },
    setPatientId(state, action) {
      state.patientId = action.payload;
    },
    setCountFetchVitalSign(state) {
      state.countFetchVitalSign = state.countFetchVitalSign + 1;
    },
    clearTreatmentData(state) {
      state.currentMedicalRecordId = null;
      state.patientId = null;
    },
  },
});

export const {
  setCurrentMedicalRecordId,
  setPatientId,
  clearTreatmentData,
  setCountFetchVitalSign,
} = treatmentSlice.actions;

export default treatmentSlice.reducer;
