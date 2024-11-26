import { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TablePagination,
  IconButton,
  Tooltip,
  Box,
  FormControlLabel,
  Switch,
} from '@mui/material';
import { HEAD_TABLE_PROPS, PATIENT_LIST_MOCK_DATA } from '../constant';
import Iconify from '../../../common/components/Iconify';
import TableHeadCustom from '../../../common/components/mui-table/TableHeadCustom';
import PatientTableRow from './PatientTableRow';
import TableSkeleton from '../../../common/components/mui-table/TableSkeleton';
import TableNoData from '../../../common/components/mui-table/TableNoData';

const PatientTable = () => {
  const [data, setData] = useState(PATIENT_LIST_MOCK_DATA);
  const [selectedIds, setSelectedIds] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [dense, setDense] = useState(false);

  // Handle row selection
  const handleSelectRow = (id) => {
    setSelectedIds((prevSelectedIds) =>
      prevSelectedIds.includes(id)
        ? prevSelectedIds.filter((item) => item !== id)
        : [...prevSelectedIds, id]
    );
  };

  // Handle page change
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // Handle rows per page change
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Handle dense toggle
  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  // Handle delete selected rows
  const handleDeleteRows = (selectedIds) => {
    const newData = data.filter((row) => !selectedIds.includes(row.id));
    setData(newData);
    setSelectedIds([]);
  };

  return (
    <>
      <TableContainer sx={{ position: 'relative' }}>
        {!!selectedIds.length && (
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              padding: 1,
              backgroundColor: '#fff',
              zIndex: 1,
            }}
          >
            <Tooltip title="Xóa">
              <IconButton color="primary" onClick={() => handleDeleteRows(selectedIds)}>
                <Iconify icon={'eva:trash-2-outline'} />
              </IconButton>
            </Tooltip>
          </Box>
        )}
        <Table size={dense ? 'small' : 'medium'}>
          <TableHeadCustom headLabel={HEAD_TABLE_PROPS} rowCount={data?.length} />

          <TableBody>
            {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
              <PatientTableRow row={row} onDeleteRow={() => {}} onSelectRow={() => {}} />
              // <TableRow key={row.id}>
              //   <TableCell align="left">{row.patientId}</TableCell>
              //   <TableCell align="left">{row.name}</TableCell>
              //   <TableCell align="left">{row.age}</TableCell>
              //   <TableCell align="left">{row.checkInTime}</TableCell>
              //   <TableCell align="left">{row.status}</TableCell>
              //   <TableCell align="left">
              //     <TableMoreMenu>
              //     <Tooltip title="Chuyển trạng thái">
              //       <IconButton
              //         color="primary"
              //         onClick={() => {
              //           // Handle transition of status logic
              //           console.log(`Chuyển trạng thái cho bệnh nhân ${row.patientId}`);
              //         }}
              //       >
              //         <Iconify icon="eva:arrow-ios-forward-fill" />
              //       </IconButton>
              //     </Tooltip>
              //     </TableMoreMenu>
              //   </TableCell>
              // </TableRow>
            ))}
            {/* Pagination */}
            {/* <TableSkeleton isLoading={isLoadingData} row={rowsPerPage} /> */}
            {data.length === 0 && <TableNoData isNotFound={true} />}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ position: 'relative', mt: '20px' }}>
        <TablePagination
          rowsPerPageOptions={[5, 10, 15]}
          component="div"
          count={data.length}
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
    </>
  );
};

export default PatientTable;
