import { Outlet } from 'react-router-dom';
import Sidebar from './sidebar/Sidebar';

const DashboardLayout = () => {
  return (
    <div className="admin w-100 d-flex p-3">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="content w-90 rounded-3 bg-[#eee]">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
