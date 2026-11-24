import { Sparkles } from 'lucide-react';

export default function Story() {
  return <section className="story-section" id="story">
    <div className="story-art reveal"><Sparkles className="story-sun" aria-hidden="true"/><div className="story-type">MASALA<br/><em>MADE</em><br/>MATTER.</div><div className="story-stamp">FULL<br/>OF FLAVOUR</div><span className="story-side-note">A SNACK WITH SOMETHING TO SAY</span></div>
    <div className="story-copy reveal"><p className="eyebrow">NOT YOUR AVERAGE FRY</p><h2>A LITTLE<br/>DESI. A LOT<br/><em>DELICIOUS.</em></h2>
      <p>We believe fries deserve more than a side-character moment. So we bring the crunch, bring the masala, and let you choose your level of fire.</p>
      <div className="values">
        <div><Sparkles aria-hidden="true"/><b>THE CRUNCH</b><small>Golden outside, fluffy inside.</small></div>
        <div><Sparkles aria-hidden="true"/><b>THE MASALA</b><small>A bold, savoury flavour hit.</small></div>
        <div><Sparkles aria-hidden="true"/><b>YOUR CALL</b><small>Classic or custom. You decide.</small></div>
      </div>
    </div>
  </section>;
}
