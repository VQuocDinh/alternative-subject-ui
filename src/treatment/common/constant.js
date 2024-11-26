export const STATUSES_TREATMENT = [
  { status: 'registered', label: 'Đăng ký khám' },
  { status: 'nurse_handling', label: 'Y tá tiếp nhận' },
  { status: 'doctor_handling', label: 'Bác sĩ tiếp nhận' },
  { status: 'waiting_for_test', label: 'Chờ làm xét nghiệm' },
  { status: 'billing', label: 'Làm thủ tục thanh toán' },
  { status: 'completed', label: 'Hoàn thành khám' },
];

// Danh sách bệnh nhân mẫu
export const PATIENT_LIST_MOCK_DATA = [
  {
    id: 'BN001',
    name: 'Nguyễn Văn A',
    age: 30,
    status: 'registered',
    checkInTime: '2024-11-27 08:00',
  },
  {
    id: 'BN002',
    name: 'Trần Thị B',
    age: 45,
    status: 'nurse_handling',
    checkInTime: '2024-11-27 08:30',
  },
  {
    id: 'BN003',
    name: 'Lê Minh C',
    age: 60,
    status: 'doctor_handling',
    checkInTime: '2024-11-27 09:00',
  },
  {
    id: 'BN004',
    name: 'Hoàng Thị D',
    age: 25,
    status: 'waiting_for_test',
    checkInTime: '2024-11-27 09:15',
  },
  { id: 'BN005', name: 'Phạm Văn E', age: 50, status: 'billing', checkInTime: '2024-11-27 09:45' },
  { id: 'BN006', name: 'Vũ Thị F', age: 35, status: 'completed', checkInTime: '2024-11-27 10:00' },
  {
    id: 'BN007',
    name: 'Trần Văn G',
    age: 42,
    status: 'registered',
    checkInTime: '2024-11-27 10:15',
  },
  {
    id: 'BN008',
    name: 'Lê Thị H',
    age: 28,
    status: 'waiting_for_test',
    checkInTime: '2024-11-27 10:30',
  },
];
