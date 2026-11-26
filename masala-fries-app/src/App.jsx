import { useEffect } from 'react';
import { Sparkles } from 'lucide-react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Menu from './components/Menu.jsx';
import Story from './components/Story.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  useEffect(() => {
    const tracked = new Set();
    const observer = 'IntersectionObserver' in window
      ? new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
              tracked.delete(entry.target);
            }
          });
        }, { threshold: 0.08, rootMargin: '0px 0px -24px 0px' })
      : null;
    let animationFrame = 0;

    const revealVisible = () => {
      if (animationFrame) return;
      animationFrame = window.requestAnimationFrame(() => {
        animationFrame = 0;
        tracked.forEach(element => {
          if (!element.isConnected) {
            observer?.unobserve(element);
            tracked.delete(element);
            return;
          }
          const bounds = element.getBoundingClientRect();
          if (bounds.top < window.innerHeight && bounds.bottom > 0) {
            element.classList.add('is-visible');
            observer?.unobserve(element);
            tracked.delete(element);
          }
        });
      });
    };

    const observeReveal = node => {
      if (!(node instanceof Element)) return;
      const elements = [
        ...(node.matches('.reveal') ? [node] : []),
        ...node.querySelectorAll('.reveal')
      ];
      elements.forEach(element => {
        if (element.classList.contains('is-visible')) return;
        tracked.add(element);
        observer?.observe(element);
      });
      revealVisible();
    };

    document.querySelectorAll('.reveal').forEach(observeReveal);
    const additions = new MutationObserver(records => {
      records.forEach(record => record.addedNodes.forEach(observeReveal));
    });
    additions.observe(document.body, { childList: true, subtree: true });
    window.addEventListener('scroll', revealVisible, { passive: true });
    window.addEventListener('resize', revealVisible);
    revealVisible();

    return () => {
      observer?.disconnect();
      additions.disconnect();
      window.removeEventListener('scroll', revealVisible);
      window.removeEventListener('resize', revealVisible);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
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
