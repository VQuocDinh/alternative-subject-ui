import { Outlet } from 'react-router-dom';
import Navbar from './navbar/Navbar';

const DashboardLayout = () => {
  return (
    <div className="admin w-100 d-flex flex-column align-items-center">
      <div className="d-block w-100 mx-auto">
        <Navbar />
      </div>
      <div className="content rounded-3 bg-[#eee]" style={{ width: '90%' }}>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
