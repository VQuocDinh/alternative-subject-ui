import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const LatestPrescriptions = ({ patientId }) => {
  // Giả sử bạn có dữ liệu từ API
  const prescriptions = [
    { id: 1, date: '2023-06-01', medication: 'Paracetamol', dosage: '500mg', frequency: '3 lần/ngày' },
    { id: 2, date: '2023-05-15', medication: 'Amoxicillin', dosage: '250mg', frequency: '2 lần/ngày' },
    // Thêm dữ liệu khác...
  ];

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Ngày</TableCell>
            <TableCell>Thuốc</TableCell>
            <TableCell>Liều lượng</TableCell>
            <TableCell>Tần suất</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {prescriptions.map((prescription) => (
            <TableRow key={prescription.id}>
              <TableCell>{prescription.date}</TableCell>
              <TableCell>{prescription.medication}</TableCell>
              <TableCell>{prescription.dosage}</TableCell>
              <TableCell>{prescription.frequency}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default LatestPrescriptions;