import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
    {
        id: 'sample-1',
        quote:
            'I’d never snorkeled before and spent the first few minutes just getting used to the mask. Once I looked down and saw the fish, I forgot I was nervous.',
        guestName: 'Sample guest',
        experience: 'First-time snorkeling',
    },
    {
        id: 'sample-2',
        quote:
            'Our guide pointed out a tiny fish tucked between two rocks. I’d already swum past it twice. After that, I slowed down and started noticing so much more.',
        guestName: 'Sample guest',
        experience: 'Guided snorkeling',
    },
    {
        id: 'sample-3',
        quote:
            'My favourite part was floating in one spot and watching a school of fish turn all at once. They flashed silver in the sunlight.',
        guestName: 'Sample guest',
        experience: 'Reef discovery',
    },
    {
        id: 'sample-4',
        quote:
            'My partner could have stayed in the water all morning. I was happy taking little breaks and getting back in whenever I felt ready. We both had a great time.',
        guestName: 'Sample guest',
        experience: 'Guided snorkeling',
    },
];

export default function Testimonials() {
    const trackRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const reviewCount = testimonials.length;

    function goToReview(index) {
        const track = trackRef.current;
        const card = track?.children[index];

        if (!card) return;

        const offset = card.offsetLeft - (track.clientWidth - card.offsetWidth) / 2;
        const reduceMotion = window.matchMedia(
            '(prefers-reduced-motion: reduce)',
        ).matches;

        track.scrollTo({
            left: offset,
            behavior: reduceMotion ? 'instant' : 'smooth',
        });
    }

    function handleScroll(event) {
        const track = event.currentTarget;
        const centre = track.scrollLeft + track.clientWidth / 2;
        let closestIndex = 0;
        let closestDistance = Infinity;

        Array.from(track.children).forEach((card, index) => {
            const cardCentre = card.offsetLeft + card.offsetWidth / 2;
            const distance = Math.abs(centre - cardCentre);

            if (distance < closestDistance) {
                closestIndex = index;
                closestDistance = distance;
            }
        });

        setActiveIndex(closestIndex);
    }

    function handleKeyDown(event) {
        if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
            event.preventDefault();
            goToReview(activeIndex + (event.key === 'ArrowLeft' ? -1 : 1));
        }
    }

    const arrowClass =
        'grid size-12 place-items-center rounded-full border border-white/35 ' +
        'text-white transition-colors hover:bg-white/15 ' +
        'focus-visible:outline-2 focus-visible:outline-offset-4 ' +
        'focus-visible:outline-white disabled:opacity-30';

    const hasSampleReviews = testimonials.some(({ id }) =>
        id.startsWith('sample-'),
    );

    return (
        <section
            id="testimonials"
            aria-labelledby="testimonials-title"
            className="relative isolate scroll-mt-24 overflow-hidden bg-[#073238] py-16 text-white lg:py-24"
        >
            <img
                src="/reef.webp"
                alt=""
                loading="lazy"
                className="pointer-events-none absolute inset-0 -z-20 h-full w-full object-cover object-right"
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 bg-[#062f35]/85 lg:bg-[linear-gradient(90deg,#062f35_12%,rgba(6,47,53,0.88)_50%,rgba(6,47,53,0.48)_100%)]"
            />

            <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.4fr)] lg:gap-12 lg:px-12">
                <div className="px-6 sm:px-10 lg:px-0">
                    <h2
                        id="testimonials-title"
                        className="max-w-[12ch] text-white"
                    >
                        What our guests say
                    </h2>

                    {hasSampleReviews && (
                        <p className="mt-4 text-sm text-[#d5eae6]">
                            Sample reviews for preview
                        </p>
                    )}

                    {reviewCount > 1 && (
                        <div className="mt-7 flex items-center gap-3">
                            <button
                                type="button"
                                aria-label="Previous review"
                                aria-controls="testimonial-track"
                                disabled={activeIndex === 0}
                                onClick={() => goToReview(activeIndex - 1)}
                                className={arrowClass}
                            >
                                <ChevronLeft size={22} aria-hidden="true" />
                            </button>
                            <button
                                type="button"
                                aria-label="Next review"
                                aria-controls="testimonial-track"
                                disabled={activeIndex === reviewCount - 1}
                                onClick={() => goToReview(activeIndex + 1)}
                                className={arrowClass}
                            >
                                <ChevronRight size={22} aria-hidden="true" />
                            </button>
                            <span className="ml-2 text-sm tabular-nums text-[#d5eae6]">
                                {activeIndex + 1} / {reviewCount}
                            </span>
                        </div>
                    )}
                </div>

                {reviewCount === 0 ? (
                    <p className="mx-6 max-w-md text-sm leading-relaxed text-[#d5eae6] sm:mx-10 lg:mx-0">
                        We’re gathering stories from our guests. Check back soon to hear
                        about their snorkeling experiences.
                    </p>
                ) : (
                    <div className="min-w-0">
                        <div
                            ref={trackRef}
                            id="testimonial-track"
                            role="region"
                            aria-label="Guest review carousel"
                            tabIndex={reviewCount > 1 ? 0 : undefined}
                            onScroll={handleScroll}
                            onKeyDown={handleKeyDown}
                            className="relative flex snap-x snap-mandatory gap-3
                         overflow-x-auto overscroll-x-contain py-5
                         [--review-width:min(82%,30rem)]
                         [padding-inline:calc((100%_-_var(--review-width))_/_2)]
                         [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                        >
                            {testimonials.map(({ id, quote, guestName, experience }, index) => {
                                const isActive = index === activeIndex;
                                const tilt = index < activeIndex ? 9 : -9;

                                return (
                                    <div
                                        key={id}
                                        className="flex w-[var(--review-width)] shrink-0 snap-center [perspective:1200px]"
                                    >
                                        <figure
                                            className={`flex min-h-[18rem] w-full flex-col justify-between
              rounded-[1.75rem] p-6 text-[#153b3d] sm:p-9
              motion-safe:transition-[transform,opacity,filter,box-shadow]
              motion-safe:duration-300 motion-reduce:transform-none!
              ${isActive
                                                    ? 'bg-white shadow-[0_10px_28px_rgba(0,0,0,0.22)] ring-2 ring-[#80efda]'
                                                    : 'bg-[#fffaf0] shadow-md'
                                                }`}
                                            style={{
                                                transform: isActive
                                                    ? 'rotateY(0deg) scale(1)'
                                                    : `rotateY(${tilt}deg) scale(0.96)`,
                                                opacity: isActive ? 1 : 0.65,
                                                filter: isActive ? 'none' : 'blur(2px)',
                                            }}
                                        >
                                            <blockquote className="mb-7">
                                                <p className="font-serif text-xl leading-snug sm:text-3xl">
                                                    “{quote}”
                                                </p>
                                            </blockquote>

                                            <figcaption className="border-t border-[#d8ddd3] pt-4">
                                                <p className="text-sm font-semibold">{guestName}</p>
                                                {experience && (
                                                    <p className="mt-1 text-sm text-[#46615e]">
                                                        {experience}
                                                    </p>
                                                )}
                                            </figcaption>
                                        </figure>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}