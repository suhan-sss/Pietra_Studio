import Link from "next/link";

export default function NotFound() {
  return (
    <section className="pt-36 md:pt-52 pb-32 min-h-[80vh] bg-cream">
      <div className="mx-auto max-w-[1480px] px-5 md:px-10">
        <div className="grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 md:col-span-8">
            <div className="label mb-6">Pietra · 404</div>
            <h1 className="serif text-[20vw] md:text-[16rem] leading-[0.85] tracking-tightest">
              Not here.
            </h1>
            <p className="mt-8 max-w-xl text-lg text-charcoal/75 leading-relaxed">
              The page you were looking for has either moved, been retired, or
              never existed. Have a look through the studio instead.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/"
                className="inline-flex items-center gap-3 rounded-full bg-charcoal text-cream px-6 py-3 text-sm font-medium tracking-wider uppercase hover:bg-ink transition-colors"
              >
                Home
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center gap-3 rounded-full border border-charcoal px-6 py-3 text-sm font-medium tracking-wider uppercase hover:bg-charcoal hover:text-cream transition-colors"
              >
                Projects
              </Link>
              <Link
                href="/journal"
                className="inline-flex items-center gap-3 rounded-full border border-charcoal px-6 py-3 text-sm font-medium tracking-wider uppercase hover:bg-charcoal hover:text-cream transition-colors"
              >
                Journal
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
