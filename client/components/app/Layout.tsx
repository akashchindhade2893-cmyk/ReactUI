import { Outlet, useLocation } from "react-router-dom";
import { useState } from "react";
import { Header } from "./Header";
import { Sidebar, NavItems } from "./Sidebar";
import { Sheet, SheetContent } from "@/components/ui/sheet";

export default function DashboardLayout() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
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
        <Header title={title} onMenuClick={() => setOpen(true)} />
        <div className="mx-auto w-full max-w-7xl p-4 md:p-6">
          <Outlet />
        </div>
      </main>

      {/* Mobile Drawer */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left" className="w-72 p-0">
          <div className="flex h-16 items-center gap-2 border-b px-4">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand text-white font-bold">H</div>
            <div className="leading-tight">
              <div className="font-semibold text-slate-800">HealthTrack</div>
              <div className="text-xs text-slate-500">Patient Portal</div>
            </div>
          </div>
          <NavItems />
        </SheetContent>
      </Sheet>
    </div>
  );
}
