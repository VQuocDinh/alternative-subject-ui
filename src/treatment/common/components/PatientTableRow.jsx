import { MenuItem, TableCell, TableRow } from '@mui/material';
import { useState } from 'react';
import TableMoreMenu from '../../../common/components/mui-table/TableMoreMenu';
import Iconify from '../../../common/components/Iconify';

const PatientTableRow = ({ row, onDeleteRow, onEditRow }) => {
  const [openMenu, setOpenMenuActions] = useState(null);
  const handleOpenMenu = (event) => {
    setOpenMenuActions(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpenMenuActions(null);
  };

  return (
    <TableRow hover>
      <TableCell align="left">{row.patientId}</TableCell>
      <TableCell align="left">{row.name}</TableCell>
      <TableCell align="left">{row.age}</TableCell>
      <TableCell align="left">{row.checkInTime}</TableCell>
      <TableCell align="left">{row.status}</TableCell>
      <TableCell align="left">
        <TableMoreMenu
          open={openMenu}
          onClose={handleCloseMenu}
          onOpen={handleOpenMenu}
          actions={
            <>
              <MenuItem
                onClick={() => {
                  onDeleteRow();
                  handleCloseMenu();
                }}
                sx={{ color: 'error.main' }}
              >
                <Iconify icon={'eva:trash-2-outline'} />
                Xóa
              </MenuItem>
              <MenuItem
                onClick={() => {
                  onEditRow();
                  handleCloseMenu();
                }}
              >
                <Iconify icon={'eva:edit-fill'} />
                Sửa
              </MenuItem>
            </>
          }
        ></TableMoreMenu>
      </TableCell>
    </TableRow>
  );
};

export default PatientTableRow;
