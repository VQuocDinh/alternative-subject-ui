import React from 'react';
import { useParams } from 'react-router-dom';
import MiniSidebar from '../common/components/MiniSidebar';
import PatientInfo from '../common/components/PatientInfo';

const Overview = (props) => {
  const params = useParams();
  return (
    <div className="w-100 h-100 d-flex flex-row gap-3 ">
      <div className="" style={{ width: '20%' }}>
        <MiniSidebar />
      </div>
      <div className="w-100 d-flex gap-4 flex-column" style={{ marginBottom: '100px' }}>
        <PatientInfo id={params.patientId} />
      </div>
    </div>
  );
};

export default Overview;
