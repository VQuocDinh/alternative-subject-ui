import { useEffect, useState } from 'react';
import Page from '../common/components/Page';
import DashboardWidgets from './common/components/DashboardWidget';
import PatientTable from './common/components/PatientTable';
import { STATUSES_TREATMENT } from './common/constant';
import axiosInstance from '../common/utils/axios';
import { API_TREATMENT_RECORD } from '../common/constant/common.constant';
import { MEDICAL_RECORD_STATUS } from '../common/constant/treatment.constant';

const TreatmentCommonContainer = () => {
  const [patientList, setPatientList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getPatientList = async () => {
    setIsLoading(true);
    setIsError(false);
    try {
      const response = await axiosInstance.get(API_TREATMENT_RECORD, {
        params: {
          status: MEDICAL_RECORD_STATUS.ALL,
        },
      });
      setPatientList(response.data?.metadata || []);
    } catch (err) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getPatientList();
  }, []);

  return (
    <div className="w-100 d-flex flex-column gap-4" style={{ marginBottom: '100px' }}>
      <Page>
        <DashboardWidgets />
      </Page>
      <Page>
        {' '}
        <div className="mt-4" style={{ paddingRight: '16px', paddingLeft: '16px' }}>
          <h3 className="fw-bold">Danh sách bệnh nhân</h3>
          <PatientTable
            patients={patientList}
            isLoading={isLoading}
            isError={isError}
            statuses={STATUSES_TREATMENT}
          />
        </div>
      </Page>
    </div>
  );
};

export default TreatmentCommonContainer;
