import { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableContainer,
  Box,
  FormControlLabel,
  Switch,
  TablePagination,
} from '@mui/material';
import TableHeadCustom from '../../../common/components/mui-table/TableHeadCustom';
import TableSkeleton from '../../../common/components/mui-table/TableSkeleton';
import TableNoData from '../../../common/components/mui-table/TableNoData';
import ListPatientTableRow from './ListPatientTableRow';
import { HEAD_TABLE_PROPS } from '@/manage-patient/common/managePatient.constant';
import { axiosInstance } from '../../../common/utils/axios';
import { API_PATIENT } from '../../../common/constant/common.constant';

const ListPatientTable = () => {
  const [patientList, setPatientList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [dense, setDense] = useState(false);

  const getPatientList = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axiosInstance.get(API_PATIENT, {
        params: { page: page + 1, limit: rowsPerPage },
      });
      setPatientList(response?.data?.metadata?.data || []);
    } catch (error) {
      console.error('Error fetching patient list:', error);
      setError(error?.message || 'Something went wrong!');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getPatientList();
  }, [page, rowsPerPage]);

  const handleDeleteRow = (id) => {
    setPatientList((prevPatients) => prevPatients.filter((patient) => patient.id !== id));
  };

  const handleEditRow = (id) => {
    // Implement edit functionality here
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  return (
    <Box>
      <TableContainer sx={{ position: 'relative' }}>
        <Table size={dense ? 'small' : 'medium'}>
          <TableHeadCustom headLabel={HEAD_TABLE_PROPS} rowCount={patientList.length} />
          <TableBody>
            {patientList.map((patient) => (
              <ListPatientTableRow
                key={patient.id}
                patient={patient}
                onDeleteRow={() => handleDeleteRow(patient.id)}
                onEditRow={() => handleEditRow(patient.id)}
              />
            ))}
            {patientList.length === 0 && <TableNoData />}
            {isLoading && <TableSkeleton isLoading={isLoading} row={rowsPerPage} />}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ position: 'relative', mt: '20px' }}>
        <TablePagination
          rowsPerPageOptions={[5, 10, 15]}
          component="div"
          count={patientList.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
        <FormControlLabel
          control={<Switch checked={dense} onChange={handleChangeDense} />}
          label="Thu gọn"
          sx={{
            px: 3,
            py: 1.5,
            top: 0,
            position: { md: 'absolute' },
          }}
        />
      </Box>
    </Box>
  );
};

export default ListPatientTable;
