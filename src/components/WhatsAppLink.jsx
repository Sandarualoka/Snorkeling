import React from 'react';

const whatsapp = (
  message = 'Hi! I’d like to enquire about snorkeling in Sri Lanka.',
) => 'https://wa.me/94703405699?text=' + encodeURIComponent(message);

export default function WhatsAppLink({ children, className = '', message }) {
  return (
    <a
      className={className}
      href={whatsapp(message)}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
