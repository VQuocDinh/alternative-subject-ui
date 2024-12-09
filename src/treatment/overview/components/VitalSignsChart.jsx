import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const VitalSignsChart = ({ patientId }) => {
  const data = [
    { date: '2023-01', bloodPressure: 120, heartRate: 72, temperature: 36.6 },
    { date: '2023-02', bloodPressure: 118, heartRate: 70, temperature: 36.5 },
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="bloodPressure" stroke="#8884d8" />
        <Line type="monotone" dataKey="heartRate" stroke="#82ca9d" />
        <Line type="monotone" dataKey="temperature" stroke="#ffc658" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default VitalSignsChart;