export function Placeholder({ title, description }: { title: string; description?: string }) {
  return (
    <div className="grid h-[60vh] place-items-center rounded-xl border bg-white shadow-card">
      <div className="text-center">
        <h2 className="text-lg font-semibold text-slate-800">{title}</h2>
        {description ? (
          <p className="mt-2 max-w-md text-sm text-slate-500">{description}</p>
        ) : null}
      </div>
    </div>
  );
}
