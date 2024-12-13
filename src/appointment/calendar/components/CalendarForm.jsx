import { useEffect } from 'react';
import { DialogContent, DialogActions, Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import FormProvider from '@/common/components/hook-form/FormProvider';
import RHFTextField from '@/common/components/hook-form/RHFTextField';
import { useDispatch } from 'react-redux';
import axiosInstance from '@/common/utils/axios';
import { closeModal } from '../calendarSlice';
import { API_DOCTOR_AVAILABILITY } from '@/common/constant/common.constant';

// Define Yup schema
const validationSchema = yup.object().shape({
  start: yup.date().required('Bắt đầu là bắt buộc').typeError('Bắt đầu phải là ngày giờ hợp lệ'),
  end: yup.date().required('Kết thúc là bắt buộc').typeError('Kết thúc phải là ngày giờ hợp lệ'),
});

const CalendarForm = ({ event, range, onCancel, onRefresh }) => {
  const dispatch = useDispatch();
  const methods = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      start: range ? range.start : event.start,
      end: range ? range.end : event.end,
    },
  });

  const { handleSubmit, setValue, reset } = methods;

  useEffect(() => {
    if (range) {
      setValue('start', range.start);
      setValue('end', range.end);
    }
  }, [range, setValue]);

  const onSubmit = async (data) => {
    try {
      await axiosInstance.post(API_DOCTOR_AVAILABILITY, {
        doctor_id: 1, // Replace with actual doctor ID
        day_of_week: data.start,
        start_time: data.start,
        end_time: data.end,
        is_available: true,
      });
      dispatch(closeModal());
      reset();
      onRefresh(); // Recall the API to get the list of availabilities
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  return (
    <FormProvider onSubmit={handleSubmit(onSubmit)} methods={methods}>
      <DialogContent>
        <RHFTextField
          name="start"
          label="Bắt đầu"
          type="datetime-local"
          fullWidth
          margin="normal"
          InputLabelProps={{ shrink: true }}
        />
        <RHFTextField
          name="end"
          label="Kết thúc"
          type="datetime-local"
          fullWidth
          margin="normal"
          InputLabelProps={{ shrink: true }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel}>Hủy</Button>
        <Button type="submit" variant="contained">
          Lưu
        </Button>
      </DialogActions>
    </FormProvider>
  );
};

export default CalendarForm;
