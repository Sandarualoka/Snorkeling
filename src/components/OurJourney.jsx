import React from 'react';
import diveVideo from '../assets/dive.mp4';

export default function OurJourney() {
  return (
    <section
      id="journey"
      aria-labelledby="journey-title"
      className="relative isolate flex min-h-[100svh] w-full items-end
                 overflow-hidden md:items-center md:justify-end"
    >
      <video
        src={diveVideo}
        aria-label="Snorkeler swimming below a sunlit surface"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_top,rgba(4,27,34,0.96),rgba(4,27,34,0.65)_40%,transparent_85%)]
                   md:bg-[linear-gradient(to_left,rgba(4,27,34,0.95),rgba(4,27,34,0.72)_35%,transparent_78%)]"
      />

      <div className="w-full px-6 py-12 text-white sm:px-10 md:w-1/2 md:px-[6vw] md:py-20">
        <p className="text-xs font-bold tracking-[0.22em] text-teal-200">
          OUR JOURNEY
        </p>

        <h2 id="journey-title">From the shoreline to the reef.</h2>

        <div className="max-w-md space-y-4 text-sm leading-relaxed text-white/90 sm:text-base">
          <p>
            Below Blue is about sharing the quieter side of Sri Lanka’s coast.
            Slip into the water, slow down, and see what lives beneath the
            surface.
          </p>
          <p>
            We believe a good reef visit leaves the reef as you found it. Give
            marine life space and keep your fins clear of the coral.
          </p>
        </div>
      </div>
    </section>
  );
}