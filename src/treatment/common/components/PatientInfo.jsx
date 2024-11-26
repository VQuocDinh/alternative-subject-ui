import Page from '../../../common/components/Page';

const PatientInfo = () => {
  return (
    <Page>
      <div className="w-100 justify-content-center align-items-center">
        <div className="d-flex flex-row justify-content-evenly align-items-center">
          <div className="d-flex flex-row gap-4 align-items-center">
            <h6 className="m-0">Mã bệnh nhân:</h6>
            <h6 className="m-0" style={{ color: '#FF4842' }}>
              045202007362
            </h6>
          </div>
          <div className="d-flex flex-row gap-4 align-items-center">
            <h6 className="m-0">Tên bệnh nhân:</h6>
            <h6 className="m-0" style={{ color: '#FF4842' }}>
              Vo Quoc Dinh
            </h6>
          </div>
          <div className="d-flex flex-row gap-4 align-items-center">
            <h6 className="m-0">Tuổi:</h6>
            <h6 className="m-0" style={{ color: '#FF4842' }}>
              23
            </h6>
          </div>
          <div
            className=""
            style={{
              width: '80px',
              height: '80px',
              backgroundColor: '#ccc',
              borderRadius: '12px',
              overflow: 'hidden',
            }}
          ></div>
        </div>
      </div>
    </Page>
  );
};

export default PatientInfo;
