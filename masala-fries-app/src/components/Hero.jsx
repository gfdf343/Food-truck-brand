import { ArrowDown, ArrowUpRight, Star } from 'lucide-react';

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
      <div className="hero-proof"><span><Star size={13} fill="currentColor"/> FULL-ON FLAVOUR</span><span>✳</span><span>MADE FOR THE CRUNCH</span></div>
    </div>
    <div className="hero-art" aria-label="Illustration of golden fries">
      <div className="orbit orbit-one"/><div className="orbit orbit-two"/>
      <span className="art-spark spark-one">✳</span><span className="art-spark spark-two">✦</span>
      <span className="art-sticker sticker-left">CRISPY<br/><b>OUTSIDE</b></span>
      <span className="art-sticker sticker-right">SPICY<br/><b>INSIDE ✦</b></span>
      <div className="fries-cup">
        <div className="fries-sticks">{Array.from({length:13},(_,i)=><i key={i}/>)}</div>
        <div className="cup-sleeve">MASALA<br/><strong>FRIES</strong><small>✳ HOT STUFF ✳</small></div>
      </div>
      <span className="art-caption">THE GOOD STUFF.</span>
    </div>
    <div className="hero-bottomline"><span>MADE TO CRAVE</span><b>✳</b><span>BUILT FOR THE CRUNCH</span><b>✳</b><span>MASALA MAGIC</span></div>
  </section>;
}
