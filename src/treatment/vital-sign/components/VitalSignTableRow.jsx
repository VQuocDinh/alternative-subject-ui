import { TableCell, TableRow } from '@mui/material';

const VitalSignTableRow = ({ row, index }) => {
  return (
    <TableRow hover>
      <TableCell align="center">{index + 1}</TableCell>
      <TableCell align="center">{row.date}</TableCell>
      <TableCell align="center">{row.temperature}</TableCell>
      <TableCell align="center">{row.heartRate}</TableCell>
      <TableCell align="center">{row.bloodPressure}</TableCell>
      <TableCell align="center">{row.respiratoryRate}</TableCell>
      <TableCell align="center">{row.weight}</TableCell>
      <TableCell align="center">{row.height}</TableCell>
      <TableCell align="center">{row.bmi}</TableCell>
      <TableCell align="center">{row.note}</TableCell>
    </TableRow>
  );
};

export default VitalSignTableRow;
