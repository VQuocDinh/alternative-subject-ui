// src/treatment/prescribe/components/MedicationSchedule.jsx
import { useState, useEffect } from 'react';
import { Card, Table, Badge, Row, Col, Button } from 'react-bootstrap';
import { format } from 'date-fns';
import vi from 'date-fns/locale/vi';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { FaFilePdf } from 'react-icons/fa';

const mockSelectedDrugs = [
  {
    name: 'Paracetamol',
    dosage: '500mg',
    frequency: 'Ngày 3 lần',
    instructions: 'Uống sau khi ăn',
    route: 'Uống',
  },
  {
    name: 'Amoxicillin',
    dosage: '250mg',
    frequency: 'Ngày 2 lần',
    instructions: 'Uống trước bữa ăn',
    route: 'Uống',
  },
  {
    name: 'Vitamin C',
    dosage: '1000mg',
    frequency: 'Ngày 1 lần',
    instructions: 'Uống vào buổi sáng',
    route: 'Uống',
  },
];
const MedicationSchedule = ({ selectedDrugs = mockSelectedDrugs }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [scheduleData, setScheduleData] = useState([]);

  // Tạo lịch uống thuốc dựa trên đơn thuốc
  useEffect(() => {
    if (selectedDrugs.length > 0) {
      generateSchedule(selectedDrugs, selectedDate);
    }
  }, [selectedDrugs, selectedDate]);

  const generateSchedule = (drugs, date) => {
    const schedule = [];
    const timeSlots = {
      'Trước bữa sáng': '06:00',
      'Sau bữa sáng': '07:30',
      'Trước bữa trưa': '11:00',
      'Sau bữa trưa': '12:30',
      'Trước bữa tối': '17:00',
      'Sau bữa tối': '18:30',
      'Trước khi ngủ': '21:00',
    };

    console.log('drugs: ', drugs);

    drugs.forEach((drug) => {
      const times = getTimesFromFrequency(drug.frequency);
      times.forEach((time) => {
        schedule.push({
          time: timeSlots[time],
          drugName: drug.name,
          dosage: drug.dosage,
          instructions: drug.instructions,
          timing: time,
          route: drug.route,
          status: 'pending',
        });
      });
    });

    // Sắp xếp theo thời gian
    schedule.sort((a, b) => a.time.localeCompare(b.time));
    console.log('schedules: ', schedule);
    setScheduleData(schedule);
  };

  const getTimesFromFrequency = (frequency) => {
    const frequencyMap = {
      '1 lần/ngày': ['Sau bữa sáng'],
      '2 lần/ngày': ['Sau bữa sáng', 'Sau bữa tối'],
      '3 lần/ngày': ['Sau bữa sáng', 'Sau bữa trưa', 'Sau bữa tối'],
      '4 lần/ngày': ['Trước bữa sáng', 'Trước bữa trưa', 'Trước bữa tối', 'Trước khi ngủ'],
    };
    return frequencyMap[frequency] || [];
  };

  const getStatusBadge = (status) => {
    const badges = {
      completed: <Badge bg="success">Đã uống</Badge>,
      pending: <Badge bg="warning">Chưa uống</Badge>,
      missed: <Badge bg="danger">Bỏ lỡ</Badge>,
    };
    return badges[status];
  };

  const handleMarkAsTaken = (index) => {
    const newSchedule = [...scheduleData];
    newSchedule[index].status = 'completed';
    setScheduleData(newSchedule);
  };

  const exportSchedule = () => {
    // Logic xuất lịch uống thuốc (PDF hoặc Excel)
  };

  return (
    <Card className="mb-4 mt-5">
      <Card.Header className="d-flex justify-content-between align-items-center p-3">
        <h5 className="mb-0">Lịch uống thuốc</h5>
        <Button
          variant="outline-primary"
          size="sm"
          onClick={exportSchedule}
          className="d-flex align-items-center gap-1"
        >
          <FaFilePdf />
          Xuất lịch uống thuốc
        </Button>
      </Card.Header>
      <Card.Body>
        <Row>
          <Col md={4}>
            <div className="mb-4">
              <Calendar
                onChange={setSelectedDate}
                value={selectedDate}
                locale={vi}
                className="w-100"
              />
            </div>
            <Card className="bg-light">
              <Card.Body>
                <h6>Chú thích</h6>
                <div className="d-flex flex-column gap-2">
                  {getStatusBadge('completed')} <small>Đã uống thuốc</small>
                  {getStatusBadge('pending')} <small>Chưa đến giờ uống</small>
                  {getStatusBadge('missed')} <small>Bỏ lỡ thời gian uống</small>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={8}>
            <h6 className="mb-3">
              Lịch uống thuốc ngày: {format(selectedDate, 'dd/MM/yyyy', { locale: vi })}
            </h6>
            <Table responsive bordered hover>
              <thead>
                <tr className='text-center'>
                  <th>Thời gian</th>
                  <th>Tên thuốc</th>
                  <th>Liều lượng</th>
                  <th>Cách dùng</th>
                  <th>Trạng thái</th>
                  <th>Thao tác</th>
                </tr>
              </thead>
              <tbody>
                {console.log('scheduleData: ', scheduleData)}
                {scheduleData.map((item, index) => (
                  <tr key={index} className='text-center'>
                    <td>{item.time}</td>
                    <td>{item.drugName}</td>
                    <td>{item.dosage}</td>
                    <td>
                      <small>
                        {item.timing}
                        <br />
                        {item.route}
                        {item.instructions && (
                          <>
                            <br />
                            <i>{item.instructions}</i>
                          </>
                        )}
                      </small>
                    </td>
                    <td>{getStatusBadge(item.status)}</td>
                    <td>
                      <Button
                        size="sm"
                        variant={item.status === 'completed' ? 'success' : 'outline-primary'}
                        onClick={() => handleMarkAsTaken(index)}
                        disabled={item.status === 'completed'}
                      >
                        {item.status === 'completed' ? 'Đã uống' : 'Đánh dấu đã uống'}
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default MedicationSchedule;
