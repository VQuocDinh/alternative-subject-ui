import MiniSidebar from '../common/components/MiniSidebar';
import PrescriptionForm from './components/PrescriptionForm';

const DoctorPrescription = () => {
  return (
    <div className="w-100 h-100 d-flex flex-row gap-3 ">
      <div className="" style={{ width: '20%' }}>
        <MiniSidebar />
      </div>
      <div className="w-100 d-flex gap-4 flex-column" style={{ marginBottom: '100px' }}>
        <PrescriptionForm />
      </div>
    </div>
  );
};

export default DoctorPrescription;
