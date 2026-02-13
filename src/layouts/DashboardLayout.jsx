import { Outlet } from "react-router-dom";
import Sidebar from "../components/common/Sidebar";
import Navbar from "../components/common/Navbar";
import "../styles/layout.css";

export default function DashboardLayout() {
  return (
    <div className="layout">
      <Sidebar />

      <div className="layout-content">
        <Navbar />
        <main className="page-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}