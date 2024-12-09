import React from 'react';
import { List, ListItem, ListItemText, Typography } from '@mui/material';

const RecentMedicalRecords = ({ patientId }) => {
  const records = [
    { id: 1, date: '2023-06-01', diagnosis: 'Cảm cúm' },
    { id: 2, date: '2023-05-15', diagnosis: 'Viêm họng' },
  ];

  return (
    <List>
      {records.map((record) => (
        <ListItem key={record.id}>
          <ListItemText
            primary={record.diagnosis}
            secondary={
              <Typography component="span" variant="body2" color="text.primary">
                {record.date}
              </Typography>
            }
          />
        </ListItem>
      ))}
    </List>
  );
};

export default RecentMedicalRecords;