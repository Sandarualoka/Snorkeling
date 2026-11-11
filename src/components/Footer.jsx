import React from 'react';
import { Waves } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="flex flex-wrap justify-between gap-4">
      <a className="brand flex items-center gap-3" href="#home">
        <Waves size={25} /> BELOW BLUE
      </a>
      <a href="#home">Back to top ↑</a>
    </footer>
  );
}
