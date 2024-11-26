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
    id: 1,
    patientId: 'BN001',
    name: 'Nguyễn Văn A',
    age: 30,
    checkInTime: '2024-11-27 08:00',
    status: 'Đăng ký khám',
  },
  {
    id: 2,
    patientId: 'BN002',
    name: 'Trần Thị B',
    age: 45,
    checkInTime: '2024-11-27 08:30',
    status: 'Y tá tiếp nhận',
  },
  {
    id: 3,
    patientId: 'BN003',
    name: 'Lê Minh C',
    age: 60,
    checkInTime: '2024-11-27 09:00',
    status: 'Bác sĩ tiếp nhận',
  },
  {
    id: 4,
    patientId: 'BN004',
    name: 'Hoàng Thị D',
    age: 25,
    checkInTime: '2024-11-27 09:15',
    status: 'Chờ làm xét nghiệm',
  },
  {
    id: 5,
    patientId: 'BN005',
    name: 'Phạm Văn E',
    age: 50,
    checkInTime: '2024-11-27 09:45',
    status: 'Làm thủ tục thanh toán',
  },
];

export const HEAD_TABLE_PROPS = [
  { id: 'patientId', label: 'Mã bệnh nhân' },
  { id: 'name', label: 'Họ và tên' },
  { id: 'age', label: 'Tuổi' },
  { id: 'checkInTime', label: 'Thời gian check-in' },
  { id: 'status', label: 'Trạng thái' },
  { id: 'action', label: 'Hành động' },
];
