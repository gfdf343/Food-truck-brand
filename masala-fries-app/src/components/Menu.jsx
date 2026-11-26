import { useState } from 'react';
import { ArrowUpRight, Check, Flame, Sparkles } from 'lucide-react';
import masalaFriesImage from '../assets/masala-fries.png';
import periPeriFriesImage from '../assets/peri-peri-fries.png';

const flavors = [
  {
    id: 'masala',
    name: 'Masala Fries',
    label: 'THE SIGNATURE',
    overline: 'WARM. SAVOURY. CLASSIC.',
    description: 'Golden fries tossed in our signature blend of bold, aromatic desi spices.',
    image: masalaFriesImage,
    imageAlt: 'Golden fries in a paper tray dusted with Indian masala seasoning',
    imageCaption: 'SIGNATURE MASALA',
    Icon: Sparkles
  },
  {
    id: 'peri-peri',
    name: 'Peri Peri Fries',
    label: 'THE FIERY ONE',
    overline: 'SMOKY. TANGY. BOLD.',
    description: 'A crisp golden crunch with a bright, smoky peri peri chilli kick.',
    image: periPeriFriesImage,
    imageAlt: 'Crispy fries coated in smoky peri peri seasoning with red chilli flecks',
    imageCaption: 'PERI PERI HEAT',
    Icon: Flame
  }
];

export default function Menu() {
  const [selectedId, setSelectedId] = useState('masala');
  const [notice, setNotice] = useState('');
  const selectedFlavor = flavors.find(flavor => flavor.id === selectedId) ?? flavors[0];

  const chooseFlavor = flavor => {
    setSelectedId(flavor.id);
    setNotice('');
  };

  const confirm = () => setNotice(`${selectedFlavor.name} selected. Fresh, golden, and ready to crunch.`);

  return <section className="menu-section section-pad" id="menu">
    <div className="section-heading reveal">
      <p className="eyebrow"><Sparkles aria-hidden="true"/> THE MAIN EVENT</p>
      <h2>TWO FLAVORS.<br/><em>ZERO</em> FUSS.</h2>
      <p>Choose signature Masala or smoky Peri Peri. Two bold flavors, made fresh for the crunch.</p>
    </div>
    <div className="menu-grid">
      {flavors.map(flavor => {
        const isSelected = selectedId === flavor.id;
        const FlavorIcon = flavor.Icon;

        return <article key={flavor.id} className={`menu-card menu-card-${flavor.id} reveal${isSelected ? ' selected' : ''}`}>
          <div className="card-meta"><span>{flavor.label}</span><FlavorIcon size={19} aria-hidden="true"/></div>
          <div className={`food-visual flavor-visual flavor-visual-${flavor.id}`}>
            <img src={flavor.image} alt={flavor.imageAlt} loading="lazy" decoding="async" />
            <b>{flavor.imageCaption}</b>
          </div>
          <div className="card-copy">
            <p className="card-overline">{flavor.overline}</p>
            <h3>{flavor.name}</h3>
            <p>{flavor.description}</p>
            <button
              className="select-button"
              type="button"
              aria-pressed={isSelected}
              aria-label={isSelected ? `${flavor.name} selected` : `Choose ${flavor.name}`}
              onClick={() => chooseFlavor(flavor)}
            >
              {isSelected ? <><Check size={16} aria-hidden="true"/> SELECTED</> : <>CHOOSE {flavor.name.toUpperCase()} <ArrowUpRight size={16} aria-hidden="true"/></>}
            </button>
          </div>
        </article>;
      })}
    </div>
    <div className="order-summary reveal">
      <div className="order-summary-pick">
        <img src={selectedFlavor.image} alt={selectedFlavor.imageAlt} />
        <div className="order-summary-copy"><span>YOUR PICK</span><strong key={selectedFlavor.id} className="selected-flavor-name">{selectedFlavor.name}</strong></div>
      </div>
      <button className="button button-dark" type="button" onClick={confirm}>Confirm my pick <ArrowUpRight size={16} aria-hidden="true"/></button>
    </div>
    {notice && <p className="confirmation" role="status"><Check size={17} aria-hidden="true"/>{notice}</p>}
    <p className="menu-footnote reveal">TWO FLAVORS. ONE SERIOUS CRAVING. <Sparkles aria-hidden="true"/></p>
  </section>;
}
