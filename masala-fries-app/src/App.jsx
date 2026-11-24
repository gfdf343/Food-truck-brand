import { useEffect } from 'react';
import { Sparkles } from 'lucide-react';
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
    const observeReveal = node => {
      if (!(node instanceof Element)) return;
      if (node.matches('.reveal')) observer.observe(node);
      node.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    };
    elements.forEach(el => observer.observe(el));
    const additions = new MutationObserver(records => {
      records.forEach(record => record.addedNodes.forEach(observeReveal));
    });
    additions.observe(document.body, { childList: true, subtree: true });
    return () => {
      observer.disconnect();
      additions.disconnect();
    };
  }, []);

  return <>
    <div className="announcement"><Sparkles aria-hidden="true"/> BIG CRUNCH. BOLD MASALA. <Sparkles aria-hidden="true"/></div>
    <Header/>
    <main><Hero/><Menu/><Story/>
      <section className="closing reveal"><p className="eyebrow light"><Sparkles aria-hidden="true"/> YOUR FRIES ARE CALLING</p><h2>LET&apos;S GET<br/><em>CRUNCHING.</em></h2><a className="button button-gold" href="#menu">Find your fries ↗</a><Sparkles className="closing-spark" aria-hidden="true"/></section>
    </main>
    <Footer/>
  </>;
}
