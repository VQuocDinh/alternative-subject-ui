import Page from '../../common/components/Page';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { PATH_DASHBOARD } from '../../common/routes/path';
import ListPatientTable from './components/ListPatientTable';

const ListPatientContainer = () => {
  const navigate = useNavigate();

  return (
    <Page>
      <div className="p-4">
        <Card>
          <Card.Header className="d-flex justify-content-between align-items-center">
            <h4 className="mb-0">Danh sách bệnh nhân</h4>
            <Button
              onClick={() => {
                navigate(PATH_DASHBOARD.manage_patient.add);
              }}
            >
              Thêm bệnh nhân
            </Button>
          </Card.Header>
          <Card.Body>
            <ListPatientTable />
          </Card.Body>
        </Card>
      </div>
    </Page>
  );
};

export default ListPatientContainer;
