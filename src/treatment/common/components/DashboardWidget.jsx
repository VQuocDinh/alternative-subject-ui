import { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import Widget from './Widget';
import {
  FaUserPlus,
  FaUserNurse,
  FaUserMd,
  FaVials,
  FaFileInvoiceDollar,
  FaCheck,
} from 'react-icons/fa';

const DashboardWidgets = () => {
  // Mock data
  const mockData = {
    registeredPatients: 35,
    nursesHandling: 10,
    doctorsHandling: 15,
    patientsWaitingForTests: 12,
    patientsBilling: 8,
    completedPatients: 20,
  };

  const [data, setData] = useState({
    registeredPatients: 0,
    nursesHandling: 0,
    doctorsHandling: 0,
    patientsWaitingForTests: 0,
    patientsBilling: 0,
    completedPatients: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500)); // Giả lập độ trễ API
      setData(mockData);
    };
    fetchData();
  }, []);

  const widgets = [
    {
      title: 'Bệnh nhân đăng ký khám',
      value: data.registeredPatients,
      icon: <FaUserPlus />,
      backgroundColor: '#E8F5E9',
      textColor: '#2E7D32',
      iconColor: '#66BB6A',
    },
    {
      title: 'Y tá tiếp nhận bệnh nhân',
      value: data.nursesHandling,
      icon: <FaUserNurse />,
      backgroundColor: '#FFF8E1',
      textColor: '#F9A825',
      iconColor: '#FFD54F',
    },
    {
      title: 'Bác sĩ tiếp nhận bệnh nhân',
      value: data.doctorsHandling,
      icon: <FaUserMd />,
      backgroundColor: '#E3F2FD',
      textColor: '#1565C0',
      iconColor: '#42A5F5',
    },
    {
      title: 'Bệnh nhân chờ làm xét nghiệm',
      value: data.patientsWaitingForTests,
      icon: <FaVials />,
      backgroundColor: '#F3E5F5',
      textColor: '#6A1B9A',
      iconColor: '#AB47BC',
    },
    {
      title: 'Bệnh nhân làm thủ tục thanh toán',
      value: data.patientsBilling,
      icon: <FaFileInvoiceDollar />,
      backgroundColor: '#FFEBEE',
      textColor: '#C62828',
      iconColor: '#EF5350',
    },
    {
      title: 'Bệnh nhân hoàn thành khám',
      value: data.completedPatients,
      icon: <FaCheck />,
      backgroundColor: '#E3F2FD',
      textColor: '#1565C0',
      iconColor: '#42A5F5',
    },
  ];

  return (
    <Row className="p-1">
      {widgets.map((widget, index) => (
        <Col key={index} md={6} lg={4} className="mb-4">
          <Widget
            title={widget.title}
            value={widget.value}
            icon={widget.icon}
            backgroundColor={widget.backgroundColor}
            textColor={widget.textColor}
            iconColor={widget.iconColor}
          />
        </Col>
      ))}
    </Row>
  );
};

export default DashboardWidgets;
