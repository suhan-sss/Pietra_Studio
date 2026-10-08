export default function Loading() {
  return (
    <section className="pt-36 md:pt-52 pb-32 min-h-[60vh] bg-cream">
      <div className="mx-auto max-w-[1480px] px-5 md:px-10 text-center">
        <div className="label mb-4">Pietra</div>
        <div className="serif text-7xl md:text-9xl tracking-tightest mb-6 inline-block">
          <span className="inline-block animate-pulse">·</span>
          <span className="inline-block animate-pulse" style={{ animationDelay: "0.2s" }}>·</span>
          <span className="inline-block animate-pulse" style={{ animationDelay: "0.4s" }}>·</span>
        </div>
        <p className="text-charcoal/65">Preparing the room…</p>
      </div>
    </section>
  );
}
