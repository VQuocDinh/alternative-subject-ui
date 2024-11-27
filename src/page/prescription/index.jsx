import Page from '../../common/components/Page';
import TableContainer from '../../common/components/table/TableContainer';
import { Pagination, Card, Form, InputGroup } from 'react-bootstrap';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Prescription = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const presciptionPerPage = 5;

  const header = ['id', 'Mã bệnh án', 'Bác sĩ', 'Ngày kê đơn', 'Ghi chú'];
  const prescriptions = [
    {
      'id': 1,
      'Mã bệnh án': 1,
      'Bác sĩ': "Bs. Nguyễn Văn An",
      'Ngày kê đơn': "2024-03-15 09:30:00",
      'Ghi chú': "Uống thuốc sau bữa ăn, mỗi ngày 3 lần"
    },
    {
      'id': 2,
      'Mã bệnh án': 2,
      'Bác sĩ': "Bs. Trần Thị Bình",
      'Ngày kê đơn': "2024-03-15 10:45:00",
      'Ghi chú': "Uống thuốc trước khi đi ngủ"
    },
    {
      'id': 3,
      'Mã bệnh án': 3,
      'Bác sĩ': "Bs. Lê Văn Cường",
      'Ngày kê đơn': "2024-03-14 14:20:00",
      'Ghi chú': "Kê đơn điều trị viêm họng cấp"
    },
    {
      'id': 4,
      'Mã bệnh án': 1,
      'Bác sĩ': "Bs. Nguyễn Văn An",
      'Ngày kê đơn': "2024-03-14 16:00:00",
      'Ghi chú': "Tái khám sau 1 tuần nếu không đỡ"
    },
    {
      'id': 5,
      'Mã bệnh án': 4,
      'Bác sĩ': "Bs. Phạm Thị Dung",
      'Ngày kê đơn': "2024-03-13 11:15:00",
      'Ghi chú': "Điều trị dài ngày, uống đủ liều"
    }
  ];

  const filteredPrescriptions = prescriptions.filter(prescription => 
    prescription['Bác sĩ'].toLowerCase().includes(searchTerm.toLowerCase()) ||
    prescription['Ghi chú'].toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastPrescription = currentPage * presciptionPerPage;
  const indexOfFirstPrescription = indexOfLastPrescription - presciptionPerPage;
  const currentPresciption = filteredPrescriptions.slice(indexOfFirstPrescription, indexOfLastPrescription);
  const totalPages = Math.ceil(filteredPrescriptions.length / presciptionPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleRowClick = (id) => {
    navigate(`/dashboard/prescription/detail/${id}`);
  };

  return (
    <Page>
      <div className="prescription-page">
        <Card className="shadow-sm">
          <Card.Body>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h4 className="mb-0 text-primary">Danh sách đơn thuốc</h4>
              <button className="btn btn-primary">
                + Thêm mới đơn thuốc
              </button>
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
                header={header}
                data={currentPresciption}
                isActionButton={true}
                className="table-hover"
                onRowClick={handleRowClick}
              />
            </div>

            <div className="d-flex justify-content-between align-items-center mt-4">
              <div className="text-muted">
                Hiển thị {indexOfFirstPrescription + 1} đến {Math.min(indexOfLastPrescription, filteredPrescriptions.length)} trong số {filteredPrescriptions.length} đơn thuốc
              </div>
              <Pagination className="mb-0">
                <Pagination.First 
                  onClick={() => setCurrentPage(1)}
                  disabled={currentPage === 1}
                />
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

export default Prescription;
