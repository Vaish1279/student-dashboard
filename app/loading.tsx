export default function Loading() {
  return (
    <main className="min-h-screen bg-zinc-950 p-6">
      <div className="animate-pulse space-y-6">
        <div className="h-32 rounded-3xl bg-zinc-900" />
        <div className="grid gap-6 md:grid-cols-2">
          <div className="h-48 rounded-3xl bg-zinc-900" />
          <div className="h-48 rounded-3xl bg-zinc-900" />
          <div className="h-48 rounded-3xl bg-zinc-900" />
          <div className="h-48 rounded-3xl bg-zinc-900" />
        </div>
      </div>
    </main>
  );
}