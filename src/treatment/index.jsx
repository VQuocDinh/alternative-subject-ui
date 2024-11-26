import Page from '../common/components/Page';
import DashboardWidgets from './common/components/DashboardWidget';
import PatientTable from './common/components/PatientTable';
import { PATIENT_LIST_MOCK_DATA, STATUSES_TREATMENT } from './common/constant';

const TreatmentCommonContainer = () => {
  return (
    <div className="w-100 d-flex flex-column gap-4" style={{ marginBottom: '100px' }}>
      <Page>
        <DashboardWidgets />
      </Page>
      <Page>
        {' '}
        <div className="mt-4" style={{ paddingRight: '16px', paddingLeft: '16px' }}>
          <h3 className="fw-bold">Danh sách bệnh nhân</h3>
          <PatientTable patients={PATIENT_LIST_MOCK_DATA} statuses={STATUSES_TREATMENT} />
        </div>
      </Page>
    </div>
  );
};

export default TreatmentCommonContainer;
