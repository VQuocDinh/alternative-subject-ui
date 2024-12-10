import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentMedicalRecordId: null,
  patientId: null,
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
    clearTreatmentData(state) {
      state.currentMedicalRecordId = null;
      state.patientId = null;
    },
  },
});

export const { setCurrentMedicalRecordId, setPatientId, clearTreatmentData } =
  treatmentSlice.actions;

export default treatmentSlice.reducer;
