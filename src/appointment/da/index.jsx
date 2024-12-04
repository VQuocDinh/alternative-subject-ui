import Page from '../../common/components/Page';
import '../add/index.css';
import FormProvider from '../../common/components/hook-form/FormProvider';

import { useForm } from 'react-hook-form';



const DoctorAvailability = () => {

  const methods = useForm();
  const handleSubmit = () => {};


  return (
    <Page>
      <div className="p-2">
        <FormProvider onSubmit={handleSubmit} methods={methods}>
          <h3 className="mb-4 fw-bold">Lịch khám bệnh</h3>
          
        </FormProvider>
      </div>
    </Page>
  );
};

export default DoctorAvailability;
