const TableHeader = ({ header }) => {
  return (
    <thead>
      <tr>
        {header.map((col, index) => (
          <th key={index}>{col}</th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
