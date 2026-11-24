import { useState } from 'react';
import { ArrowUpRight, Menu, Sparkles, X } from 'lucide-react';

export default function Header() {
  const [open, setOpen] = useState(false);
  return <header className="site-header">
    <a className="brand" href="#home" aria-label="Masala Fries home">
      <span className="brand-mark">MF<Sparkles aria-hidden="true"/></span>
      <span className="brand-name">MASALA<br/><i>FRIES</i></span>
    </a>
    <button className="mobile-toggle" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="site-navigation" onClick={() => setOpen(!open)}>
      {open ? <X/> : <Menu/>}
    </button>
    <nav id="site-navigation" className={open ? 'nav nav-open' : 'nav'}>
      <a href="#menu" onClick={() => setOpen(false)}>The menu</a>
      <a href="#story" onClick={() => setOpen(false)}>Our vibe</a>
      <a className="nav-cta" href="#menu" onClick={() => setOpen(false)}>Get your fries <ArrowUpRight size={15}/></a>
    </nav>
  </header>;
}
