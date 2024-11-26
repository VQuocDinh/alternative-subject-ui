import { useState } from 'react';
import { Table, Pagination, Dropdown, ButtonGroup, Button } from 'react-bootstrap';

const PatientTable = ({ patients, statuses }) => {
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const patientsPerPage = 5;

  // Handle pagination logic
  const totalPages = Math.ceil(patients.length / patientsPerPage);
  const startIndex = (currentPage - 1) * patientsPerPage;
  const currentPatients = patients.slice(startIndex, startIndex + patientsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderStatusLabel = (statusCode) => {
    const status = statuses.find((s) => s.status === statusCode);
    return status ? status.label : 'Không xác định';
  };

  const handleAction = (patientId, newStatus) => {
    console.log(`Chuyển bệnh nhân ${patientId} sang trạng thái: ${newStatus}`);
    // Gắn logic API ở đây
  };

  return (
    <div className="mt-4">
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Mã bệnh nhân</th>
            <th>Họ và tên</th>
            <th>Tuổi</th>
            <th>Thời gian check-in</th>
            <th>Trạng thái</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {currentPatients.map((patient, index) => (
            <tr key={patient.id}>
              <td>{startIndex + index + 1}</td>
              <td>{patient.id}</td>
              <td>{patient.name}</td>
              <td>{patient.age}</td>
              <td>{patient.checkInTime}</td>
              <td>{renderStatusLabel(patient.status)}</td>
              <td>
                <Dropdown as={ButtonGroup}>
                  <Button variant="info">Thay đổi</Button>
                  <Dropdown.Toggle split variant="info" />
                  <Dropdown.Menu>
                    {statuses.map((status) => (
                      <Dropdown.Item
                        key={status.status}
                        onClick={() => handleAction(patient.id, status.status)}
                      >
                        {status.label}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Pagination */}
      <Pagination className="justify-content-end">
        {Array.from({ length: totalPages }).map((_, index) => (
          <Pagination.Item
            key={index + 1}
            active={index + 1 === currentPage}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    </div>
  );
};

export default PatientTable;
