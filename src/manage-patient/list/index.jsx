import Page from '../../common/components/Page';
import { useEffect, useState } from 'react';
import PatientTable from '../../treatment/common/components/PatientTable';
import { STATUSES_TREATMENT } from '../../treatment/common/constant';
import PatientService from '../../service/patient';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { PATH_DASHBOARD } from '../../common/routes/path';

const ListPatientContainer = () => {
  const [patientList, setPatientList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate()
  const getPatientList = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await PatientService.getAll();
      if (response?.status === 200) {
        setPatientList(response.metadata?.data || []);
      } else {
        throw new Error(response?.message || 'Failed to fetch patients');
      }
    } catch (error) {
      console.error('Error fetching patient list:', error);
      setError(error.message || 'Something went wrong!');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getPatientList();
  }, []);

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
    <Page>
      <div className="p-4">
        <Card>
          <Card.Header className="d-flex justify-content-between align-items-center">
            <h4 className="mb-0">Danh sách bệnh nhân</h4>
            <Button onClick={()=>{navigate(PATH_DASHBOARD.manage_patient.add)}}>Thêm bệnh nhân</Button>
          </Card.Header>
          <Card.Body>
            <PatientTable patients={patientList} statuses={STATUSES_TREATMENT} />
          </Card.Body>
        </Card>
      </div>
    </Page>
  );
};

export default ListPatientContainer;
