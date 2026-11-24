import { useState } from 'react';
import { Check, Flame, Sparkles, ArrowUpRight } from 'lucide-react';

const levels = [
  { name: 'Mild', heat: 1, note: 'A gentle little kick' },
  { name: 'Medium', heat: 2, note: 'The perfect balance' },
  { name: 'Hot', heat: 3, note: 'Bring the heat' }
];

export default function Menu() {
  const [choice, setChoice] = useState('normal');
  const [spice, setSpice] = useState('Medium');
  const [notice, setNotice] = useState('');

  const confirm = () => setNotice(choice === 'normal'
    ? 'Your classic Masala Fries are selected. Golden, crispy, and full of flavour!'
    : `Your custom fries are set to ${spice.toLowerCase()} heat. Bring on the crunch!`);

  return <section className="menu-section section-pad" id="menu">
    <div className="section-heading reveal">
      <p className="eyebrow"><Sparkles aria-hidden="true"/> THE MAIN EVENT</p>
      <h2>ONE CRAVING.<br/><em>TWO</em> WAYS.</h2>
      <p>Keep it classic or turn up the heat. That's the whole menu — no overthinking required.</p>
    </div>
    <div className="menu-grid">
      <article className={choice==='normal'?'menu-card selected reveal':'menu-card reveal'}>
        <div className="card-meta"><span>01 / THE CLASSIC</span><Sparkles size={19}/></div>
        <div className="food-visual normal-visual"><img src="/masala-fries-hero.png" alt="" /><b>THE ORIGINAL</b></div>
        <div className="card-copy"><p className="card-overline">NO FUSS. ALL FLAVOUR.</p><h3>Normal Fries</h3>
          <p>Golden fries with our signature masala seasoning. Simple, crunchy, seriously satisfying.</p>
          <button className="select-button" onClick={()=>{setChoice('normal');setNotice('')}}>{choice==='normal'?<><Check size={16}/> SELECTED</>:<>CHOOSE NORMAL <ArrowUpRight size={16}/></>}</button>
        </div>
      </article>
      <article className={choice==='custom'?'menu-card selected reveal':'menu-card reveal'}>
        <div className="card-meta"><span>02 / MAKE IT YOURS</span><Flame size={19}/></div>
        <div className="food-visual custom-visual"><img src="/masala-fries-hero.png" alt="" /><b>YOUR HEAT. YOUR RULES.</b></div>
        <div className="card-copy"><p className="card-overline">PICK YOUR LEVEL.</p><h3>Custom Fries</h3>
          <p>Same golden crunch, your choice of spice. Pick the heat that matches your mood.</p>
          <button className="select-button" onClick={()=>{setChoice('custom');setNotice('')}}>{choice==='custom'?<><Check size={16}/> SELECTED</>:<>CUSTOMISE YOURS <ArrowUpRight size={16}/></>}</button>
        </div>
      </article>
    </div>
    {choice==='custom' && <div className="spice-panel reveal">
      <div className="spice-heading"><p className="eyebrow">SET YOUR SPICE LEVEL</p><h3>HOW HOT ARE WE GOING?</h3><p>Choose the heat. We'll bring the crunch.</p></div>
      <div className="spice-options">{levels.map(level=><button key={level.name} className={spice===level.name?'spice-option active':'spice-option'} onClick={()=>{setSpice(level.name);setNotice('')}}>
        <span className="peppers" aria-hidden="true">{Array.from({length:level.heat},(_,index)=><Flame key={index}/>)}</span><strong>{level.name}</strong><small>{level.note}</small>{spice===level.name&&<span className="level-check"><Check size={12}/></span>}
      </button>)}</div>
    </div>}
    <div className="order-summary reveal"><div><span>YOUR PICK</span><strong>{choice==='normal'?'Normal Fries':`Custom Fries · ${spice}`}</strong></div>
      <button className="button button-dark" onClick={confirm}>Confirm my pick <ArrowUpRight size={16}/></button>
    </div>
    {notice&&<p className="confirmation" role="status"><Check size={17}/>{notice}</p>}
    <p className="menu-footnote reveal">TWO CHOICES. ENDLESS CRAVINGS. <Sparkles aria-hidden="true"/></p>
  </section>;
}
