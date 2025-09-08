import { HeartPulse, Gauge, Scale, Syringe, Check, Clock } from "lucide-react";

function Metric({ icon: Icon, label, value, bgClass }: { icon: any; label: string; value: string; bgClass: string }) {
  return (
    <div className="rounded-xl border bg-white shadow-card">
      <div className={`flex items-center gap-3 rounded-t-xl ${bgClass} px-4 py-3 text-white`}>
        <div className="rounded-md bg-white/20 p-2">
          <Icon className="h-5 w-5" />
        </div>
        <span className="text-sm/5 font-medium">{label}</span>
      </div>
      <div className="px-5 pb-4 pt-3">
        <div className="text-2xl font-bold text-slate-800">{value}</div>
      </div>
    </div>
  );
}

function MedicationItem({ name, dose, time, status, tone }: { name: string; dose?: string; time: string; status: "Taken" | "Pending"; tone: string }) {
  const badge = status === "Taken" ? (
    <span className="inline-flex items-center gap-1 rounded-md bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-700"><Check className="h-3 w-3" />Taken</span>
  ) : (
    <span className="inline-flex items-center gap-1 rounded-md bg-amber-50 px-2 py-1 text-xs font-medium text-amber-700"><Clock className="h-3 w-3" />Pending</span>
  );
  return (
    <div className={`rounded-lg border ${tone} px-4 py-3`}>      
      <div className="flex items-center justify-between">
        <div>
          <div className="font-medium text-slate-800">{name}</div>
          <div className="text-xs text-slate-500">{dose ? `${dose} • ` : ""}{time}</div>
        </div>
        {badge}
      </div>
    </div>
  );
}

function Card({ title, children, right }: { title: string; children: React.ReactNode; right?: React.ReactNode }) {
  return (
    <section className="rounded-xl border bg-white shadow-card">
      <div className="flex items-center justify-between px-5 py-3">
        <h2 className="text-sm font-semibold text-slate-700">{title}</h2>
        {right}
      </div>
      <div className="px-5 pb-5">{children}</div>
    </section>
  );
}

export default function Index() {
  return (
    <div className="space-y-6">
      {/* Health Metrics */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Metric icon={HeartPulse} label="Heart Rate" value="72 BPM" bgClass="bg-[hsl(var(--metric-heart))]" />
        <Metric icon={Gauge} label="Blood Pressure" value="120/80" bgClass="bg-[hsl(var(--metric-bp))]" />
        <Metric icon={Scale} label="Weight" value="165 lbs" bgClass="bg-[hsl(var(--metric-weight))]" />
        <Metric icon={Syringe} label="Blood Sugar" value="95 mg/dL" bgClass="bg-[hsl(var(--metric-sugar))]" />
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Card title="Today's Medications" right={<span className="text-xs text-slate-500">Daily Progress <span className="font-medium">1/3</span></span>}>
          <div className="mb-3 h-1.5 w-full rounded-full bg-slate-100">
            <div className="h-full w-1/3 rounded-full bg-brand"></div>
          </div>
          <div className="space-y-3">
            <MedicationItem name="Lisinopril" dose="10mg" time="8:00 AM" status="Taken" tone="bg-emerald-50 border-emerald-100" />
            <MedicationItem name="Blood Pressure" time="12:00 PM" status="Pending" tone="bg-amber-50 border-amber-100" />
            <MedicationItem name="Omega-3" time="6:00 PM" status="Pending" tone="bg-orange-50 border-orange-100" />
          </div>
        </Card>

        <Card title="Upcoming Appointments">
          <div className="space-y-3">
            <div className="flex items-center justify-between rounded-lg border px-4 py-3">
              <div>
                <div className="font-medium text-slate-800">Dr. Johnson</div>
                <div className="text-xs text-slate-500">Cardiology</div>
              </div>
              <div className="text-right text-sm text-slate-600">
                <div>2025-07-28</div>
                <div className="text-xs">10:00 AM</div>
              </div>
            </div>
            <div className="flex items-center justify-between rounded-lg border px-4 py-3">
              <div>
                <div className="font-medium text-slate-800">Dr. Smith</div>
                <div className="text-xs text-slate-500">General</div>
              </div>
              <div className="text-right text-sm text-slate-600">
                <div>2025-08-02</div>
                <div className="text-xs">2:30 PM</div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <Card title="Recent Health Records">
        <div className="divide-y rounded-xl border">
          <div className="flex items-center justify-between px-5 py-4">
            <div>
              <div className="font-medium text-slate-800">Lab Results</div>
              <div className="text-xs text-slate-500">Added by Dr. Smith</div>
            </div>
            <div className="text-right text-sm text-slate-600">
              <div>2025-07-28</div>
              <div className="text-xs">10:00 AM</div>
            </div>
          </div>
          <div className="flex items-center justify-between px-5 py-4">
            <div>
              <div className="font-medium text-slate-800">Prescription</div>
              <div className="text-xs text-slate-500">Added by Dr. Johnson</div>
            </div>
            <div className="text-right text-sm text-slate-600">
              <div>2025-08-02</div>
              <div className="text-xs">2:30 PM</div>
            </div>
          </div>
          <div className="flex items-center justify-between px-5 py-4">
            <div>
              <div className="font-medium text-slate-800">Visit Summary</div>
              <div className="text-xs text-slate-500">Added by Dr. Williams</div>
            </div>
            <div className="text-right text-sm text-slate-600">
              <div>2025-08-09</div>
              <div className="text-xs">9:00 AM</div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
