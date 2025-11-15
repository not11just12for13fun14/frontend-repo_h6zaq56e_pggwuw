export default function Work() {
  const projects = [
    {
      title: 'Zen Commerce',
      description: 'A minimal ecommerce experience with focus on motion and detail.',
      image: 'https://images.unsplash.com/photo-1760226642567-a5315592c810?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxaZW4lMjBDb21tZXJjZXxlbnwwfDB8fHwxNzYzMjMxNjc5fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    },
    {
      title: 'Quiet Reader',
      description: 'A serene reading app that emphasizes typography and space.',
      image: 'https://images.unsplash.com/photo-1517512006864-7edc3b933137?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Studio Site',
      description: 'Identity and website for a small creative studio in Kyoto.',
      image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop',
    },
  ]

  return (
    <section id="work" className="py-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-semibold tracking-tight">Selected Work</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <a key={p.title} href="#" className="group block overflow-hidden rounded-xl border border-black/10">
              <div className="aspect-video overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5 bg-white/70 backdrop-blur">
                <div className="font-medium">{p.title}</div>
                <p className="text-sm text-black/70 mt-1">{p.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
