import { Button } from 'react-bootstrap';
import Page from '../../../common/components/Page';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { PATH_DASHBOARD } from '../../../common/routes/path';
import { replacePathParams } from '../../../common/utils/common.utils';

const MiniSidebar = () => {
  const params = useParams();
  const location = useLocation();
  console.log('vital sign id in minisidebar', params.patientId);
  const navigate = useNavigate();
  return (
    <Page>
      <div className="d-flex flex-column gap-4">
        <Button
          onClick={() =>
            navigate(
              replacePathParams(PATH_DASHBOARD.treatment.vitalSign, {
                patientId: params?.patientId,
              })
            )
          }
          variant={location.pathname.includes('vital-sign') ? 'primary' : 'outline-primary'}
        >
          Chỉ số sức khỏe
        </Button>
        <Button
          onClick={() =>
            navigate(
              replacePathParams(PATH_DASHBOARD.treatment.vitalSign, {
                patientId: params?.patientId,
              })
            )
          }
          variant={location.pathname.includes('diagnosis') ? 'primary' : 'outline-primary'}
        >
          Triệu chứng & khám tổng quan
        </Button>
        <Button
          onClick={() =>
            navigate(
              replacePathParams(PATH_DASHBOARD.treatment.vitalSign, {
                patientId: params?.patientId,
              })
            )
          }
          variant={location.pathname.includes('investigation') ? 'primary' : 'outline-primary'}
        >
          Chuẩn đoán bệnh
        </Button>

        <Button
          onClick={() =>
            navigate(
              replacePathParams(PATH_DASHBOARD.treatment.prescriptionHistory, {
                patientId: params?.patientId,
              })
            )
          }
          variant={
            location.pathname.includes('prescription-history') ? 'primary' : 'outline-primary'
          }
        >
          Lịch sử thuốc
        </Button>
        <Button
          onClick={() =>
            navigate(
              replacePathParams(PATH_DASHBOARD.treatment.prescriptionHistory, {
                patientId: params?.patientId,
              })
            )
          }
          variant={location.pathname.includes('/prescription/') ? 'primary' : 'outline-primary'}
        >
          Kê đơn thuốc
        </Button>
      </div>
    </Page>
  );
};

export default MiniSidebar;
