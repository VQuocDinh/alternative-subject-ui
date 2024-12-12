import { useState } from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import {
  TableContainer,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Paper,
  Box,
} from '@mui/material';
import { searchDisease } from '@/common/utils/common.utils';
import useToast from '@/common/hooks/useToast';
import MiniSidebar from '../common/components/MiniSidebar';
import axiosInstance from '@/common/utils/axios';
import Page from '@/common/components/Page';
import FormProvider from '@/common/components/hook-form/FormProvider';
import RHFTextField from '@/common/components/hook-form/RHFTextField';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

// Define Yup schema
const validationSchema = yup.object().shape({
  searchTerm: yup.string().required('Search term is required'),
});

const DiagnosisContainer = () => {
  const methods = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      searchTerm: '',
    },
  });
  const { handleSubmit, watch, setValue, register } = methods;
  const [diseases, setDiseases] = useState([]);
  const [selectedDiseases, setSelectedDiseases] = useState([]);
  const { showToast, Toast } = useToast();

  const handleSearch = async () => {
    const searchTerm = watch('searchTerm');
    try {
      const result = await searchDisease(
        '/home/xeu/Documents/university/mon-thay-the/source/alternative-subject-ui/src/common/constant/icd10cm_codes_2022.json',
        searchTerm
      );
      console.log('Search Result:', result);
      if (result) {
        setDiseases([result]);
      } else {
        setDiseases([]);
      }
    } catch (error) {
      showToast('error', 'Error searching diseases!');
      console.error('Error searching diseases:', error);
    }
  };

  const handleAddDisease = (disease) => {
    setSelectedDiseases([...selectedDiseases, disease]);
  };

  const handleSubmitForm = async (data) => {
    try {
      const response = await axiosInstance.post(`${API_DIAGNOSIS}/submit`, {
        diseases: selectedDiseases,
      });
      showToast('success', 'Submitted successfully!');
      console.log('Submitted Data:', response.data);
    } catch (error) {
      showToast('error', 'Error submitting data!');
      console.error('Error submitting data:', error);
    }
  };

  return (
    <div className="w-100 h-100 d-flex flex-row gap-3 ">
      <div className="" style={{ width: '20%' }}>
        <MiniSidebar />
      </div>
      <div className="w-100 d-flex gap-4 flex-column" style={{ marginBottom: '100px' }}>
        <Page>
          <FormProvider onSubmit={handleSubmit(handleSubmitForm)} methods={methods}>
            <h3 className="mb-4 fw-bold">Diagnosis</h3>
            <Row className="mb-3">
              <Col md={12}>
                <RHFTextField
                  name="searchTerm"
                  label="Search Disease"
                  placeholder="Enter disease name"
                />
              </Col>
            </Row>
            <Button variant="primary" onClick={handleSearch}>
              Search
            </Button>
          </FormProvider>

          <TableContainer component={Paper} className="mt-3">
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Disease Name</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {diseases.map((disease) => (
                  <TableRow key={disease[0]}>
                    <TableCell>{disease[1]}</TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        color="success"
                        onClick={() => handleAddDisease(disease)}
                      >
                        Add
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <h3>Selected Diseases</h3>
          <TableContainer component={Paper} className="mt-3">
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Disease Name</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {selectedDiseases.map((disease, index) => (
                  <TableRow key={index}>
                    <TableCell>{disease[1]}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Box textAlign="right" className="mt-3">
            <Button variant="contained" color="primary" onClick={handleSubmit(handleSubmitForm)}>
              Submit
            </Button>
          </Box>
          <Toast />
        </Page>
      </div>
    </div>
  );
};

export default DiagnosisContainer;
