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

// Lazy loaded components
const LoginSignUp = lazy(() => import('../../page/LoginSignup'));

// Management patient
const ListPatient = lazy(() => import('../../manage-patient/list'));

// Layout
const DashboardLayout = lazy(() => import('../layout/DashboardLayout'));

// Main router configuration
// export default function Router() {
//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       {useRoutes([
//         {
//           path: PATH_AUTHENTICATION.root,
//           children: [
//             { path: PATH_AUTHENTICATION.login, element: <LoginSignUp /> },
//             {
//               path: PATH_AUTHENTICATION.logout,
//               element: <div>logout</div>,
//             },
//             { path: PATH_AUTHENTICATION.register, element: <div>register</div> },
//           ],
//         },
//         {
//           path: PATH_DASHBOARD.root,
//           element: <DashboardLayout />,
//           children: [
//             {
//               path: PATH_DASHBOARD.manage_patient.root,

//               children: [
//                 {
//                   path: PATH_DASHBOARD.manage_patient.list,
//                   element: <ListPatient />,
//                 },
//                 {
//                   path: PATH_DASHBOARD.manage_patient.add,
//                   element: <div>add patient</div>,
//                 },
//                 {
//                   path: PATH_DASHBOARD.manage_patient.edit + '/:id',
//                   element: <div>eit patient</div>,
//                 },
//               ],
//             },
//           ],
//         },
//       ])}
//     </Suspense>
//   );
// }

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
    ],
  },
];

const AppRouter = withRoutes(routes);
export default AppRouter;
