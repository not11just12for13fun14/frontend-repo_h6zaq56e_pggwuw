import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState(null)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      // Placeholder submit - extend with backend later
      await new Promise(r => setTimeout(r, 800))
      setStatus('Thanks! I\'ll get back to you soon.')
      setForm({ name: '', email: '', message: '' })
    } catch (e) {
      setStatus('Something went wrong.')
    }
  }

  return (
    <section id="contact" className="py-24">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-2xl font-semibold tracking-tight">Get in touch</h2>
        <form onSubmit={submit} className="mt-8 grid gap-4">
          <input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Name" className="px-4 py-3 rounded-md border border-black/10 bg-white/70 backdrop-blur outline-none focus:ring-2 ring-black/10" />
          <input type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="Email" className="px-4 py-3 rounded-md border border-black/10 bg-white/70 backdrop-blur outline-none focus:ring-2 ring-black/10" />
          <textarea value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder="Message" rows={5} className="px-4 py-3 rounded-md border border-black/10 bg-white/70 backdrop-blur outline-none focus:ring-2 ring-black/10" />
          <button className="justify-self-start px-5 py-2.5 bg-black text-white rounded-md text-sm">Send</button>
          {status && <p className="text-sm text-black/70">{status}</p>}
        </form>
      </div>
    </section>
  )
}
