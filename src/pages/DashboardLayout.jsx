import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { FooterDashboard } from "../components/FooterDashboard";

export function DashboardLayout() {
  
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 dashboard-content p-6">
        <Outlet />
      </main>
      
      <FooterDashboard />
    </div>
  );
}