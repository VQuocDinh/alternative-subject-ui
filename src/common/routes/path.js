function path(root, sublink) {
  return `${root}${sublink}`;
}

const ROOT_AUTH = '/auth';

const ROOT_DASHBOARD = '/dashboard';

const ROOT = '';

export const PATH_AUTHENTICATION = {
  root: ROOT_AUTH,
  login: path(ROOT_AUTH, '/login'),
  logout: path(ROOT_AUTH, '/logout'),
  register: path(ROOT_AUTH, '/register'),
};

export const PATH_DASHBOARD = {
  root: ROOT_DASHBOARD,
  overview: {
    root: path(ROOT_DASHBOARD, '/overview'),
  },
  manage_patient: {
    root: path(ROOT_DASHBOARD, '/manage-patient'),
    list: path(ROOT_DASHBOARD, '/manage-patient/list'),
    add: path(ROOT_DASHBOARD, '/manage-patient/add'),
    edit: path(ROOT_DASHBOARD, '/manage-patient/edit/:id'),
  },
  patient_records: {
    root: path(ROOT_DASHBOARD, '/patient-records'),
    list: path(ROOT_DASHBOARD, '/patient-records/list/:patient_id'),
    add: path(ROOT_DASHBOARD, '/patient-records/add/:patient_id'),
    view: path(ROOT_DASHBOARD, '/patient-records/view/:patient_records_id'),
    edit: path(ROOT_DASHBOARD, '/patient-records/edit/:patient_records_id'),
  },
  appointment: {
    root: path(ROOT_DASHBOARD, '/appointment'),
    list: path(ROOT_DASHBOARD, '/appointment/list'),
    add: path(ROOT_DASHBOARD, '/appointment/add'),
    da: path(ROOT_DASHBOARD, '/appointment/da'),
    edit: path(ROOT_DASHBOARD, '/appointment/edit/:id'),
  },
  schedules: {
    root: path(ROOT_DASHBOARD, '/schedules'),
    list: path(ROOT_DASHBOARD, '/schedules/list'),
    add: path(ROOT_DASHBOARD, '/schedules/add'),
    edit: path(ROOT_DASHBOARD, '/schedules/edit/:id'),
  },
  notification: {
    root: path(ROOT_DASHBOARD, '/notification'),
    list: path(ROOT_DASHBOARD, '/notification/list'),
    add: path(ROOT_DASHBOARD, '/notification/add'),
    edit: path(ROOT_DASHBOARD, '/notification/edit/:id'),
  },
  treatment: {
    root: path(ROOT_DASHBOARD, '/treatment'),
    common: path(ROOT_DASHBOARD, '/treatment/common'),
    medicalRecord: path(ROOT_DASHBOARD, '/treatment/:patientId/medical-record'),
    overview: path(ROOT_DASHBOARD, '/treatment/:patientId/overview'),
    vitalSign: path(ROOT_DASHBOARD, '/treatment/:patientId/vital-sign'),
    diagnosis: path(ROOT_DASHBOARD, '/treatment/:patientId/diagnosis'),
    investigation: path(ROOT_DASHBOARD, '/treatment/:patientId/investigation'),
    prescriptionHistory: path(ROOT_DASHBOARD, '/treatment/:patientId/prescription-history'),
    detailPrescriptionHistory: path(
      ROOT_DASHBOARD,
      '/treatment/:patientId/prescription-history/:prescriptionHistoryId'
    ),
    prescription: path(ROOT_DASHBOARD, '/treatment/:patientId/prescription'),
    detailPrescription: path(ROOT_DASHBOARD, '/treatment/:patientId/prescription/:prescriptionId'),
  },
  prescription: {
    root: path(ROOT_DASHBOARD, '/prescription'),
    list: path(ROOT_DASHBOARD, '/prescription/list'),
    detail: path(ROOT_DASHBOARD, '/prescription/detail'),
    add: path(ROOT_DASHBOARD, '/prescription/add'),
  },
};

export const PATH_HOME = {
  root: ROOT,
  home: path(ROOT, '/home'),
  prescription: {
    root: path(ROOT, '/prescription'),
    detail: path(ROOT, '/prescription/:id'),
  },
};
