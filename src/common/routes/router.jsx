import { lazy, Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import { PATH_AUTHENTICATION, PATH_DASHBOARD, PATH_HOME } from './path';
import PatientPrescription from '../../page/patient-prescription';
import HomeLayout from '../layout/HomeLayout';
import Home from '../../page/home';

// HOC tạo Router
const withRoutes = (routes) => {
  return function RouterComponent() {
    const routing = useRoutes(routes);

    return <Suspense fallback={<div>Loading...</div>}>{routing}</Suspense>;
  };
};

// Lazy loaded components
const LoginSignUp = lazy(() => import('../../page/login/LoginSignup'));

// Management patient
const ListPatient = lazy(() => import('../../manage-patient/list'));

// Prescription
const Prescription = lazy(() => import('../../page/prescription'));
const PrescriptionDetail = lazy(() => import('../../page/prescription/prescription-detail'));

// Layout
const DashboardLayout = lazy(() => import('../layout/DashboardLayout'));

// Treatment
const TreatmentCommonContainer = lazy(() => import('../../treatment/index'));
const VitalSignContainer = lazy(() => import('../../treatment/vital-sign'));
const PrescriptionHistoryContainer = lazy(() => import('../../treatment/prescription-history'));
const DetailPrescriptionHistoryContainer = lazy(
  () => import('../../treatment/detail-prescription-history')
);

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
        path: PATH_DASHBOARD.manage_patient.root,
        children: [
          {
            path: PATH_DASHBOARD.manage_patient.list,
            element: <ListPatient />,
          },
          {
            path: PATH_DASHBOARD.manage_patient.add,
            element: <div>add patient</div>,
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
        ],
      },
      // Prescription route
      {
        path: PATH_DASHBOARD.prescription.root,
        children: [
          {
            path: PATH_DASHBOARD.prescription.list,
            element: <Prescription />,
          },
          {
            path: PATH_DASHBOARD.prescription.add,
            element: <div>add patient</div>,
          },
          {
            path: PATH_DASHBOARD.prescription.detail + '/:id',
            element: <DetailPrescriptionHistoryContainer />,
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
        path: PATH_HOME.prescription.detail + '/:id',
        element: <PrescriptionDetail />,
      },
    ],
  },
];

const AppRouter = withRoutes(routes);
export default AppRouter;
