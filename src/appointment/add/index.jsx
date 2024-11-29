import Page from "../../common/components/Page"
import "../add/index.css"
import FormProvider from '../../common/components/hook-form/FormProvider';
import RHFTextField from '../../common/components/hook-form/RHFTextField';
import RHFSelect from '../../common/components/hook-form/RHFSelect';

import { Form, Button, Row, Col, FormControl, FormLabel } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { FormControlLabel, MenuItem, Radio, RadioGroup, TextField } from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers";


const AppointmentAdd = () => {
  const currentYear = new Date().getFullYear();

    const methods = useForm();
    const { control } = methods;
    const handleSubmit = () => {

    };

    return <Page>
        <div className="p-2">
        <FormProvider onSubmit={handleSubmit} methods={methods}>
            <h3 className="mb-4 fw-bold">Đăng lý lịch hẹn khám</h3>
            
            <Row className="mb-3">
            <h4 className="mb-4 fw-bold"> Chọn</h4>
            <Col md={4}>
              <RHFSelect name="phongkham" label={'Phòng khám'} SelectProps={{ native: false }}>
                <MenuItem value="1">Cơ sở 1</MenuItem>
                <MenuItem value="2">Cơ sở 2</MenuItem>
                <MenuItem value="3">Cơ sở 3</MenuItem>
                <MenuItem value="4">Cơ sở 4</MenuItem>
              </RHFSelect>
            </Col>
            <Col md={4}>
              <RHFSelect name="chuyenkhoa" label={'Chuyên khoa'} SelectProps={{ native: false }}>
                <MenuItem value="1">CK1</MenuItem>
                <MenuItem value="2">CK2</MenuItem>
                <MenuItem value="3">Tai mũi họng</MenuItem>
                <MenuItem value="4">Răng hàm mặt</MenuItem>
              </RHFSelect>
            </Col>
            <Col md={4}>
              <RHFSelect name="bacsi" label={'Bác sĩ'} SelectProps={{ native: false }}>
                <MenuItem value="1">Quoc Dinh</MenuItem>
                <MenuItem value="2">Dinh</MenuItem>
                <MenuItem value="3">Dinh Tien</MenuItem>
                <MenuItem value="4">Tien</MenuItem>
              </RHFSelect>
            </Col>
            </Row>

            <Row className="mb-3">
            <h4 className="mb-4 fw-bold"> Chọn lịch khám</h4>
            <Col>
            <DateTimePicker
                label="Years in descending order"
                maxDate={currentYear}
                openTo="year"
                views={['year', 'month']}
                yearsOrder="desc"
                sx={{ minWidth: 250 }}
              /></Col>
            </Row>

            <Row className="mb-5">
                <h4 className="mb-4 fw-bold"> Thông tin cá nhân</h4>
                <Col md={6}>
                <RHFTextField name="hoten" label={'Họ và tên'} />
                </Col>
                
                <Col md={6}>
                <RHFTextField name="email" label={'Email'} />
                </Col>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group">
                    <FormControlLabel value="female" control={<Radio />} label="Nam" />
                    <FormControlLabel value="male" control={<Radio />} label="Nữ" />
                    <FormControlLabel value="other" control={<Radio />} label="Khác" />
                  </RadioGroup>
            </Row>

            <Row className="mb-5">
            <Col md={6}>
                <RHFTextField name="phone" label={'Số điện thoại'} />
                </Col>
                <Col md={6}>
                <RHFTextField name="location" label={'Địa chỉ'} />
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
              variant="outlined"/>
                </Col>
            </Row>
            <Row className="justify-content-center mb-5">
            <Col md={6} className="text-center">
              <Button type="submit" variant="primary">
                Gửi thông tin
              </Button>
            </Col>
          </Row>
        </FormProvider>
        </div>
    </Page>
}

export default AppointmentAdd;