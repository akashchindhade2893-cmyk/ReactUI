import { NavLink } from "react-router-dom";
import { CalendarDays, FileText, LayoutDashboard, Pill } from "lucide-react";

const navItemClasses = ({ isActive }: { isActive: boolean }) =>
  [
    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
    isActive
      ? "bg-brand-soft text-brand shadow-sm"
      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900",
  ].join(" ");

export function Sidebar() {
  return (
    <aside className="h-full w-64 shrink-0 border-r bg-white/80 backdrop-blur-sm">
      <div className="flex h-16 items-center gap-2 border-b px-4">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand text-white font-bold">H</div>
        <div className="leading-tight">
          <div className="font-semibold text-slate-800">HealthTrack</div>
          <div className="text-xs text-slate-500">Patient Portal</div>
        </div>
      </div>
      <nav className="p-3 space-y-1">
        <NavLink to="/" className={navItemClasses} end>
          <LayoutDashboard className="h-4 w-4" />
          Dashboard
        </NavLink>
        <NavLink to="/appointments" className={navItemClasses}>
          <CalendarDays className="h-4 w-4" />
          Appointments
        </NavLink>
        <NavLink to="/medications" className={navItemClasses}>
          <Pill className="h-4 w-4" />
          Medications
        </NavLink>
        <NavLink to="/records" className={navItemClasses}>
          <FileText className="h-4 w-4" />
          Records
        </NavLink>
      </nav>
    </aside>
  );
}
