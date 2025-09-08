import { Bell, Menu } from "lucide-react";

export function Header({ title, onMenuClick }: { title: string; onMenuClick?: () => void }) {
  return (
    <header className="sticky top-0 z-10 h-16 border-b bg-white/70 backdrop-blur-sm">
      <div className="flex h-full items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <button
            className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 md:hidden"
            aria-label="Open menu"
            onClick={onMenuClick}
          >
            <Menu className="h-5 w-5" />
          </button>
          <h1 className="text-lg font-semibold text-slate-800">{title}</h1>
        </div>
        <div className="flex items-center gap-4">
          <button
            aria-label="Notifications"
            className="relative rounded-full p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-700"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute -right-0 -top-0 h-2 w-2 rounded-full bg-brand"></span>
          </button>
          <div className="flex items-center gap-3">
            <span className="hidden text-sm text-slate-600 md:block">
              Akash Chindhade
            </span>
            <div className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-brand to-blue-400 text-sm font-semibold text-white">
              AC
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
