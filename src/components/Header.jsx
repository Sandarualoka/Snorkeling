import React, { useState } from 'react';
import { MessageCircle, Waves } from 'lucide-react';
import WhatsAppLink from './WhatsAppLink';

const sections = [
  ['Home', 'home'],
  ['Services', 'services'],
  ['Our Journey', 'journey'],
  ['Gallery', 'gallery'],
  ['Contact Us', 'contact'],
];

export default function Header() {
  const [menu, setMenu] = useState(false);

  return (
    <header className="header flex items-center justify-between">
      <a
        href="#home"
        className="brand flex items-center gap-3"
        aria-label="Below Blue home"
      >
        <Waves size={29} />
        <span>
          BELOW BLUE<small>SRI LANKA</small>
        </span>
      </a>
      <button
        className="menu-toggle"
        type="button"
        aria-expanded={menu}
        aria-controls="site-nav"
        onClick={() => setMenu(!menu)}
      >
        {menu ? 'Close' : 'Menu'}
      </button>
      <nav
        id="site-nav"
        className={menu ? 'open' : ''}
        aria-label="Main navigation"
      >
        {sections.map(([label, id]) => (
          <a key={id} href={'#' + id} onClick={() => setMenu(false)}>
            {label}
          </a>
        ))}
      </nav>
      <WhatsAppLink className="nav-chat inline-flex items-center gap-2">
        <MessageCircle size={17} /> WhatsApp
      </WhatsAppLink>
    </header>
  );
}
