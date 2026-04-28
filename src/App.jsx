const SwordIcon = ({ style = {}, className = '' }) => (
  <svg viewBox="0 0 40 80" fill="none" xmlns="http://www.w3.org/2000/svg" style={style} className={className} aria-hidden="true">
    <polygon points="20,2 16,52 24,52" fill="currentColor"/>
    <rect x="6" y="52" width="28" height="4" rx="2" fill="currentColor"/>
    <rect x="18" y="56" width="4" height="14" rx="2" fill="currentColor"/>
    <ellipse cx="20" cy="73" rx="5" ry="5" fill="currentColor"/>
  </svg>
)

const services = [
  { title: 'Brand Identity', desc: 'Logo, color systems, typography, and guidelines — built to hold up everywhere your brand shows up.' },
  { title: 'Content Creation', desc: 'Copy, visuals, and campaigns crafted to cut through. Clear messaging that sounds like you.' },
  { title: 'Digital Marketing', desc: 'Paid and organic strategy that converts. We build the funnel, run the tests, and report the truth.' },
  { title: 'Web & Landing Pages', desc: 'Fast, clean, and conversion-optimized. Built with your stack or ours — shipped on time.' },
  { title: 'Creative Strategy', desc: 'Direction before execution. We map your position, your voice, and the story that moves your market.' },
  { title: 'AI Integration', desc: 'Practical AI applied to your workflows. Smarter content, faster ops, and tools that actually get used.' },
]

const pillars = [
  { numeral: 'I', name: 'SHARP', desc: 'Precise creative work. No filler, no bloat. Every decision earns its place.' },
  { numeral: 'II', name: 'SWIFT', desc: 'We move fast without cutting corners. Get it done, get it right, get it out.' },
  { numeral: 'III', name: 'READY', desc: "Always on. We come prepared so you don't have to wait." },
]

export default function App() {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif', overflowX: 'hidden' }}>

      {/* NAV */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, background: 'rgba(255,255,255,0.93)', backdropFilter: 'blur(10px)', borderBottom: '1px solid rgba(45,90,61,0.1)', padding: '0 2rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <SwordIcon style={{ width: '14px', height: '28px', color: '#2D5A3D' }} />
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.25em', fontWeight: 500, color: '#2D5A3D' }}>MUSKETEER</span>
          </div>
          <div style={{ display: 'flex', gap: '2rem' }}>
            {['About','Pillars','Services','Musketeer AI'].map(link => (
              <a key={link} href={`#${link.toLowerCase().replace(' ','-')}`} style={{ fontSize: '0.7rem', letterSpacing: '0.15em', color: 'rgba(45,90,61,0.55)', textDecoration: 'none' }}>{link}</a>
            ))}
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ background: '#2D5A3D', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '7rem 2rem 4rem' }}>
        <SwordIcon style={{ width: '36px', height: '72px', color: 'white', opacity: 0.85, marginBottom: '2rem' }} />
        <h1 style={{ fontFamily: '"Cormorant Garamond", serif', color: 'white', fontWeight: 300, fontSize: 'clamp(3rem,10vw,8.5rem)', letterSpacing: '0.35em', lineHeight: 1, margin: 0 }}>MUSKETEER</h1>
        <p style={{ fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic', color: 'rgba(255,255,255,0.45)', fontSize: 'clamp(1.1rem,2.5vw,1.75rem)', marginTop: '1.5rem' }}>En Garde.</p>
        <div style={{ marginTop: '3rem', display: 'flex', gap: '1rem' }}>
          <button style={{ background: 'white', color: '#2D5A3D', border: 'none', padding: '0.75rem 2rem', fontSize: '0.7rem', letterSpacing: '0.18em', fontWeight: 500, cursor: 'pointer' }}>Work With Us</button>
          <button style={{ background: 'transparent', color: 'rgba(255,255,255,0.65)', border: '1px solid rgba(255,255,255,0.3)', padding: '0.75rem 2rem', fontSize: '0.7rem', letterSpacing: '0.18em', fontWeight: 500, cursor: 'pointer' }}>See Our Work</button>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section id="about" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '60vh' }}>
        <div style={{ background: '#2D5A3D', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '5rem 3.5rem' }}>
          <h2 style={{ fontFamily: '"Cormorant Garamond", serif', color: 'white', fontWeight: 300, fontSize: 'clamp(1.8rem,3.5vw,3.2rem)', lineHeight: 1.3, maxWidth: '20rem', margin: 0 }}>
            Sharp creative.<br/>Fast execution.<br/>Always ready.
          </h2>
        </div>
        <div style={{ background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '5rem 3.5rem' }}>
          <div style={{ maxWidth: '26rem' }}>
            <span style={{ fontSize: '0.6rem', letterSpacing: '0.3em', fontWeight: 500, color: 'rgba(45,90,61,0.5)', marginBottom: '1.25rem', display: 'block' }}>OUR STORY</span>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.85, color: 'rgba(45,90,61,0.72)', marginBottom: '1rem' }}>Musketeer is a creative agency built on one principle — show up ready. We move fast, think sharp, and execute clean. No fluff. No delays. No second guessing.</p>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.85, color: 'rgba(45,90,61,0.72)', marginBottom: '1rem' }}>Three founders. One standard. You call it, we draw.</p>
            <p style={{ fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic', color: 'rgba(45,90,61,0.45)', fontSize: '1rem' }}>All for one.</p>
          </div>
        </div>
      </section>

      {/* PROBLEM & SOLUTION */}
      <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '60vh' }}>
        <div style={{ background: '#2D5A3D', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '5rem 3.5rem' }}>
          <div style={{ maxWidth: '24rem' }}>
            <span style={{ fontSize: '0.6rem', letterSpacing: '0.3em', fontWeight: 500, color: 'rgba(255,255,255,0.45)', marginBottom: '1.25rem', display: 'block' }}>THE PROBLEM</span>
            <h2 style={{ fontFamily: '"Cormorant Garamond", serif', color: 'white', fontWeight: 300, fontSize: 'clamp(1.6rem,3vw,2.8rem)', lineHeight: 1.3, marginBottom: '1.5rem' }}>Most agencies make you fit their process.</h2>
            <p style={{ fontSize: '0.88rem', lineHeight: 1.85, color: 'rgba(255,255,255,0.58)' }}>They show up with their own templates and aesthetic. You spend weeks onboarding. The result feels generic, takes forever, and costs too much.</p>
          </div>
        </div>
        <div style={{ background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '5rem 3.5rem' }}>
          <div style={{ maxWidth: '24rem', borderLeft: '2px solid #2D5A3D', paddingLeft: '2rem' }}>
            <span style={{ fontSize: '0.6rem', letterSpacing: '0.3em', fontWeight: 500, color: 'rgba(45,90,61,0.5)', marginBottom: '1.25rem', display: 'block' }}>THE SOLUTION</span>
            <h2 style={{ fontFamily: '"Cormorant Garamond", serif', color: '#2D5A3D', fontWeight: 300, fontSize: 'clamp(1.6rem,3vw,2.8rem)', lineHeight: 1.3, marginBottom: '1.5rem' }}>We fit yours.</h2>
            <p style={{ fontSize: '0.88rem', lineHeight: 1.85, color: 'rgba(45,90,61,0.65)', marginBottom: '1.25rem' }}>We enter your world first. We study your brand, your code, your guidelines — then talk to your leaders to understand what actually drives the business.</p>
            <em style={{ fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic', color: '#2D5A3D', fontSize: '1rem' }}>Sharp, informed creative that fits like it was always there.</em>
          </div>
        </div>
      </section>

      {/* THREE PILLARS */}
      <section id="pillars" style={{ background: '#f5f4f0', padding: '6rem 2rem', textAlign: 'center' }}>
        <span style={{ fontSize: '0.6rem', letterSpacing: '0.32em', fontWeight: 500, color: 'rgba(45,90,61,0.45)', marginBottom: '1rem', display: 'block' }}>WHAT WE STAND FOR</span>
        <h2 style={{ fontFamily: '"Cormorant Garamond", serif', color: '#2D5A3D', fontWeight: 300, fontSize: 'clamp(2rem,5vw,4.5rem)', letterSpacing: '0.06em', marginBottom: '4.5rem' }}>THE THREE PILLARS</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '3rem', maxWidth: '58rem', margin: '0 auto' }}>
          {pillars.map(({ numeral, name, desc }) => (
            <div key={name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{ fontFamily: '"Cormorant Garamond", serif', color: 'rgba(45,90,61,0.1)', fontWeight: 300, fontSize: '5.5rem', lineHeight: 1 }}>{numeral}</span>
              <p style={{ fontSize: '0.65rem', letterSpacing: '0.22em', fontWeight: 500, color: '#2D5A3D', marginTop: '0.75rem', marginBottom: '1rem' }}>{name}</p>
              <p style={{ fontSize: '0.85rem', lineHeight: 1.8, color: 'rgba(45,90,61,0.55)', maxWidth: '16rem' }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ background: '#2D5A3D', padding: '6rem 2rem' }}>
        <div style={{ maxWidth: '70rem', margin: '0 auto' }}>
          <span style={{ fontSize: '0.6rem', letterSpacing: '0.32em', fontWeight: 500, color: 'rgba(255,255,255,0.45)', marginBottom: '1rem', display: 'block', textAlign: 'center' }}>WHAT WE DO</span>
          <h2 style={{ fontFamily: '"Cormorant Garamond", serif', color: 'white', fontWeight: 300, fontSize: 'clamp(2rem,5vw,4.5rem)', letterSpacing: '0.1em', marginBottom: '4rem', textAlign: 'center' }}>SERVICES</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.25rem' }}>
            {services.map(({ title, desc }) => (
              <div key={title} style={{ border: '1px solid rgba(255,255,255,0.18)', padding: '2rem' }}>
                <h3 style={{ fontFamily: '"Cormorant Garamond", serif', color: 'white', fontWeight: 300, fontSize: '1.4rem', marginBottom: '0.75rem' }}>{title}</h3>
                <p style={{ fontSize: '0.82rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.52)' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MUSKETEER AI */}
      <section id="musketeer-ai" style={{ background: 'white', padding: '6rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ maxWidth: '48rem', textAlign: 'center' }}>
          <span style={{ fontSize: '0.6rem', letterSpacing: '0.32em', fontWeight: 500, color: 'rgba(45,90,61,0.45)', marginBottom: '1rem', display: 'block' }}>OUR PRODUCT</span>
          <h2 style={{ fontFamily: '"Cormorant Garamond", serif', color: '#2D5A3D', fontWeight: 300, fontSize: 'clamp(2rem,5vw,4rem)', marginBottom: '1.5rem' }}>Musketeer AI</h2>
          <p style={{ fontSize: '0.95rem', lineHeight: 1.85, color: 'rgba(45,90,61,0.65)', marginBottom: '2.5rem' }}>We don't just build for clients — we build for ourselves. Musketeer AI is our own brand-aware creative assistant, built on Claude and trained to think like a creative director.</p>
          <div style={{ background: '#f5f4f0', borderLeft: '2px solid #2D5A3D', padding: '1.5rem 2rem', textAlign: 'left', marginBottom: '2.5rem' }}>
            <p style={{ fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic', color: '#2D5A3D', fontSize: '1.05rem', lineHeight: 1.7, margin: 0 }}>"You are Musketeer — a sharp, brand-aware creative AI. Confident, direct, and clear. You think like a creative director and communicate like a strategist. Stay Sharp."</p>
          </div>
          <button style={{ background: '#2D5A3D', color: 'white', border: 'none', padding: '0.85rem 2.5rem', fontSize: '0.7rem', letterSpacing: '0.18em', fontWeight: 500, cursor: 'pointer' }}>Try Musketeer AI</button>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: 'white', padding: '6rem 2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', borderTop: '1px solid rgba(45,90,61,0.08)' }}>
        <SwordIcon style={{ width: '2.5rem', height: '5rem', color: 'rgba(45,90,61,0.07)', marginBottom: '2rem' }} />
        <p style={{ fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic', color: '#2D5A3D', fontWeight: 300, fontSize: 'clamp(2rem,6vw,5rem)', margin: 0 }}>Stay Sharp.</p>
        <div style={{ width: '5rem', height: '1px', background: 'rgba(45,90,61,0.2)', margin: '2.5rem 0' }} />
        <p style={{ fontSize: '0.6rem', letterSpacing: '0.3em', color: 'rgba(45,90,61,0.45)', marginBottom: '1rem' }}>MUSKETEER CREATIVE AGENCY</p>
        <a href="mailto:hello@musketeer.co" style={{ fontSize: '0.85rem', color: 'rgba(45,90,61,0.4)', textDecoration: 'none', letterSpacing: '0.04em' }}>hello@musketeer.co</a>
        <p style={{ marginTop: '2.5rem', fontSize: '0.7rem', letterSpacing: '0.15em', color: 'rgba(45,90,61,0.3)' }}>Noah Woods · Jonathan · Hayden Erwin</p>
      </footer>

    </div>
  )
}
