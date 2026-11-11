import React from 'react';

export default function OurJourney() {
  return (
    <section
      id="journey"
      className="content tinted grid gap-10 md:grid-cols-2 items-center"
    >
      <img
        className="journey-photo"
        src="/reef.webp"
        alt="Snorkeler swimming below a sunlit surface"
        loading="lazy"
      />
      <div>
        <p className="eyebrow">OUR JOURNEY</p>
        <h2>From the shoreline to the reef.</h2>
        <p className="intro">
          Below Blue is about sharing the quieter side of Sri Lanka’s coast.
          Slip into the water, slow down, and see what lives beneath the
          surface.
        </p>
        <p className="intro">
          We believe a good reef visit leaves the reef as you found it. Give
          marine life space and keep your fins clear of the coral.
        </p>
      </div>
    </section>
  );
}
