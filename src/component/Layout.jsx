import { Outlet, useLocation } from "react-router-dom";
import Header from "./Home/Header";
import Footer from "./Home/Footer";
import DashboardHeader from "./dashboard/Header";
import DashboardFooter from "./dashboard/Footer";
import Sidebar from "./dashboard/Sidebar";
import { useContext } from "react";
import { MenuContext } from "../context/MenuContext";

const Layout = () => {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith("/admin/dashboard");
  const { activeTab } = useContext(MenuContext)

  return isDashboard ? (
    <div className="min-h-screen bg-gray-50">
      {/* Fixed Sidebar */}
      <div
        className={` bg-[#f9f9f9]
          ${activeTab ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0 md:flex
          fixed top-0 left-0 z-50 w-64 h-screen  shadow-lg flex-col
          transition-transform duration-300 ease-in-out
        `}
      >
        <Sidebar />
      </div>


      {/* Main Content Area with left margin for sidebar */}
      <div className="md:ml-64"> {/* Adjust ml-64 based on your sidebar width */}
        {/* Fixed Header */}
        <div className="sticky top-0 z-20 bg-white shadow-sm">
          <DashboardHeader />
        </div>

        {/* Scrollable Main Content */}
        <main className="p-4">
          <Outlet />
        </main>

        {/* Footer */}
        <div className="sticky top-0 z-20">
          <DashboardFooter />
        </div>
      </div>
    </div>
  ) : (
    <div className="flex flex-col min-h-screen">
      {/* Fixed Header */}
      <div className="flex-shrink-0">
        <Header />
      </div>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Fixed Footer */}
      <div className="flex-shrink-0">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;