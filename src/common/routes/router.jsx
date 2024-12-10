import { lazy, Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import { PATH_AUTHENTICATION, PATH_DASHBOARD, PATH_HOME } from './path';
import PatientPrescription from '../../page/patient-prescription';
import HomeLayout from '../layout/HomeLayout';
import Home from '../../page/home';
import Dashboard from '../../page/dashboard';
import './spinner.css'; // Import the CSS file for the spinner

const Spinner = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <div className="spinner"></div>
  </div>
);

// HOC tạo Router
const withRoutes = (routes) => {
  return function RouterComponent() {
    const routing = useRoutes(routes);

    return <Suspense fallback={<Spinner />}>{routing}</Suspense>;
  };
};
const DoctorAvailability = lazy(() => import('../../appointment/da'));

const AppoimentAdd = lazy(() => import('../../appointment/add'));
// Lazy loaded components
const LoginSignUp = lazy(() => import('../../page/login/LoginSignup'));

// Management patient
const ListPatient = lazy(() => import('../../manage-patient/list'));
const AddPatient = lazy(() => import('../../manage-patient/add-patient'));

// Prescription
// const Prescription = lazy(() => import('../../page/prescription'));
const PrescriptionDetail = lazy(
  () => import('../../page/patient-prescription/prescription-detail')
);

// Layout
const DashboardLayout = lazy(() => import('../layout/DashboardLayout'));

// Treatment
const TreatmentCommonContainer = lazy(() => import('../../treatment/index'));
const MedicalRecord = lazy(() => import('../../treatment/medical-record'));
const Overview = lazy(() => import('../../treatment/overview/index'));
const VitalSignContainer = lazy(() => import('../../treatment/vital-sign'));
const PrescriptionHistoryContainer = lazy(() => import('../../treatment/prescription'));
const DetailPrescriptionHistoryContainer = lazy(
  () => import('../../treatment/detail-prescription')
);
const PrescriptionContainer = lazy(() => import('../../treatment/prescribe'));

const routes = [
  // auth
  {
    path: PATH_AUTHENTICATION.root,
    children: [
      { path: PATH_AUTHENTICATION.login, element: <LoginSignUp /> },
      {
        path: PATH_AUTHENTICATION.logout,
        element: <div>logout</div>,
      },
      { path: PATH_AUTHENTICATION.register, element: <div>register</div> },
    ],
  },

  // dashboard
  {
    path: PATH_DASHBOARD.root,
    element: <DashboardLayout />,
    children: [
      {
        path: PATH_DASHBOARD.overview.root,
        element: <Dashboard />,
      },
      {
        path: PATH_DASHBOARD.manage_patient.root,
        children: [
          {
            path: PATH_DASHBOARD.manage_patient.list,
            element: <ListPatient />,
          },
          {
            path: PATH_DASHBOARD.manage_patient.add,
            element: <AddPatient />,
          },
          {
            path: PATH_DASHBOARD.manage_patient.edit + '/:id',
            element: <div>eit patient</div>,
          },
        ],
      },
      {
        path: PATH_DASHBOARD.treatment.root,
        children: [
          {
            path: PATH_DASHBOARD.treatment.common,
            element: <TreatmentCommonContainer />,
          },
          {
            path: PATH_DASHBOARD.treatment.medicalRecord,
            element: <MedicalRecord />,
          },
          {
            path: PATH_DASHBOARD.treatment.vitalSign,
            element: <VitalSignContainer />,
          },
          {
            path: PATH_DASHBOARD.treatment.prescriptionHistory,
            element: <PrescriptionHistoryContainer />,
          },
          {
            path: PATH_DASHBOARD.treatment.detailPrescriptionHistory,
            element: <DetailPrescriptionHistoryContainer />,
          },
          {
            path: PATH_DASHBOARD.treatment.prescription,
            element: <PrescriptionContainer />,
          },
          {
            path: PATH_DASHBOARD.treatment.overview,
            element: <Overview />,
          },
        ],
      },
      // Prescription route
      {
        path: PATH_DASHBOARD.prescription.root,
        children: [
          {
            path: PATH_DASHBOARD.prescription.add,
            element: <div>add patient</div>,
          },
          {
            path: PATH_DASHBOARD.prescription.detail,
            element: <DetailPrescriptionHistoryContainer />,
          },
        ],
      },
      {
        path: PATH_DASHBOARD.appointment.root,
        children: [
          {
            path: PATH_DASHBOARD.appointment.add,
            element: <AppoimentAdd />,
          },
          {
            path: PATH_DASHBOARD.appointment.da,
            element: <DoctorAvailability />,
          },
        ],
      },
    ],
  },

  // root
  {
    path: PATH_HOME.root,
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: PATH_HOME.prescription.root,
        element: <PatientPrescription />,
      },
      {
        path: PATH_HOME.prescription.detail,
        element: <PrescriptionDetail />,
      },
    ],
  },
];

const AppRouter = withRoutes(routes);
export default AppRouter;
