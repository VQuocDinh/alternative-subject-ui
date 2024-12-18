import { lazy, Suspense } from 'react';
import { useRoutes, Navigate } from 'react-router-dom'; // Import Navigate
import { PATH_AUTHENTICATION, PATH_DASHBOARD, PATH_HOME } from './path';
import PatientPrescription from '../../page/patient-prescription';
import HomeLayout from '../layout/HomeLayout';
import Home from '../../page/home';
import Dashboard from '../../page/dashboard';
import './spinner.css'; // Import the CSS file for the spinner
import { useSelector } from '../redux/store'; // Import useSelector

const Spinner = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <div className="spinner"></div>
  </div>
);

// HOC tạo Router
const withRoutes = (routes) => {
  return function RouterComponent() {
    const isAuthenticated = useSelector((state) => state.oauth.isAuthenticated); // Get authentication state
    const routing = useRoutes(routes(isAuthenticated)); // Call routes with isAuthenticated

    return <Suspense fallback={<Spinner />}>{routing}</Suspense>;
  };
};
const DoctorAvailability = lazy(() => import('../../appointment/da'));
const AppointmentCalendar = lazy(() => import('../../appointment/calendar'));
const AppoimentAdd = lazy(() => import('../../appointment/add'));

// Auth
const LoginSignUp = lazy(() => import('../../auth/LoginSignup'));
const OAuthContainer = lazy(() => import('../../oauth')); // Lazy load OAuthContainer
const LoginOAuth = lazy(() => import('../../oauth/component/Login')); // Lazy load LoginOAuth

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
const PrescribeContainer = lazy(() => import('../../treatment/prescribe'));
const PrescriptionContainer = lazy(() => import('../../treatment/prescription'));
const ScheduleMedicine = lazy(() => import('../../treatment/medication-schedule'));
const DiagnosisContainer = lazy(() => import('../../treatment/diagnosis'));

const routes = (isAuthenticated) => [
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
      { path: PATH_AUTHENTICATION.oauthLogin, element: <OAuthContainer /> }, // New route for OAuth login
      { path: PATH_AUTHENTICATION.oauth, element: <LoginOAuth /> },
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
            path: PATH_DASHBOARD.treatment.detailPrescription,
            element: <DetailPrescriptionHistoryContainer />,
          },
          {
            path: PATH_DASHBOARD.treatment.scheduleMedicine,
            element: <ScheduleMedicine />,
          },
          {
            path: PATH_DASHBOARD.treatment.prescribe,
            element: <PrescribeContainer />,
          },
          {
            path: PATH_DASHBOARD.treatment.overview,
            element: <Overview />,
          },
          {
            path: PATH_DASHBOARD.treatment.diagnosis,
            element: <DiagnosisContainer />,
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
          {
            path: PATH_DASHBOARD.appointment.calendar,
            element: <AppointmentCalendar />,
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
        element: isAuthenticated ? (
          <PatientPrescription />
        ) : (
          <Navigate to={PATH_AUTHENTICATION.oauthLogin} />
        ),
      },
      {
        path: PATH_HOME.prescription.detail,
        element: isAuthenticated ? (
          <PrescriptionDetail />
        ) : (
          <Navigate to={PATH_AUTHENTICATION.oauthLogin} />
        ),
      },
      {
        path: PATH_HOME.appointment.root,
        element: isAuthenticated ? (
          <AppointmentCalendar />
        ) : (
          <Navigate to={PATH_AUTHENTICATION.oauthLogin} />
        ),
      },
    ],
  },
];

const AppRouter = withRoutes(routes);
export default AppRouter;
