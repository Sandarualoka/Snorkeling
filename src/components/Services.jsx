import React from 'react';
import { Compass, Fish, Waves } from 'lucide-react';

const services = [
  [
    Compass,
    'Guided snorkeling',
    'Explore the reef with local guidance. Ask about available locations and what’s included.',
  ],
  [
    Waves,
    'First-time snorkeling',
    'New to a mask and fins? Ask about an introductory session suited to your experience.',
  ],
  [
    Fish,
    'Reef discovery',
    'Spend time looking for tropical fish and observing the reef from the surface.',
  ],
];

export default function Services() {
  return (
    <section id="services" className="content">
      <p className="eyebrow">SERVICES</p>
      <h2>Find your way into the water.</h2>
      <div className="grid gap-5 md:grid-cols-3 mt-9">
        {services.map(([Icon, name, description]) => (
          <article className="spot" key={name}>
            <Icon size={29} />
            <h3>{name}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
