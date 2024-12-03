import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Card, Row, Col, Button, Form, Badge, Alert, Tab, Nav } from 'react-bootstrap';
import FormProvider from '../../common/components/hook-form/FormProvider';
import RHFTextField from '../../common/components/hook-form/RHFTextField';
import RHFSelect from '../../common/components/hook-form/RHFSelect';
import RHFDatePicker from '../../common/components/hook-form/RHFDatePicker';
import { MenuItem } from '@mui/material';
import Page from '../../common/components/Page';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const PatientForm = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('basic');

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required('Vui lòng nhập họ tên'),
    dateOfBirth: Yup.date().required('Vui lòng chọn ngày sinh'),
    gender: Yup.string().required('Vui lòng chọn giới tính'),
    identityNumber: Yup.string()
      .matches(/^[0-9]+$/, 'CMND/CCCD chỉ được chứa số')
      .min(9, 'CMND/CCCD phải có ít nhất 9 số')
      .max(12, 'CMND/CCCD không được quá 12 số'),

    phone: Yup.string()
      .matches(/^[0-9]+$/, 'Số điện thoại chỉ được chứa số')
      .min(10, 'Số điện thoại phải có ít nhất 10 số')
      .required('Vui lòng nhập số điện thoại'),
    email: Yup.string().email('Email không hợp lệ'),
    address: Yup.string().required('Vui lòng nhập địa chỉ'),

    bloodType: Yup.string(),
    height: Yup.number().positive('Chiều cao phải là số dương'),
    weight: Yup.number().positive('Cân nặng phải là số dương'),
    allergies: Yup.string(),
    chronicDiseases: Yup.string(),
  });

  const methods = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      fullName: '',
      dateOfBirth: null,
      gender: '',
      identityNumber: '',
      phone: '',
      email: '',
      address: '',
      province: '',
      district: '',
      ward: '',
      bloodType: '',
      height: '',
      weight: '',
      allergies: '',
      chronicDiseases: '',
      emergencyContact: '',
      emergencyPhone: '',
      insuranceNumber: '',
      insuranceProvider: '',
      insuranceExpiry: null,
    },
  });

  const {
    handleSubmit,
    formState: { errors, isSubmitting },
  } = methods;

  const onSubmit = async (data) => {
    try {
      console.log('Form data:', data);
      // await savePatient(data);
      // toast.success('Thêm bệnh nhân thành công');
      // navigate('/patients');
    } catch (error) {
      console.error('Error saving patient:', error);
      toast.error('Có lỗi xảy ra khi lưu thông tin');
    }
  };

  const genderOptions = [
    { value: 'male', label: 'Nam' },
    { value: 'female', label: 'Nữ' },
    { value: 'other', label: 'Khác' },
  ];

  const bloodTypeOptions = [
    { value: 'A+', label: 'A+' },
    { value: 'A-', label: 'A-' },
    { value: 'B+', label: 'B+' },
    { value: 'B-', label: 'B-' },
    { value: 'O+', label: 'O+' },
    { value: 'O-', label: 'O-' },
    { value: 'AB+', label: 'AB+' },
    { value: 'AB-', label: 'AB-' },
  ];

  return (
    <Page title="Thêm Bệnh Nhân Mới">
      <div className="p-4">
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Card>
            <Card.Header className="bg-primary text-white">
              <h4 className="mb-0">Thêm Bệnh Nhân Mới</h4>
            </Card.Header>
            <Card.Body>
              <Tab.Container activeKey={activeTab} onSelect={setActiveTab}>
                <Nav variant="tabs" className="mb-4">
                  <Nav.Item>
                    <Nav.Link eventKey="basic" className="d-flex align-items-center">
                      <i className="fas fa-user me-2"></i>
                      Thông tin cơ bản
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="contact" className="d-flex align-items-center">
                      <i className="fas fa-address-book me-2"></i>
                      Thông tin liên hệ
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="medical" className="d-flex align-items-center">
                      <i className="fas fa-notes-medical me-2"></i>
                      Thông tin y tế
                    </Nav.Link>
                  </Nav.Item>
                </Nav>

                <Tab.Content>
                  <Tab.Pane eventKey="basic">
                    <Row className="mb-4">
                      <Col md={6}>
                        <RHFTextField
                          name="fullName"
                          label="Họ và tên *"
                          placeholder="Nhập họ và tên"
                        />
                      </Col>
                      <Col md={6}>
                        <RHFDatePicker
                          name="dateOfBirth"
                          label="Ngày sinh *"
                          placeholder="DD/MM/YYYY"
                        />
                      </Col>
                    </Row>

                    <Row className="mb-4">
                      <Col md={6}>
                        <RHFSelect
                          name="gender"
                          label="Giới tính *"
                          SelectProps={{ native: false }}
                        >
                          {genderOptions.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </RHFSelect>
                      </Col>
                      <Col md={6}>
                        <RHFTextField
                          name="identityNumber"
                          label="CMND/CCCD"
                          placeholder="Nhập số CMND/CCCD"
                        />
                      </Col>
                    </Row>
                  </Tab.Pane>

                  <Tab.Pane eventKey="contact">
                    <Row className="mb-4">
                      <Col md={6}>
                        <RHFTextField
                          name="phone"
                          label="Số điện thoại *"
                          placeholder="Nhập số điện thoại"
                        />
                      </Col>
                      <Col md={6}>
                        <RHFTextField name="email" label="Email" placeholder="Nhập địa chỉ email" />
                      </Col>
                    </Row>

                    <Row className="mb-4">
                      <Col md={12}>
                        <RHFTextField
                          name="address"
                          label="Địa chỉ *"
                          placeholder="Nhập địa chỉ chi tiết"
                        />
                      </Col>
                    </Row>

                    <Row className="mb-4">
                      <Col md={6}>
                        <RHFTextField
                          name="emergencyContact"
                          label="Người liên hệ khẩn cấp"
                          placeholder="Nhập tên người liên hệ"
                        />
                      </Col>
                      <Col md={6}>
                        <RHFTextField
                          name="emergencyPhone"
                          label="SĐT liên hệ khẩn cấp"
                          placeholder="Nhập số điện thoại"
                        />
                      </Col>
                    </Row>
                  </Tab.Pane>

                  <Tab.Pane eventKey="medical">
                    <Row className="mb-4">
                      <Col md={4}>
                        <RHFSelect
                          name="bloodType"
                          label="Nhóm máu"
                          SelectProps={{ native: false }}
                        >
                          {bloodTypeOptions.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </RHFSelect>
                      </Col>
                      <Col md={4}>
                        <RHFTextField
                          name="height"
                          label="Chiều cao (cm)"
                          type="number"
                          placeholder="Nhập chiều cao"
                        />
                      </Col>
                      <Col md={4}>
                        <RHFTextField
                          name="weight"
                          label="Cân nặng (kg)"
                          type="number"
                          placeholder="Nhập cân nặng"
                        />
                      </Col>
                    </Row>

                    <Row className="mb-4">
                      <Col md={12}>
                        <RHFTextField
                          name="allergies"
                          label="Dị ứng"
                          multiline
                          rows={2}
                          placeholder="Liệt kê các dị ứng (nếu có)"
                        />
                      </Col>
                    </Row>

                    <Row className="mb-4">
                      <Col md={12}>
                        <RHFTextField
                          name="chronicDiseases"
                          label="Bệnh mãn tính"
                          multiline
                          rows={2}
                          placeholder="Liệt kê các bệnh mãn tính (nếu có)"
                        />
                      </Col>
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>

              <div className="d-flex justify-content-end gap-2 mt-4">
                <Button variant="primary" type="submit" disabled={isSubmitting} className="px-4">
                  {isSubmitting ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" />
                      Đang lưu...
                    </>
                  ) : (
                    'Lưu thông tin'
                  )}
                </Button>
                <Button
                  variant="outline-secondary"
                  type="button"
                  className="px-4"
                  onClick={() => {
                    navigate(-1);
                  }}
                >
                  Hủy
                </Button>
              </div>
            </Card.Body>
          </Card>
        </FormProvider>
      </div>
    </Page>
  );
};

export default PatientForm;
