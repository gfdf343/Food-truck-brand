import { Sparkles } from 'lucide-react';

export default function Brand() {
  return <a className="brand" href="#home" aria-label="Masala Fries home">
    <span className="brand-mark">MF<Sparkles aria-hidden="true"/></span>
    <span className="brand-name">MASALA<br/><i>FRIES</i></span>
  </a>;
}
