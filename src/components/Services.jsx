import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import diveImage from '../assets/dive.jpg';

const services = [
  {
    name: 'Guided snorkeling',
    description:
      'Follow a local guide over the reef and find the fish you might swim right past on your own.',
  },
  {
    name: 'Your first snorkel',
    description:
      'Start by getting comfortable with your mask and fins. When you’re ready, take your first look below the surface.',
  },
  {
    name: 'Reef discovery',
    description:
      'Float above the coral and take your time. Watch for flashes of colour as fish dart between the rocks.',
  },
];

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="bg-white px-6 py-16 text-[#10333b] sm:px-10 lg:px-[8vw] lg:py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <img
          src={diveImage}
          alt="A snorkeler swimming above a sunlit coral reef"
          loading="lazy"
          decoding="async"
          className="aspect-[5/4] w-full  object-cover lg:aspect-[4/5]"
        />

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#086b6e]">
            Snorkeling experiences
          </p>

          <h2 id="services-title" className="mt-3">
            The reef is closer than you think.
          </h2>

          <ul className="mt-8 divide-y divide-[#d9e8e6] border-y border-[#d9e8e6]">
            {services.map(({ name, description }) => (
              <li key={name} className="py-5">
                <h3 className="text-lg font-semibold">{name}</h3>
                <p className="mt-1.5 max-w-md text-sm leading-relaxed text-[#45646b] sm:text-base">
                  {description}
                </p>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#086367] px-5 py-3 text-sm font-semibold !text-white transition-colors hover:bg-[#064a51]"
          >
            Ask us about snorkeling
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}