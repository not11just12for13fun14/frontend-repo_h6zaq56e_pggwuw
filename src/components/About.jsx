export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-semibold tracking-tight">About</h2>
        <p className="mt-6 text-black/70 leading-relaxed max-w-3xl">
          I design and build thoughtful digital products with a focus on clarity and calm.
          My practice blends interaction design, front‑end engineering, and brand craft.
        </p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {["Design Systems","Interfaces","Web Apps"].map((t,i)=> (
            <div key={t} className="rounded-xl border border-black/10 p-6 bg-white/60 backdrop-blur">
              <div className="text-sm uppercase tracking-wide text-black/50">Specialty {i+1}</div>
              <div className="mt-2 text-lg font-medium">{t}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
