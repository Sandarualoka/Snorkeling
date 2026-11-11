import React, { useRef, useState } from 'react';
import { Camera } from 'lucide-react';

const gallery = [
  [
    '/coast.webp',
    'Turquoise shallows along a palm-lined coast',
    'Above the water',
  ],
  ['/reef.webp', 'Snorkeler swimming above a tropical reef', 'Into the blue'],
  [
    '/turtle.webp',
    'Green sea turtle swimming above the reef',
    'Life on the reef',
  ],
];

export default function Gallery() {
  const dialog = useRef(null);
  const [photo, setPhoto] = useState(null);

  function openPhoto(image) {
    setPhoto(image);
    dialog.current.showModal();
  }

  return (
    <section id="gallery" className="content">
      <p className="eyebrow">GALLERY</p>
      <h2>A closer look at the coast.</h2>
      <div className="grid gap-5 md:grid-cols-3 mt-9">
        {gallery.map((image) => (
          <button
            type="button"
            className="gallery-photo"
            key={image[0]}
            onClick={() => openPhoto(image)}
            aria-label={'Enlarge ' + image[2]}
          >
            <img src={image[0]} alt={image[1]} loading="lazy" />
            <span>
              {image[2]} <Camera size={17} />
            </span>
          </button>
        ))}
      </div>
      <p className="gallery-note">
        Illustrative imagery inspired by Sri Lanka’s coast.
      </p>
      <dialog
        ref={dialog}
        onClick={(e) => {
          if (e.target === e.currentTarget) e.currentTarget.close();
        }}
        aria-label="Enlarged gallery image"
      >
        <button type="button" onClick={() => dialog.current.close()} autoFocus>
          Close ×
        </button>
        {photo && (
          <figure>
            <img src={photo[0]} alt={photo[1]} />
            <figcaption>{photo[2]}</figcaption>
          </figure>
        )}
      </dialog>
    </section>
  );
}
