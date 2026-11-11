import React from 'react';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import WhatsAppLink from './WhatsAppLink';

export default function Contact() {
  return (
    <section id="contact" className="content tinted contact">
      <p className="eyebrow">CONTACT US</p>
      <h2>Let’s talk snorkeling.</h2>
      <p className="intro">
        Have a question about snorkeling, equipment, or where to go? Send us a
        message.
      </p>
      <WhatsAppLink className="button inline-flex items-center gap-3">
        <MessageCircle size={19} /> WhatsApp 070 340 5699{' '}
        <ArrowUpRight size={17} />
      </WhatsAppLink>
    </section>
  );
}
