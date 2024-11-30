import { useForm } from 'react-hook-form';
import FormProvider from '../../../common/components/hook-form/FormProvider';
import Page from '../../../common/components/Page';
import { Button, Col, Form, Row } from 'react-bootstrap';
import RHFSelect from '../../../common/components/hook-form/RHFSelect';
import { MenuItem } from '@mui/material';
import RHFTextField from '../../../common/components/hook-form/RHFTextField';

const PrescriptionForm = () => {
  const methods = useForm();
  const handleSubmit = () => {};

  return (
    <Page>
      <div className="p-2">
        <FormProvider onSubmit={handleSubmit} methods={methods}>
          <h3 className="mb-4 fw-bold">Kê đơn thuốc</h3>
          <Row className="mb-3">
            <Col md={8}>
              <RHFSelect name="pharmacity" label={'Cửa hàng thuốc'} SelectProps={{ native: false }}>
                <MenuItem value="good">Cửa hàng thuốc 1</MenuItem>
                <MenuItem value="average">Cửa hàng thuốc 2</MenuItem>
                <MenuItem value="poor">Cửa hàng thuốc 3</MenuItem>
              </RHFSelect>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col md={12}>
              <RHFTextField name="prescription" placeholder="Thuốc" label="Thuốc" />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col md={6}>
              <Row className="align-items-center">
                <Col md={2}>
                  <h5
                    className="fw-bold text-nowrap m-0"
                    style={{ fontSize: '16px', lineHeight: '24px' }}
                  >
                    Số lượng
                  </h5>
                </Col>
                <Col md={4}>
                  <RHFTextField name="quantity" placeholder="Số lượng" />
                </Col>
                <Col md={4}>
                  <RHFSelect name="form" SelectProps={{ native: false }}>
                    <MenuItem value="A">A - Alert</MenuItem>
                    <MenuItem value="V">V - Voice</MenuItem>
                    <MenuItem value="P">P - Pain</MenuItem>
                    <MenuItem value="U">U - Unresponsive</MenuItem>
                  </RHFSelect>
                </Col>
              </Row>
            </Col>
            <Col md={6}>
              <Row className="align-items-center">
                <Col md={4}>
                  <h5
                    className="fw-bold text-nowrap m-0"
                    style={{ fontSize: '16px', lineHeight: '24px' }}
                  >
                    Tần suất sử dụng
                  </h5>
                </Col>
                <Col md={8}>
                  <RHFSelect name="frequency" SelectProps={{ native: false }}>
                    <MenuItem value="A">A - Alert</MenuItem>
                    <MenuItem value="V">V - Voice</MenuItem>
                    <MenuItem value="P">P - Pain</MenuItem>
                    <MenuItem value="U">U - Unresponsive</MenuItem>
                  </RHFSelect>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col md={6}>
              <Row className="align-items-center">
                <Col md={2}>
                  <h5
                    className="fw-bold text-nowrap m-0"
                    style={{ fontSize: '16px', lineHeight: '24px' }}
                  >
                    Số ngày
                  </h5>
                </Col>
                <Col md={4}>
                  <RHFTextField name="quantity" placeholder="Số ngày" />
                </Col>
                <Col md={4}>
                  <RHFSelect name="form" SelectProps={{ native: false }}>
                    <MenuItem value="A">A - Alert</MenuItem>
                    <MenuItem value="V">V - Voice</MenuItem>
                    <MenuItem value="P">P - Pain</MenuItem>
                    <MenuItem value="U">U - Unresponsive</MenuItem>
                  </RHFSelect>
                </Col>
              </Row>
            </Col>
            <Col md={6}>
              <Row className="align-items-center">
                <Col md={4}>
                  <h5
                    className="fw-bold text-nowrap m-0"
                    style={{ fontSize: '16px', lineHeight: '24px' }}
                  >
                    Tần suất sử dụng
                  </h5>
                </Col>
                <Col md={8}>
                  <RHFSelect name="frequency" SelectProps={{ native: false }}>
                    <MenuItem value="A">A - Alert</MenuItem>
                    <MenuItem value="V">V - Voice</MenuItem>
                    <MenuItem value="P">P - Pain</MenuItem>
                    <MenuItem value="U">U - Unresponsive</MenuItem>
                  </RHFSelect>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="mb-3 align-items-center">
            <Col md={3}>
              <h5
                className="fw-bold text-nowrap m-0"
                style={{ fontSize: '16px', lineHeight: '24px' }}
              >
                Đường sử dụng
              </h5>
            </Col>
            <Col md={2}>
              <RHFSelect name="form" SelectProps={{ native: false }}>
                <MenuItem value="A">A - Alert</MenuItem>
                <MenuItem value="V">V - Voice</MenuItem>
                <MenuItem value="P">P - Pain</MenuItem>
                <MenuItem value="U">U - Unresponsive</MenuItem>
              </RHFSelect>
            </Col>
          </Row>
          <Row>
            <Col md={3}>
              <h5
                className="fw-bold text-nowrap m-0"
                style={{ fontSize: '16px', lineHeight: '24px' }}
              >
                Chỉ dẫn
              </h5>
            </Col>
            <Col md={6}>
              <Form.Group controlId="note">
                <Form.Control as="textarea" rows={1} name="note" placeholder="Ghi chú" />
              </Form.Group>
            </Col>
          </Row>
          <div className="mt-4 text-end">
            <Button
              variant="primary"
              type="submit"
              className="fw-bold"
              style={{ minWidth: '150px' }}
            >
              Thêm thuốc
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

export default PrescriptionForm;
