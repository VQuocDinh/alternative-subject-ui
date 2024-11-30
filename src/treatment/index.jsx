import { useEffect, useState } from 'react';
import Page from '../common/components/Page';
import DashboardWidgets from './common/components/DashboardWidget';
import PatientTable from './common/components/PatientTable';
import { PATIENT_LIST_MOCK_DATA, STATUSES_TREATMENT } from './common/constant';
import PatientService from '../service/patient';

const TreatmentCommonContainer = () => {
  const [patientList, setPatientList] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null);

  const getPatientList = async() => {
    setIsLoading(true)
    setError(null)
    try {
      const response = await PatientService.getAll()
      console.log('data: ', response)
      if(response?.success) {
        setPatientList(response.data || [])
      } else {
        throw new Error(response?.message || 'Failed to fetch patients')
      }
    } catch (error) {
      console.error('Error fetching patient list:', error);
      setError(error.message || 'Something went wrong!');
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(()=>{
    getPatientList()
  },[])

  const refreshPatientList = () => {
    getPatientList();
  };

  if (isLoading) {
    return <div>Loading patients...</div>;
  }

  if (error) {
    return (
      <div>
        <p>Error: {error}</p>
        <button onClick={refreshPatientList}>Try Again</button>
      </div>
    );
  }

  if (!patientList.length) {
    return <div>No patients found</div>;
  }

  return (
    <div className="w-100 d-flex flex-column gap-4" style={{ marginBottom: '100px' }}>
      <Page>
        <DashboardWidgets />
      </Page>
      <Page>
        {' '}
        <div className="mt-4" style={{ paddingRight: '16px', paddingLeft: '16px' }}>
          <h3 className="fw-bold">Danh sách bệnh nhân</h3>
          <PatientTable patients={patientList} statuses={STATUSES_TREATMENT} />
        </div>
      </Page>
    </div>
  );
};

export default TreatmentCommonContainer;
