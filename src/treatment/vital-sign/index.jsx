import { useParams } from 'react-router-dom';
import VitalSignForm from './components/VitalSignForm';
import Page from '../../common/components/Page';
import { Button } from 'react-bootstrap';
import PatientInfo from '../common/components/PatientInfo';

const VitalSignContainer = () => {
  const params = useParams();
  console.log('vital sign id: ', params.patientId);
  return (
    <div className="w-100 h-100 d-flex flex-row gap-3 ">
      <div className="" style={{ width: '20%' }}>
        <Page>
          <div className="d-flex flex-column gap-4">
            <Button variant="outline-primary">Chỉ số sức khỏe</Button>
            <Button variant="outline-primary">Dị ứng</Button>
            <Button variant="outline-primary">Thuốc hiện tại</Button>
            <Button variant="outline-primary">Chuyển tiếp cho bác sĩ</Button>
          </div>
        </Page>
      </div>
      <div className="w-100 d-flex gap-4 flex-column" style={{ marginBottom: '100px' }}>
        <PatientInfo id={params.patientId} />
        <VitalSignForm />
      </div>
    </div>
  );
};

export default VitalSignContainer;
