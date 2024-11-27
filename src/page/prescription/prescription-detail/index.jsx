import { useParams, useNavigate } from 'react-router-dom';
import Page from '../../../common/components/Page';
import { Card, Button, Row, Col, Badge, Table } from 'react-bootstrap';
import { FaArrowLeft, FaPrint, FaEdit } from 'react-icons/fa';

const PrescriptionDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const prescriptionData = {
    id: id,
    patientInfo: {
      name: "Nguyễn Văn A",
      age: 35,
      gender: "Nam",
      medicalRecordId: "BN001",
      diagnosis: "Viêm họng cấp",
    },
    doctorInfo: {
      name: "Bs. Nguyễn Văn An",
      department: "Khoa Nội",
      licenseNumber: "CMD001",
    },
    prescriptionInfo: {
      date: "2024-03-15 09:30:00",
      status: "Đã kê đơn",
      note: "Uống thuốc sau bữa ăn, mỗi ngày 3 lần",
    },
    medications: [
      {
        id: 1,
        name: "Paracetamol",
        dosage: "500mg",
        quantity: 20,
        frequency: "3 lần/ngày",
        duration: "7 ngày",
        instructions: "Uống sau ăn"
      },
      {
        id: 2,
        name: "Amoxicillin",
        dosage: "500mg",
        quantity: 30,
        frequency: "2 lần/ngày",
        duration: "10 ngày",
        instructions: "Uống trước ăn 30 phút"
      }
    ]
  };

  return (
    <Page>
      <div className="prescription-detail">
        <Card className="shadow-sm mb-4">
          <Card.Body>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div className="d-flex align-items-center">
                <Button 
                  variant="link" 
                  className="p-0 me-3"
                  onClick={() => navigate('/dashboard/prescription/list')}
                >
                  <FaArrowLeft className="text-primary" />
                </Button>
                <h4 className="mb-0 text-primary">Đơn thuốc #{id}</h4>
              </div>
              <div>
                <Button variant="outline-primary" className="me-2">
                  <FaPrint className="me-2" />
                  In đơn thuốc
                </Button>
                <Button variant="primary">
                  <FaEdit className="me-2" />
                  Chỉnh sửa
                </Button>
              </div>
            </div>

            <div className="mb-4">
              <Badge bg="success" className="me-2">
                {prescriptionData.prescriptionInfo.status}
              </Badge>
              <span className="text-muted">
                Ngày kê đơn: {prescriptionData.prescriptionInfo.date}
              </span>
            </div>

            <Row className="mb-4">
              <Col md={6}>
                <Card className="border h-100">
                  <Card.Body>
                    <h5 className="card-title mb-3">Thông tin bệnh nhân</h5>
                    <div className="info-group mb-2">
                      <label className="text-muted">Họ và tên</label>
                      <p className="mb-1 fw-bold">{prescriptionData.patientInfo.name}</p>
                    </div>
                    <div className="info-group mb-2">
                      <label className="text-muted">Tuổi</label>
                      <p className="mb-1">{prescriptionData.patientInfo.age}</p>
                    </div>
                    <div className="info-group mb-2">
                      <label className="text-muted">Giới tính</label>
                      <p className="mb-1">{prescriptionData.patientInfo.gender}</p>
                    </div>
                    <div className="info-group mb-2">
                      <label className="text-muted">Mã bệnh án</label>
                      <p className="mb-1">{prescriptionData.patientInfo.medicalRecordId}</p>
                    </div>
                    <div className="info-group">
                      <label className="text-muted">Chẩn đoán</label>
                      <p className="mb-0">{prescriptionData.patientInfo.diagnosis}</p>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6}>
                <Card className="border h-100">
                  <Card.Body>
                    <h5 className="card-title mb-3">Thông tin bác sĩ</h5>
                    <div className="info-group mb-2">
                      <label className="text-muted">Bác sĩ kê đơn</label>
                      <p className="mb-1 fw-bold">{prescriptionData.doctorInfo.name}</p>
                    </div>
                    <div className="info-group mb-2">
                      <label className="text-muted">Khoa</label>
                      <p className="mb-1">{prescriptionData.doctorInfo.department}</p>
                    </div>
                    <div className="info-group">
                      <label className="text-muted">Mã số bác sĩ</label>
                      <p className="mb-0">{prescriptionData.doctorInfo.licenseNumber}</p>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            <Card className="border">
              <Card.Body>
                <h5 className="card-title mb-3">Chi tiết đơn thuốc</h5>
                <Table responsive className="table-hover">
                  <thead className="bg-light">
                    <tr>
                      <th>STT</th>
                      <th>Tên thuốc</th>
                      <th>Liều lượng</th>
                      <th>Số lượng</th>
                      <th>Tần suất</th>
                      <th>Thời gian</th>
                      <th>Hướng dẫn</th>
                    </tr>
                  </thead>
                  <tbody>
                    {prescriptionData.medications.map((med, index) => (
                      <tr key={med.id}>
                        <td>{index + 1}</td>
                        <td>{med.name}</td>
                        <td>{med.dosage}</td>
                        <td>{med.quantity}</td>
                        <td>{med.frequency}</td>
                        <td>{med.duration}</td>
                        <td>{med.instructions}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>

                <div className="mt-4">
                  <h6 className="text-muted mb-2">Ghi chú</h6>
                  <p className="mb-0">{prescriptionData.prescriptionInfo.note}</p>
                </div>
              </Card.Body>
            </Card>
          </Card.Body>
        </Card>
      </div>
    </Page>
  );
};

export default PrescriptionDetail;