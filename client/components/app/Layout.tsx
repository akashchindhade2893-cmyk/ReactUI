import { Outlet, useLocation } from "react-router-dom";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

export default function DashboardLayout() {
  const location = useLocation();
  const titles: Record<string, string> = {
    "/": "Dashboard Overview",
    "/appointments": "Appointments",
    "/medications": "Medications",
    "/records": "Health Records",
  };
  const title = titles[location.pathname] ?? "Dashboard";

  return (
    <div className="flex h-screen bg-slate-50 text-slate-900">
      <Sidebar />
      <main className="flex min-w-0 flex-1 flex-col">
        <Header title={title} />
        <div className="mx-auto w-full max-w-7xl p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
