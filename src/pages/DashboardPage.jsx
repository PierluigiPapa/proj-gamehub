import { Navbar } from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";

export function DashboardPage() {
  useEffect(() => {
    document.body.classList.add("dashboard-body");

    return () => {
      document.body.classList.remove("dashboard-body");
    };
  }, []);

  return (
    <>
      <Navbar />
      <div className="dashboard-content">
        <Outlet />
      </div>
    </>
  );
}
