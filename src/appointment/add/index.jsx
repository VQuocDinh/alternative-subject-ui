import Page from '../../common/components/Page';
import '../add/index.css';
import axios from 'axios';
const baseUrl = import.meta.env.VITE_BASE_URL || "http://localhost:8080";
import FormProvider from '../../common/components/hook-form/FormProvider';
import RHFTextField from '../../common/components/hook-form/RHFTextField';
import RHFSelect from '../../common/components/hook-form/RHFSelect';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Button, Row, Col } from 'react-bootstrap';
import { useForm, Controller } from 'react-hook-form';
import {
  Box,
  FormControlLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Stack,
  TextField,
} from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs'; // Import Day.js
import { useEffect, useState } from 'react';
import TimeItem from './components/TimeItem';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

function generateTimeSlots() {
  const times = [];

  const addTimeSlots = (startHour, startMinute, endHour, endMinute) => {
    let start = startHour * 60 + startMinute;
    const end = endHour * 60 + endMinute;

    while (start <= end) {
      const hours = Math.floor(start / 60);
      const minutes = start % 60;
      const timeString = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
      times.push(timeString);
      start += 30;
    }
  };

  addTimeSlots(7, 30, 10, 30);
  addTimeSlots(13, 0, 16, 30);

  return times;
}

const AppointmentAdd = () => {

  const currentYear = new Date().getFullYear();

  const times = generateTimeSlots();

  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);

  const validationSchema = Yup.object().shape({
    hoten: Yup.string()
      .required('Vui lòng nhập họ và tên')
      .matches(
        /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s]+$/,
        'Họ tên không được chứa ký tự đặc biệt hoặc số'
      ),
    email: Yup.string().email('Email không hợp lệ').required('Vui lòng nhập email'),
    phone: Yup.string()
      .matches(/^[0-9]+$/, 'Số điện thoại chỉ được chứa số')
      .min(10, 'Số điện thoại phải có ít nhất 10 số')
      .required('Vui lòng nhập số điện thoại'),
    location: Yup.string().required('Vui lòng nhập địa chỉ'),
    phongkham: Yup.string().required('Vui lòng chọn phòng khám'),
    bacsi: Yup.string().required('Vui lòng chọn bác sĩ'),
    chuyenkhoa: Yup.string().required('Vui lòng chọn chuyên khoa'),
    date: Yup.date().required('Vui lòng chọn ngày hẹn'),
    time: Yup.string().required('Vui lòng chọn giờ hẹn'),
  });

  const methods = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      hoten: '',
      email: '',
      phone: '',
      location: '',
      phongkham: '',
      bacsi: '',
      chuyenkhoa: '',
      date: null,
      time: null,
    },
  });

  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    watch,
  } = methods;

  const onSubmit = async (data) => {
    try {
      console.log('Form data:', data);
      
      // Add your API call here to save the appointment
      // await axios.post(...);

      // Show success message
      await Swal.fire({
        icon: 'success',
        title: 'Đặt lịch thành công!',
        text: 'Thông tin lịch hẹn của bạn đã được ghi nhận',
        confirmButtonText: 'Đóng',
        confirmButtonColor: '#3085d6',
      });

    } catch (error) {
      console.error('Error saving patient:', error);
      toast.error('Có lỗi xảy ra khi lưu thông tin');
      
      // Show error message
      await Swal.fire({
        icon: 'error',
        title: 'Đặt lịch thất bại!',
        text: 'Đã có lỗi xảy ra, vui lòng thử lại sau',
        confirmButtonText: 'Đóng',
        confirmButtonColor: '#d33',
      });
    }
  };

  const [selectedDate, setSelectedDate] = useState(dayjs());

  const [specializations, setSpecializations] = useState([]);
  const [staffList, setStaffList] = useState([]);

  const selectedSpecialization = watch('chuyenkhoa');
  const selectedDoctor = watch('bacsi');

  useEffect(() => {
    if (!selectedSpecialization) {
      setStaffList([]);
      setValue('bacsi', '');
      return;
    }

    const fetchDoctors = async () => {
      try {
        const response = await axios.get(`${baseUrl}/api/doctor/getDoctorBySpecialization`, {
          params: { specialization_id: selectedSpecialization },
        });
        setStaffList(response.data.metadata);
      } catch (error) {
        console.error('Failed to fetch doctors:', error);
      }
    };

    fetchDoctors();
  }, [selectedSpecialization, setValue]);

  useEffect(() => {
    const fetchSpecializations = async () => {
      try {
        const response = await axios.get(`${baseUrl}/api/specialization/get`);
        setSpecializations(response.data.metadata); 
      } catch (error) {
        console.error('Failed to fetch specializations:', error);
      }
    };

    fetchSpecializations();
  }, []);

  const handleTimeSlotSelect = (value) => {
    setSelectedTimeSlot(value);
    setValue('time', value, { shouldValidate: true });
  };

  return (
    <Page>
      <div className="p-2">
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <h3 className="mb-4 fw-bold">Đăng ký lịch hẹn khám</h3>
          <Row className="mb-3">
            <h4 className="mb-4 fw-bold"> Chọn</h4>
            <Col md={4}>
              <Stack gap={5}>
                <RHFSelect name="phongkham" label={'Phòng khám'} SelectProps={{ native: false }}>
                  <MenuItem value="1">Cơ sở 1</MenuItem>
                  <MenuItem value="2">Cơ sở 2</MenuItem>
                  <MenuItem value="3">Cơ sở 3</MenuItem>
                  <MenuItem value="4">Cơ sở 4</MenuItem>
                </RHFSelect>
                <RHFSelect
                  name="chuyenkhoa"
                  label="Chuyên khoa"
                  SelectProps={{ native: false }}
                >
                  {specializations?.map((item) => (
                    <MenuItem key={item.id} value={item.id}>
                      {item.specialization_name}
                    </MenuItem>
                  ))}
                </RHFSelect>
                <RHFSelect
                  name="bacsi"
                  label="Bác sĩ"
                  SelectProps={{ native: false }}
                >
                  {staffList?.length === 0 ? (
                    <MenuItem value="" disabled>
                      {selectedSpecialization ? 'Không có bác sĩ cho chuyên khoa này' : 'Vui lòng chọn chuyên khoa'}
                    </MenuItem>
                  ) : (
                    staffList?.map((staff) => (
                      <MenuItem key={staff.id} value={staff.id}>
                        {staff.first_name} {staff.last_name}
                      </MenuItem>
                    ))
                  )}
                </RHFSelect>
              </Stack>
            </Col>
            <Col md={6}>
              <Stack gap={5}  mb={'20px'}>
                <Controller
                  name="date"
                  control={methods.control}
                  render={({ field }) => (
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DateTimePicker
                        {...field}
                        label="Chọn ngày"
                        minDate={dayjs()}
                        maxDate={dayjs(`${currentYear}-12-31`)}
                        openTo="year"
                        views={['year', 'month', 'day']}
                        sx={{ 
                          width: '400px'
                        }}
                        onChange={(newValue) => {
                          field.onChange(newValue);
                          setSelectedDate(newValue);
                        }}
                      />
                    </LocalizationProvider>
                  )}
                />
                {errors.date && <div className="text-danger">{errors.date.message}</div>}

              </Stack >
              <Stack direction={'row'} gap={'15px'} flexWrap={'wrap'}>
                {times.map((value) => {
                  return (
                    <Box key={value} onClick={() => handleTimeSlotSelect(value)}>
                      <TimeItem isActive={selectedTimeSlot === value} value={value} />
                    </Box>
                  );
                })}
                {errors.time && <div className="text-danger">{errors.time.message}</div>}
              </Stack>
            </Col>
          </Row>

          <Row className="mb-5">
            <h4 className="mb-4 fw-bold"> Thông tin cá nhân</h4>
            <Col md={6}>
              <RHFTextField name="hoten" label={'Họ và tên'} />
              {errors.hoten && <span className="text-danger"></span>}
            </Col>

            <Col md={6}>
              <RHFTextField name="email" label={'Email'} />
              {errors.email && <span className="text-danger"></span>}
            </Col>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel value="female" control={<Radio />} label="Nam" />
              <FormControlLabel value="male" control={<Radio />} label="Nữ" />
              <FormControlLabel value="other" control={<Radio />} label="Khác" />
            </RadioGroup>
          </Row>

          <Row className="mb-5">
            <Col md={6}>
              <RHFTextField name="phone" label={'Số điện thoại'} />
              {errors.phone && <span className="text-danger"></span>}
            </Col>
            <Col md={6}>
              <RHFTextField name="location" label={'Địa chỉ'} />
              {errors.location && <span className="text-danger"></span>}
            </Col>
          </Row>

          <Row className="mb-5">
            <Col md={12}>
              <h5> Lý do đặt lịch hẹn/ khám chữa bệnh</h5>
              <TextField
                fullWidth
                multiline
                rows={12}
                placeholder="Nhập ghi chú cho lịch hẹn của bạn"
                variant="outlined"
              />
            </Col>
          </Row>
          <Row className="justify-content-center mb-5">
            <Col md={6} className="text-center">
              <Button type="submit" disabled={isSubmitting} variant="primary">
                Gửi thông tin
              </Button>
            </Col>
          </Row>
        </FormProvider>
      </div>
    </Page>
  );
};

export default AppointmentAdd;
