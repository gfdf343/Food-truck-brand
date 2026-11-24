import Brand from './Brand.jsx';
export default function Footer() {
  return <footer className="site-footer"><Brand/><span>GOOD FRIES. GREAT SPICE.</span><a href="#home">BACK TO TOP ↑</a><small>© {new Date().getFullYear()} MASALA FRIES. MADE WITH CRUNCH.</small></footer>;
}
