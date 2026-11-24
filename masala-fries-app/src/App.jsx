import { useEffect } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Menu from './components/Menu.jsx';
import Story from './components/Story.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      elements.forEach(el => el.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });
    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return <>
    <div className="announcement"><span>✳</span> BIG CRUNCH. BOLD MASALA. <span>✳</span></div>
    <Header/>
    <main><Hero/><Menu/><Story/>
      <section className="closing"><p className="eyebrow light">✳ YOUR FRIES ARE CALLING</p><h2>LET'S GET<br/><em>CRUNCHING.</em></h2><a className="button button-gold" href="#menu">Find your fries ↗</a><span className="closing-spark">✳</span></section>
    </main>
    <Footer/>
  </>;
}
