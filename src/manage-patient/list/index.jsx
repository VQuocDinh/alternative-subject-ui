import { useNavigate } from 'react-router-dom';
import Page from '../../common/components/Page';
import TableContainer from '../../common/components/table/TableContainer';
import { Pagination } from 'react-bootstrap';
import { useState } from 'react';

const ListPatientContainer = () => {
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const patientsPerPage = 2; // Số bệnh nhân hiển thị mỗi trang

  const header = ['id', 'Name', 'Age', 'Disease', 'Appointment Date'];
  const data = [
    {
      id: 1,
      Name: 'Nguyen Thi Lan',
      Age: 34,
      Disease: 'Diabetes',
      'Appointment Date': '2024-11-01',
    },
    {
      id: 2,
      Name: 'Tran Minh Tu',
      Age: 45,
      Disease: 'Hypertension',
      'Appointment Date': '2024-11-10',
    },
    { id: 3, Name: 'Le Thi Mai', Age: 29, Disease: 'Asthma', 'Appointment Date': '2024-11-15' },
    {
      id: 4,
      Name: 'Phan Thanh Hieu',
      Age: 61,
      Disease: 'Heart Disease',
      'Appointment Date': '2024-11-20',
    },
  ];

  // Hàm xử lý thêm bệnh nhân
  const handleAdd = () => {
    console.log('Navigate to Add Patient page');
  };

  // Hàm xử lý chỉnh sửa bệnh nhân
  const handleEdit = (id) => {
    console.log('Edit patient with id:', id);
  };

  // Tính toán dữ liệu cho trang hiện tại
  const indexOfLastPatient = currentPage * patientsPerPage;
  const indexOfFirstPatient = indexOfLastPatient - patientsPerPage;
  const currentPatients = data.slice(indexOfFirstPatient, indexOfLastPatient);

  // Tạo các nút phân trang
  const totalPages = Math.ceil(data.length / patientsPerPage);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <Page>
      <TableContainer
        title="Danh sách bệnh nhân"
        header={header}
        data={currentPatients}
        onHandleAdd={handleAdd}
        buttonTitle="Thêm mới bệnh nhân"
        isActionButton={true}
        handleEdit={(id) => handleEdit(id)}
      >
        {/* Pagination */}
        <div className="float-end mt-2">
          <Pagination>
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
          </Pagination>
        </div>
      </TableContainer>
    </Page>
  );
};

export default ListPatientContainer;
