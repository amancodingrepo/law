// Primitives: Reveal wrapper, AnimatedCounter, magnetic button, Cursor, useLenis
import { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';

// IntersectionObserver-based reveal
export function useInView(opts = {}) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      });
    }, { threshold: opts.threshold ?? 0.15, rootMargin: opts.rootMargin ?? '0px 0px -80px 0px' });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return [ref, seen];
}

export function Reveal({ children, delay = 0, as: As = 'div', variant = 'up', className = '', style = {}, ...rest }) {
  const [ref, seen] = useInView();
  const cls = `reveal-${variant} ${seen ? 'in' : ''} ${className}`;
  return (
    <As ref={ref} className={cls} style={{ '--rd': `${delay}ms`, ...style }} {...rest}>
      {children}
    </As>
  );
}

export function StaggerGroup({ children, step = 80, baseDelay = 0, ...rest }) {
  const arr = Array.isArray(children) ? children : [children];
  return (
    <>
      {arr.map((c, i) =>
        c ? { ...c, props: { ...c.props, delay: (c.props?.delay ?? 0) + baseDelay + i * step } } : c
      )}
    </>
  );
}

// Animated counter
export function Counter({ to, suffix = '', duration = 1800, decimals = 0 }) {
  const [ref, seen] = useInView();
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!seen) return;
    const start = performance.now();
    let raf;
    const tick = (t) => {
      const p = Math.min(1, (t - start) / duration);
      const e = 1 - Math.pow(1 - p, 3);
      setVal(to * e);
      if (p < 1) raf = requestAnimationFrame(tick);
      else setVal(to);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [seen, to, duration]);
  const display = decimals > 0 ? val.toFixed(decimals) : Math.round(val).toLocaleString();
  return <span ref={ref}>{display}{suffix}</span>;
}

// Magnetic hover wrapper
export function Magnetic({ children, strength = 0.25, className = '' }) {
  const ref = useRef(null);
  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - (r.left + r.width / 2)) * strength;
    const y = (e.clientY - (r.top + r.height / 2)) * strength;
    el.style.transform = `translate(${x}px, ${y}px)`;
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = 'translate(0,0)';
  };
  return (
    <span ref={ref} onMouseMove={onMove} onMouseLeave={onLeave}
      style={{ display: 'inline-flex', transition: 'transform .35s cubic-bezier(.2,.7,.2,1)' }}
      className={className}>
      {children}
    </span>
  );
}

// Custom cursor (desktop hover only)
export function Cursor() {
  const ringRef = useRef(null);
  const dotRef = useRef(null);
  const isTouchDevice =
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(hover: none)').matches;

  useEffect(() => {
    if (isTouchDevice) return;
    let mx = window.innerWidth / 2, my = window.innerHeight / 2;
    let rx = mx, ry = my;
    const onMove = (e) => { mx = e.clientX; my = e.clientY; };
    window.addEventListener('mousemove', onMove);
    let raf;
    const tick = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      if (ringRef.current) ringRef.current.style.transform = `translate(${rx}px, ${ry}px) translate(-50%,-50%)`;
      if (dotRef.current) dotRef.current.style.transform = `translate(${mx}px, ${my}px) translate(-50%,-50%)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const onOver = (e) => {
      if (e.target.closest('a, button, .practice-card, .testi-card, .ins-card, [data-hover-lg]')) {
        ringRef.current?.classList.add('lg');
      }
    };
    const onOut = (e) => {
      if (e.target.closest('a, button, .practice-card, .testi-card, .ins-card, [data-hover-lg]')) {
        ringRef.current?.classList.remove('lg');
      }
    };
    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseout', onOut);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
      cancelAnimationFrame(raf);
    };
  }, [isTouchDevice]);

  if (isTouchDevice) return null;
  return (
    <>
      <div ref={ringRef} className="cursor" />
      <div ref={dotRef} className="cursor-dot" />
    </>
  );
}

// Lenis smooth scroll
export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    return () => { lenis.destroy(); };
  }, []);
}
