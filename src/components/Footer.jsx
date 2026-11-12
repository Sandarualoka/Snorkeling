import React from 'react';
import { ArrowUp, Waves } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="site-footer relative isolate overflow-hidden bg-[#073b46] px-[clamp(22px,8vw,140px)] pb-6 pt-24 text-white">
      <svg
        aria-hidden="true"
        className="footer-wave pointer-events-none absolute inset-x-0 top-0 h-20 w-full"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
      >
        <path
          className="footer-wave__back"
          fill="#b8e4df"
          d="M0 0h1440v48c-180 25-270-14-450 2s-270 34-450 6S270 30 0 62V0Z"
        />
        <path
          className="footer-wave__front"
          fill="#edf9f7"
          d="M0 0h1440v38c-180 34-300-5-480 12S660 79 480 52 180 32 0 70V0Z"
        />
      </svg>

      <div className="relative z-10 mx-auto grid max-w-6xl gap-10 sm:grid-cols-2 sm:items-start">
        <div>
          <a
            className="brand inline-flex items-center gap-3 text-white transition-colors hover:text-teal-200"
            href="#home"
          >
            <Waves className="text-teal-200" size={27} aria-hidden="true" />
            <span>BELOW BLUE</span>
          </a>
          <p className="mt-4 max-w-sm text-sm leading-7 text-teal-50/75">
            Find your way to the quieter side of Sri Lanka’s coast.
          </p>
        </div>

        <nav
          aria-label="Footer navigation"
          className="site-footer__nav grid grid-cols-2 gap-x-8 gap-y-3 justify-self-start text-sm text-teal-50/80 sm:justify-self-end"
        >
          <a className="transition-colors hover:text-white" href="#services">
            Services
          </a>
          <a className="transition-colors hover:text-white" href="#gallery">
            Gallery
          </a>
          <a className="transition-colors hover:text-white" href="#journey">
            Our journey
          </a>
          <a className="transition-colors hover:text-white" href="#contact">
            Contact
          </a>
        </nav>
      </div>

      <div className="relative z-10 mx-auto mt-10 flex max-w-6xl flex-col gap-4 border-t border-white/15 pt-5 text-xs text-teal-50/65 sm:flex-row sm:items-center sm:justify-between">
        <p className="m-0">
          © {new Date().getFullYear()} Below Blue. Explore with care.
        </p>
        <p className="m-0">
          Powered by{' '}
          <span className="font-semibold text-white">Sandaru De Silva</span>
        </p>
        <a
          className="inline-flex items-center gap-2 transition-colors hover:text-white"
          href="#home"
        >
          Back to top <ArrowUp size={14} aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
