import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

// Eager loaded components (components được sử dụng thường xuyên)
import Healthcare from "../components/user/Healthcare/Healthcare";
import Home from "../components/user/Home/Home";
import Patients from "../components/user/Patients/Patients";
import AddPatient from "../components/user/AddPatient/AddPatient";
import PatientDetail from "../components/user/PatientDetail/PatientDetail";
import Appointments from "../components/user/Appointments/Appointments";
import PatientRecordsDetail from "../components/user/PatientRecordsDetail/PatientRecordsDetail";
import Cure from "../components/user/Cure/Cure";
import Department from "../components/admin/Deparment/Deparment";

// Lazy loaded components
const LoginSignUp = lazy(() => import("../page/LoginSignup"));
const Information = lazy(() => import("../page/Information"));
const Admin = lazy(() => import("../page/Admin"));
const User = lazy(() => import("../page/User"));
const Patient = lazy(() => import("../page/home/index"));

const AdminComponents = {
  Overview: lazy(() => import("../components/admin/Overview/Overview")),
  Setting: lazy(() => import("../components/admin/Setting/Setting")),
  Staff: lazy(() => import("../components/admin/Staff/Staff")),
  AddStaff: lazy(() => import("../components/admin/AddStaff/AddStaff")),
  AddAccount: lazy(() => import("../components/admin/AddAccount/AddAccount")),
  EditStaff: lazy(() => import("../components/admin/EditStaff/EditStaff")),
  Accounts: lazy(() => import("../components/admin/Accounts/Accounts")),
  HealthIndicators: lazy(() => import("../components/admin/HealthIndicators/HealthIndicators")),
  Chart: lazy(() => import("../components/admin/Chart/Chart")),
  Symptoms: lazy(() => import("../components/admin/Symptoms/Symptoms")),
  History: lazy(() => import("../components/admin/History/History")),
};

const UserComponents = {
  Record: lazy(() => import("../components/user/Record/Record")),
  FaceRecognition: lazy(() => import("../components/user/FaceRecognition/FaceRecognition")),
};

// Loading component
const LoadingFallback = () => <div>Loading...</div>;

// HOC để wrap Suspense
const withSuspense = (Component) => (
  <Suspense fallback={<LoadingFallback />}>
    <Component />
  </Suspense>
);

// Admin routes configuration
const adminRoutes = [
  { index: true, element: <AdminComponents.Overview /> },
  { path: "setting", element: <AdminComponents.Setting /> },
  { path: "staff", element: <AdminComponents.Staff /> },
  { path: "departments", element: <Department /> },
  { path: "add-staff", element: <AdminComponents.AddStaff /> },
  { path: "add-account", element: <AdminComponents.AddAccount /> },
  { path: "edit-staff/:staff_id", element: <AdminComponents.EditStaff /> },
  { path: "account", element: <AdminComponents.Accounts /> },
  { path: "health-indicators", element: <AdminComponents.HealthIndicators /> },
  { path: "chart", element: <AdminComponents.Chart /> },
  { path: "symptoms", element: <AdminComponents.Symptoms /> },
  { path: "history", element: <AdminComponents.History /> },
];

// User routes configuration
const userRoutes = [
  { path: "home", element: <Home /> },
  { path: "medical-records/:patient_id", element: <UserComponents.Record /> },
  { path: "patient-records-detail/:patientRecordsId", element: <PatientRecordsDetail /> },
  { path: "cure/:patientRecordsId", element: <Cure /> },
  { path: "patient-records/:patient_records_id", element: <PatientRecordsDetail /> },
  { path: "face-recognition", element: <UserComponents.FaceRecognition /> },
  { path: "appointments", element: <Appointments /> },
  { path: "healthcare", element: <Healthcare /> },
  { path: "patients", element: <Patients /> },
  { path: "patients/:patientId", element: <PatientDetail /> },
  { path: "add-patient", element: <AddPatient /> },
];

// Main router configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: withSuspense(Patient),
  },
  {
    path: "/login",
    element: withSuspense(LoginSignUp),
  },
  {
    path: "/admin",
    element: withSuspense(Admin),
    children: adminRoutes.map(route => ({
      ...route,
      element: withSuspense(() => route.element)
    })),
  },
  {
    path: "/user",
    element: withSuspense(User),
    children: userRoutes.map(route => ({
      ...route,
      element: withSuspense(() => route.element)
    })),
  },
  {
    path: "infor",
    element: withSuspense(Information),
  },
]);

export default router;
