import React from 'react';
import { Button, Modal, Alert, Badge } from 'react-bootstrap';

const InteractionModal = ({showInteractionModal, setShowInteractionModal, drugInteractions}) => {
  return (
    <Modal show={showInteractionModal} onHide={() => setShowInteractionModal(false)} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Cảnh báo tương tác thuốc</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {drugInteractions?.map((interaction, index) => (
          <Alert
            key={index}
            variant={interaction.severity === 'high' ? 'danger' : 'warning'}
            className="mb-3"
          >
            <div className="d-flex align-items-center mb-2">
              <h6 className="mb-0 me-2">Mức độ:</h6>
              <Badge bg={interaction.severity === 'high' ? 'danger' : 'warning'}>
                {interaction.severity === 'high' ? 'Nghiêm trọng' : 'Trung bình'}
              </Badge>
            </div>
            <p className="mb-2">
              <strong>Mô tả:</strong> {interaction.description}
            </p>
            <p className="mb-0">
              <strong>Khuyến nghị:</strong> {interaction.recommendation}
            </p>
          </Alert>
        ))}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShowInteractionModal(false)}>
          Đóng
        </Button>
        <Button variant="primary" onClick={() => setShowInteractionModal(false)}>
          Tiếp tục kê đơn
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default InteractionModal;
