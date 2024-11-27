import { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import Page from '../../../common/components/Page';
import FormProvider from '../../../common/components/hook-form/FormProvider';
import RHFTextField from '../../../common/components/hook-form/RHFTextField';
import { useForm } from 'react-hook-form';
import RHFSelect from '../../../common/components/hook-form/RHFSelect';
import { MenuItem } from '@mui/material';

const VitalSignForm = () => {
  const methods = useForm();
  const { control } = methods;
  const [formData, setFormData] = useState({
    weight: '',
    systolicBP: '',
    diastolicBP: '',
    temperature: '',
    height: '',
    bmi: '',
    pulse: '',
    heartRate: '',
    urineOutput: '',
    bloodPressureR: '',
    bloodPressureL: '',
    spo2: '',
    avpu: '',
    injuryLevel: '',
    movementAbility: '',
    oxygenSupplement: '',
    note: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic here, such as calling an API
    console.log('Submitted Data:', formData);
  };

  return (
    <Page>
      <div className="p-2">
        <FormProvider onSubmit={handleSubmit} methods={methods}>
          <h3 className="mb-4 fw-bold">Vital sign</h3>

          <Row className="mb-3">
            <Col md={4}>
              <RHFTextField
                name={'weight'}
                label="Cân nặng (KG)"
                placeholder="Cân nặng (KG)"
                value={formData.weight}
                onChange={handleChange}
              />
            </Col>
            <Col md={4}>
              <RHFTextField
                name="systolicBP"
                value={formData.systolicBP}
                onChange={handleChange}
                placeholder="Huyết áp tâm thu"
                label={'Huyết áp tâm thu'}
              />
            </Col>
            <Col md={4}>
              <RHFTextField
                name="temperature"
                value={formData.temperature}
                onChange={handleChange}
                placeholder="Nhiệt độ"
                label="Nhiệt độ (C)"
              />
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={4}>
              <RHFTextField
                name="diastolicBP"
                value={formData.diastolicBP}
                onChange={handleChange}
                placeholder="Huyết áp tâm trương"
                label="Huyết áp tâm trương"
              />
            </Col>
            <Col md={4}>
              <RHFTextField
                name="height"
                value={formData.height}
                onChange={handleChange}
                placeholder="Chiều cao"
                label="Chiều cao"
              />
            </Col>
            <Col md={4}>
              <RHFTextField
                name="bmi"
                value={formData.bmi}
                onChange={handleChange}
                placeholder="BMI"
                label="BMI"
              />
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={4}>
              <RHFTextField
                name="pulse"
                value={formData.pulse}
                onChange={handleChange}
                placeholder="Nhip thở"
                label="Nhip thở"
              />
            </Col>
            <Col md={4}>
              <RHFTextField
                name="heartRate"
                value={formData.heartRate}
                onChange={handleChange}
                placeholder="Nhip tim"
                label="Nhip tim"
              />
            </Col>
            <Col md={4}>
              <RHFTextField
                name="urineOutput"
                value={formData.urineOutput}
                onChange={handleChange}
                placeholder="Lượng nước tiểu"
                label="Lượng nước tiểu"
              />
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={4}>
              <RHFTextField
                name="bloodPressureR"
                value={formData.bloodPressureR}
                onChange={handleChange}
                placeholder="Đường huyết (R)"
                label="Đường huyết (R)"
              />
            </Col>
            <Col md={4}>
              <RHFTextField
                name="bloodPressureL"
                value={formData.bloodPressureL}
                onChange={handleChange}
                placeholder="Đường huyết (L)"
                label="Đường huyết (L)"
              />
            </Col>
            <Col md={4}>
              <RHFTextField
                name="spo2"
                value={formData.spo2}
                onChange={handleChange}
                placeholder="SPO2"
                label="SPO2"
              />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col md={4}>
              <RHFSelect name="avpu" label={'AVPU'} SelectProps={{ native: false }}>
                <MenuItem value="A">A - Alert</MenuItem>
                <MenuItem value="V">V - Voice</MenuItem>
                <MenuItem value="P">P - Pain</MenuItem>
                <MenuItem value="U">U - Unresponsive</MenuItem>
              </RHFSelect>
            </Col>
            <Col md={4}>
              <RHFSelect name="injuryLevel" label={'Chấn thương'} SelectProps={{ native: false }}>
                <MenuItem value={''}>Không có</MenuItem>
                <MenuItem value="minor">Nhẹ</MenuItem>
                <MenuItem value="moderate">Vừa</MenuItem>
                <MenuItem value="severe">Nặng</MenuItem>
              </RHFSelect>
            </Col>
            <Col md={4}>
              <RHFSelect
                name="movementAbility"
                label={'Khả năng vận động'}
                SelectProps={{ native: false }}
              >
                <MenuItem value="good">Tốt</MenuItem>
                <MenuItem value="average">Trung bình</MenuItem>
                <MenuItem value="poor">Kém</MenuItem>
              </RHFSelect>
            </Col>
          </Row>
          <Form.Group controlId="note">
            <Form.Label>Ghi chú</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="note"
              value={formData.note}
              onChange={handleChange}
              placeholder="Ghi chú"
            />
          </Form.Group>

          <div className="mt-4 text-end">
            <Button
              variant="primary"
              type="submit"
              className="fw-bold"
              style={{ minWidth: '150px' }}
            >
              Lưu lại
            </Button>
            <Button
              variant="outline-secondary"
              className="ms-3 fw-bold"
              type="button"
              style={{ minWidth: '100px' }}
            >
              Hủy
            </Button>
          </div>
        </FormProvider>
      </div>
    </Page>
  );
};

export default VitalSignForm;
