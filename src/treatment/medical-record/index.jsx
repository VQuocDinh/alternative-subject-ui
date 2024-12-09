import React from 'react';
import MiniSidebar from '../common/components/MiniSidebar';
import { TableContainer } from '@mui/material';
import PatientInfo from '../common/components/PatientInfo';
import MedicalRecordTable from './components/medicalRecordTable';

const MedicalRecord = (props) => {
  const columns = [
    { id: 'date', label: 'Ngày' },
    { id: 'diagnosis', label: 'Chẩn đoán' },
    { id: 'treatment', label: 'Điều trị' },
    { id: 'doctor', label: 'Bác sĩ' },
  ];

  const data = [
    { id: 1, date: '2023-06-01', diagnosis: 'Cảm cúm', treatment: 'Thuốc hạ sốt', doctor: 'Dr. Nguyễn' },
    { id: 2, date: '2023-06-15', diagnosis: 'Viêm họng', treatment: 'Kháng sinh', doctor: 'Dr. Trần' },
    // Thêm dữ liệu mẫu khác ở đây
  ];
  return (
    <div className="w-100 h-100 d-flex flex-row gap-3 ">
      <div className="" style={{ width: '20%' }}>
        <MiniSidebar />
      </div>
      <div className="w-100 d-flex gap-4 flex-column" style={{ marginBottom: '100px' }}>
        <PatientInfo />
        <MedicalRecordTable data={data} columns={columns} />
      </div>
    </div>
  );
};

export default MedicalRecord;
