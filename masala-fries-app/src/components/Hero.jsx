import { ArrowDown, ArrowUpRight, Sparkles, Star } from 'lucide-react';

export default function Hero() {
  return <section className="hero" id="home">
    <div className="hero-copy">
      <p className="eyebrow light">THE FRY THAT BRINGS THE FIRE</p>
      <h1>GOOD<br/>FRIES.<br/><em>GREAT</em><br/><span>SPICE.</span></h1>
      <p className="hero-lead">Golden, crispy fries. A punch of desi masala. Made for the ones who like their snacks with a little personality.</p>
      <div className="hero-actions">
        <a className="button button-gold" href="#menu">Pick your fries <ArrowUpRight size={16}/></a>
        <a className="text-link light-link" href="#story">What's the vibe? <ArrowDown size={14}/></a>
      </div>
      <div className="hero-proof"><span><Star size={13} fill="currentColor"/> FULL-ON FLAVOUR</span><Sparkles aria-hidden="true"/><span>MADE FOR THE CRUNCH</span></div>
    </div>
    <div className="hero-art">
      <img className="hero-photo" src="/masala-fries-hero.png" alt="Crispy golden masala fries served in a paper tray" />
      <Sparkles className="art-spark spark-one" aria-hidden="true"/><Sparkles className="art-spark spark-two" aria-hidden="true"/>
      <span className="art-sticker sticker-left">CRISPY<br/><b>OUTSIDE</b></span>
      <span className="art-sticker sticker-right">SPICY<br/><b>INSIDE</b></span>
      <span className="art-caption">THE GOOD STUFF.</span>
    </div>
    <div className="hero-bottomline"><span>MADE TO CRAVE</span><Sparkles aria-hidden="true"/><span>BUILT FOR THE CRUNCH</span><Sparkles aria-hidden="true"/><span>MASALA MAGIC</span></div>
  </section>;
}
