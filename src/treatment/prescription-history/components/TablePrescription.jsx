import Page from '../../../common/components/Page';
import TableContainer from '../../../common/components/table/TableContainer';
import { Pagination, Card, Form, InputGroup } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
import { replacePathParams } from '../../../common/utils/common.utils';
import { PATH_DASHBOARD } from '../../../common/routes/path';
import PrescriptionService from '../../../service/prescription';

const TablePrescription = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const prescriptionPerPage = 5;
  const [prescriptions, setPrescriptions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const presciptionPerPage = 5;

  const getPrescriptionsByPatient = async () => {
    setIsLoading(true);
    try {
      const response = await PrescriptionService.getByPatient();
      console.log('response.data.data: ', response.data.data)
      if (response?.data?.success) {
        setPrescriptions(response.data.data || []);
      }
    } catch (error) {
      console.error('Error fetching presciption list:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getPrescriptionsByPatient();
  }, []);

  if (isLoading) {
    return <div>Loading presciption...</div>;
  }

  const header = ['id', 'medical_record_id', 'doctor_name', 'prescribed_at', 'notes'];

  const formatPrescriptionData = (prescriptions) => {
    return prescriptions.map((prescription) => ({
      id: prescription.id,
      medical_record_id: prescription.medical_record_id,
      doctor_name: `${prescription.doctor.first_name} ${prescription.doctor.last_name}`,
      prescribed_at: new Date(prescription.prescribed_at).toLocaleDateString('vi-VN'),
      notes: prescription.notes,
    }));
  };

  const filteredPrescriptions = prescriptions
    ? formatPrescriptionData(prescriptions).filter(
        (prescription) =>
          prescription.doctor_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          prescription.notes.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  const indexOfLastPrescription = currentPage * presciptionPerPage;
  const indexOfFirstPrescription = indexOfLastPrescription - presciptionPerPage;
  const currentPresciption = filteredPrescriptions.slice(
    indexOfFirstPrescription,
    indexOfLastPrescription
  );
  const totalPages = Math.ceil(filteredPrescriptions.length / prescriptionPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleRowClick = (id) => {
    navigate(
      replacePathParams(PATH_DASHBOARD.treatment.detailPrescriptionHistory, {
        patientId: params.patientId,
        prescriptionHistoryId: id,
      })
    );
  };

  const headerMapping = {
    id: 'ID',
    medical_record_id: 'Mã bệnh án',
    doctor_name: 'Bác sĩ',
    prescribed_at: 'Ngày kê đơn',
    notes: 'Ghi chú',
  };

  return (
    <Page>
      <div className="prescription-page">
        <Card className="outline-0 border-0">
          <Card.Body>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h4 className="mb-0 text-primary">Danh sách đơn thuốc</h4>
              <button className="btn btn-primary">+ Thêm mới đơn thuốc</button>
            </div>

            <div className="mb-4">
              <InputGroup>
                <InputGroup.Text className="bg-light">
                  <FaSearch className="text-muted" />
                </InputGroup.Text>
                <Form.Control
                  placeholder="Tìm kiếm theo bác sĩ hoặc ghi chú..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="border-left-0"
                />
              </InputGroup>
            </div>

            <div className="table-container">
              <TableContainer
                headerMapping={headerMapping}
                header={header}
                data={currentPresciption}
                isActionButton={true}
                className="table-hover"
                onRowClick={handleRowClick}
              />
            </div>

            <div className="d-flex justify-content-between align-items-center mt-4">
              <div className="text-muted">
                Hiển thị {indexOfFirstPrescription + 1} đến{' '}
                {Math.min(indexOfLastPrescription, filteredPrescriptions.length)} trong số{' '}
                {filteredPrescriptions.length} đơn thuốc
              </div>
              <Pagination className="mb-0">
                <Pagination.First onClick={() => setCurrentPage(1)} disabled={currentPage === 1} />
                <Pagination.Prev
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                />
                {[...Array(totalPages).keys()].map((page) => (
                  <Pagination.Item
                    key={page + 1}
                    onClick={() => handlePageChange(page + 1)}
                    active={page + 1 === currentPage}
                  >
                    {page + 1}
                  </Pagination.Item>
                ))}
                <Pagination.Next
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                />
                <Pagination.Last
                  onClick={() => setCurrentPage(totalPages)}
                  disabled={currentPage === totalPages}
                />
              </Pagination>
            </div>
          </Card.Body>
        </Card>
      </div>
    </Page>
  );
};

export default TablePrescription;
