import { Button } from 'react-bootstrap';
import TableHeader from './TableHeader';
import Table from 'react-bootstrap/Table';

/**
 * example data
 *
 * {
 * title
 * header: array
 * data: table row
 * }
 */

const TableContainer = ({
  title,
  header,
  data,
  onHandleAdd,
  buttonTitle,
  isActionButton,
  handleEdit,
  children,
}) => {
  return (
    <div className="p-3">
      <div className="d-flex align-items-center justify-content-between w-100 mb-5">
        {title ? <h3 className="fw-bold">{title}</h3> : <div></div>}
        {isActionButton && (
          <Button variant="primary" onClick={onHandleAdd} className="fw-bold">
            {buttonTitle}
          </Button>
        )}
      </div>
      <Table striped bordered hover>
        <TableHeader header={header} />
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {header.map((col, colIndex) => (
                <td key={colIndex}>{row[col]}</td>
              ))}
              <td className="d-flex justify-content-around align-items-center">
                <Button onClick={() => handleEdit(row.id)} className="btn btn-secondary">
                  Chỉnh sửa
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {children}
    </div>
  );
};

export default TableContainer;
