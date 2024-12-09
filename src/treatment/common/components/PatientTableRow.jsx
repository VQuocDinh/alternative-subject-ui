import { MenuItem, TableCell, TableRow } from '@mui/material';
import { useState } from 'react';
import TableMoreMenu from '../../../common/components/mui-table/TableMoreMenu';
import Iconify from '../../../common/components/Iconify';
import { useNavigate, useParams } from 'react-router-dom';
import { PATH_DASHBOARD } from '../../../common/routes/path';
import { replacePathParams } from '../../../common/utils/common.utils';

const PatientTableRow = ({ row, onDeleteRow, onEditRow }) => {
  const navigate = useNavigate()
  const params = useParams();
  const [openMenu, setOpenMenuActions] = useState(null);
  const handleOpenMenu = (event) => {
    setOpenMenuActions(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpenMenuActions(null);
  };

  return (
    <TableRow hover>
      <TableCell align="left">{row.id}</TableCell>
      <TableCell align="left">{row?.Patient?.full_name}</TableCell>
      <TableCell align="left">{row?.Patient?.dob}</TableCell>
      <TableCell align="left">{row?.Patient?.phone}</TableCell>
      <TableCell align="left">{row?.status}</TableCell>
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
                  onEditRow({ recordId: row?.id, patientId: row?.Patient?.id });
                  handleCloseMenu();
                }}
              >
                <Iconify icon={'eva:edit-fill'} />
                Sửa
              </MenuItem>
              <MenuItem
                onClick={() => {
                  navigate(
                    replacePathParams(PATH_DASHBOARD.treatment.overview, {
                      patientId: row?.patientId,
                    })
                  )
                }}
              >
                <Iconify icon={'eva:edit-fill'} />
                Thông tin khám bệnh
              </MenuItem>
            </>
          }
        ></TableMoreMenu>
      </TableCell>
    </TableRow>
  );
};

export default PatientTableRow;
