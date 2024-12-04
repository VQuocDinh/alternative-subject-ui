import { useState } from 'react';
import { useForm } from 'react-hook-form';
import FormProvider from '../../../common/components/hook-form/FormProvider';
import Page from '../../../common/components/Page';
import { Button, Col, Form, Row, Badge, Card, Table, ButtonGroup } from 'react-bootstrap';
import RHFSelect from '../../../common/components/hook-form/RHFSelect';
import { MenuItem } from '@mui/material';
import RHFTextField from '../../../common/components/hook-form/RHFTextField';
import InteractionModal from './InteractionModal';

const PrescriptionForm = () => {
  const methods = useForm({
    defaultValues: {
      pharmacyId: '',
      drugId: '',
      quantity: '',
      unit: '',
      frequency: '',
      duration: '',
      durationUnit: 'days',
      route: '',
      timing: '',
      instructions: '',
      notes: '',
    },
  });
  const [showInteractionModal, setShowInteractionModal] = useState(false);
  const [drugInteractions, setDrugInteractions] = useState([]);
  const [selectedDrugs, setSelectedDrugs] = useState([]);

  const drugsList = [
    { id: 1, name: 'Paracetamol 500mg', unit: 'viên' },
    { id: 2, name: 'Amoxicillin 500mg', unit: 'viên' },
    { id: 3, name: 'Omeprazole 20mg', unit: 'viên' },
  ];

  const unitOptions = [
    { value: 'tablet', label: 'Viên' },
    { value: 'bottle', label: 'Chai' },
    { value: 'pack', label: 'Gói' },
    { value: 'tube', label: 'Ống' },
  ];

  const frequencyOptions = [
    { value: 'once_daily', label: '1 lần/ngày' },
    { value: 'twice_daily', label: '2 lần/ngày' },
    { value: 'three_daily', label: '3 lần/ngày' },
    { value: 'four_daily', label: '4 lần/ngày' },
    { value: 'when_needed', label: 'Khi cần' },
  ];

  const timingOptions = [
    { value: 'before_meal', label: 'Trước ăn' },
    { value: 'after_meal', label: 'Sau ăn' },
    { value: 'with_meal', label: 'Trong bữa ăn' },
    { value: 'empty_stomach', label: 'Lúc đói' },
    { value: 'anytime', label: 'Không phụ thuộc bữa ăn' },
  ];

  const routeOptions = [
    { value: 'oral', label: 'Uống' },
    { value: 'injection', label: 'Tiêm' },
    { value: 'topical', label: 'Bôi ngoài da' },
    { value: 'inhale', label: 'Hít' },
  ];

  const checkDrugInteractions = async (drugId) => {
    try {
      // const response = await axios.post('/api/check-drug-interactions', {
      //   selectedDrugs,
      //   newDrug: drugId
      // });

      const mockInteractions = [
        {
          severity: 'high',
          description: 'Tương tác nghiêm trọng giữa Drug A và Drug B',
          recommendation: 'Không nên kê đơn đồng thời',
        },
        {
          severity: 'medium',
          description: 'Có thể gây tác dụng phụ khi dùng chung',
          recommendation: 'Cân nhắc điều chỉnh liều lượng',
        },
      ];

      setDrugInteractions(mockInteractions);
      setShowInteractionModal(true);
    } catch (error) {
      console.error('Error checking drug interactions:', error);
    }
  };

  const handleDrugSelect = (drugId) => {
    setSelectedDrugs([...selectedDrugs, drugId]);
    checkDrugInteractions(drugId);
  };

  const handleSubmit = () => {};

  const handleEditDrug = (index) => {};

  const handleDeleteDrug = (index) => {};

  const handleAddDrug = () => {};

  const handleCancel = () => {};

  return (
    <Page>
      <div className="p-4">
        <FormProvider methods={methods} onSubmit={handleSubmit}>
          <Card>
            <Card.Header>
              <h4 className="mb-0">Kê đơn thuốc</h4>
            </Card.Header>
            <Card.Body>
              {/* Chọn thuốc */}
              <Row className="mb-4">
                <Col md={12}>
                  <RHFSelect
                    name="drugId"
                    label="Tên thuốc *"
                    SelectProps={{ native: false }}
                    onChange={(e) => handleDrugSelect(e.target.value)}
                  >
                    <MenuItem value="">Chọn thuốc</MenuItem>
                    {drugsList.map((drug) => (
                      <MenuItem key={drug.id} value={drug.id}>
                        {drug.name}
                      </MenuItem>
                    ))}
                  </RHFSelect>
                </Col>
              </Row>

              <Row className="mb-4">
                <Col md={6}>
                  <RHFTextField
                    name="quantity"
                    label="Số lượng *"
                    type="number"
                    placeholder="Nhập số lượng"
                  />
                </Col>
                <Col md={6}>
                  <RHFSelect
                    name="unit"
                    label="Đơn vị *"
                    SelectProps={{ native: false }}
                  >
                    {unitOptions.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </RHFSelect>
                </Col>
              </Row>

              <Row className="mb-4">
                <Col md={6}>
                  <RHFSelect
                    name="frequency"
                    label="Tần suất sử dụng *"
                    SelectProps={{ native: false }}
                  >
                    {frequencyOptions.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </RHFSelect>
                </Col>
                <Col md={6}>
                  <RHFSelect
                    name="timing"
                    label="Thời điểm dùng *"
                    SelectProps={{ native: false }}
                  >
                    {timingOptions.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </RHFSelect>
                </Col>
              </Row>

              <Row className="mb-4">
                <Col md={6}>
                  <RHFTextField
                    name="duration"
                    label="Thời gian điều trị *"
                    type="number"
                    placeholder="Nhập số ngày"
                  />
                </Col>
                <Col md={6}>
                  <RHFSelect
                    name="route"
                    label="Đường dùng *"
                    SelectProps={{ native: false }}
                  >
                    {routeOptions.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </RHFSelect>
                </Col>
              </Row>

              <Row className="mb-4">
                <Col md={12}>
                  <RHFTextField
                    name="instructions"
                    label="Hướng dẫn sử dụng"
                    multiline
                    rows={2}
                    placeholder="VD: Uống sau khi ăn, không nhai..."
                  />
                </Col>
              </Row>

              <Row className="mb-4">
                <Col md={12}>
                  <RHFTextField
                    name="notes"
                    label="Ghi chú"
                    multiline
                    rows={2}
                    placeholder="Ghi chú thêm về đơn thuốc"
                  />
                </Col>
              </Row>

              {selectedDrugs.length > 0 && (
                <div className="mb-4">
                  <h5 className="mb-3">Thuốc đã kê ({selectedDrugs.length})</h5>
                  <Table responsive bordered hover>
                    <thead>
                      <tr>
                        <th>Tên thuốc</th>
                        <th>Liều dùng</th>
                        <th>Tần suất</th>
                        <th>Thời gian</th>
                        <th>Thao tác</th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedDrugs.map((drug, index) => (
                        <tr key={index}>
                          <td>{drug.name}</td>
                          <td>{`${drug.quantity} ${drug.unit}`}</td>
                          <td>{drug.frequency}</td>
                          <td>{`${drug.duration} ngày`}</td>
                          <td>
                            <ButtonGroup size="sm">
                              <Button 
                                variant="outline-primary"
                                onClick={() => handleEditDrug(index)}
                              >
                                <i className="fas fa-edit"></i>
                              </Button>
                              <Button 
                                variant="outline-danger"
                                onClick={() => handleDeleteDrug(index)}
                              >
                                <i className="fas fa-trash"></i>
                              </Button>
                            </ButtonGroup>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              )}

              <div className="d-flex justify-content-end gap-2">
                <Button
                  variant="primary"
                  type="submit"
                  disabled={selectedDrugs.length === 0}
                >
                  Lưu đơn thuốc
                </Button>
                <Button
                  variant="outline-primary"
                  type="button"
                  onClick={handleAddDrug}
                >
                  Thêm thuốc
                </Button>
                <Button
                  variant="outline-secondary"
                  type="button"
                  onClick={handleCancel}
                >
                  Hủy
                </Button>
              </div>
            </Card.Body>
          </Card>
        </FormProvider>

        <InteractionModal
          showInteractionModal={showInteractionModal}
          setShowInteractionModal={setShowInteractionModal}
          drugInteractions={drugInteractions}
        />
      </div>
    </Page>
  );
};

export default PrescriptionForm;
