import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_70%_20%,rgba(147,197,253,0.35),transparent_60%)]" />
      <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-semibold tracking-tight"
          >
            Minimal aesthetics. 
            <span className="block text-black/60">Precision craft.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 text-black/70 leading-relaxed max-w-prose"
          >
            A personal portfolio inspired by the quiet elegance of Kyoto — calm layouts,
            crisp typography, and subtle motion.
          </motion.p>
          <div className="mt-8 flex gap-3">
            <a href="#work" className="px-5 py-2.5 bg-black text-white rounded-md text-sm">View Work</a>
            <a href="#contact" className="px-5 py-2.5 border border-black/20 rounded-md text-sm">Contact</a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] w-full rounded-xl overflow-hidden border border-black/10 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.4)]">
            <div className="absolute inset-0 bg-gradient-to-br from-white via-white/60 to-transparent" />
            <img src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=1400&auto=format&fit=crop" alt="Kyoto vibes" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
