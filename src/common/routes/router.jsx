import { lazy, Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import { PATH_AUTHENTICATION, PATH_DASHBOARD } from './path';

// HOC tạo Router
const withRoutes = (routes) => {
  return function RouterComponent() {
    const routing = useRoutes(routes);

    return <Suspense fallback={<div>Loading...</div>}>{routing}</Suspense>;
  };
};
const AppoimentAdd = lazy(() => import('../../appointment/add'));
// Lazy loaded components
const LoginSignUp = lazy(() => import('../../page/LoginSignup'));

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

const routes = [
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
        ],
      },
      // Prescripption route
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
            element: <PrescriptionDetail />,
          },
        ],
      },
      {
        path: PATH_DASHBOARD.appointment.root,
        children: [
          {
            path: PATH_DASHBOARD.appointment.add,
            element: <AppoimentAdd />,
          }
        ]
      }
    ],
  },
];

const AppRouter = withRoutes(routes);
export default AppRouter;
