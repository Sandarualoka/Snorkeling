import React, { useLayoutEffect, useRef } from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const dive = useRef(null);

  useLayoutEffect(() => {
    const motion = gsap.matchMedia();
    motion.add('(prefers-reduced-motion: no-preference)', () => {
      const scene = dive.current;
      const select = gsap.utils.selector(scene);
      gsap.from(select('.hero-copy > *'), {
        y: 24,
        opacity: 0,
        stagger: 0.11,
        duration: 0.75,
        ease: 'power2.out',
        clearProps: 'transform,opacity',
      });
      gsap
        .timeline({
          defaults: { ease: 'none' },
          scrollTrigger: {
            trigger: scene,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 0.65,
          },
        })
        .to(
          select('.surface'),
          { scale: 1.72, yPercent: -9, duration: 0.76 },
          0,
        )
        .to(select('.hero-copy'), { autoAlpha: 0, y: -74, duration: 0.28 }, 0)
        .to(
          select('.reef'),
          { opacity: 1, clipPath: 'circle(145% at 56% 64%)', duration: 0.48 },
          0.19,
        )
        .to(
          select('.reef img'),
          { scale: 1.45, yPercent: -5, duration: 0.65 },
          0.28,
        )
        .to(select('.depth'), { autoAlpha: 1, y: 0, duration: 0.24 }, 0.57)
        .to(
          select('.bubble'),
          { yPercent: -550, opacity: 0, stagger: 0.08, duration: 0.36 },
          0.38,
        )
        .to(select('.scroll-link'), { autoAlpha: 0, duration: 0.18 }, 0.23);
    });
    return () => motion.revert();
  }, []);

  return (
    <section id="home" ref={dive} className="dive">
      <div className="frame">
        <img
          className="surface"
          src="/coast.webp"
          alt=""
          fetchPriority="high"
        />
        <div className="veil" aria-hidden="true"></div>
        <div className="reef" aria-hidden="true">
          <img src="/reef.webp" alt="" />
        </div>
        <div className="hero-copy">
          <p className="eyebrow">SNORKELING IN SRI LANKA</p>
          <h1>
            Meet Sri Lanka
            <br />
            beneath the blue.
          </h1>
          <p className="intro">
            From palm-lined shores to sunlit reefs, discover what’s just below
            the surface.
          </p>
          <a className="button inline-flex items-center gap-3" href="#services">
            Explore services <ArrowUpRight size={17} />
          </a>
        </div>
        <div className="depth">
          <p className="eyebrow">BENEATH THE SURFACE</p>
          <h2>Follow the reef.</h2>
          <p>Watch the light shift and the reef come into view.</p>
        </div>
        <div className="bubbles" aria-hidden="true">
          <i className="bubble" />
          <i className="bubble" />
          <i className="bubble" />
          <i className="bubble" />
        </div>
        <a
          href="#underwater"
          className="scroll-link inline-flex items-center gap-3"
        >
          <span>
            <ArrowDown size={17} />
          </span>{' '}
          SCROLL TO DIVE
        </a>
      </div>
      <div id="underwater" aria-hidden="true" />
    </section>
  );
}
