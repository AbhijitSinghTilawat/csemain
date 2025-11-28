// app/page.tsx (or pages/index.tsx)
// Full updated Home page with super-smooth looping vertical auto-scroll for panels
// Requires: lucide-react, embla-carousel-react, react-fast-marquee, embla-carousel-autoplay

"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { ChevronRight } from "lucide-react";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Marquee from "react-fast-marquee";

import { newsItems, eventItems, recruitmentItems, marqueeItems } from "../lib/content";

export default function Home() {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 4000 })]
  );

  const slides = [
    { imgSrc: "/sliderimage/1.png", title: "13th Convocation" },
    {
      imgSrc: "/sliderimage/2.jpg",
      title: "ICCCNT 2025 is being held at IIT Indore from July 6–11, 2025",
    },
    { imgSrc: "/sliderimage/3.jpeg", title: "Farewell of Prof. N. S. Chaudhari" },
    { imgSrc: "/sliderimage/4.jpeg", title: "Symposium 3.0" },
    { imgSrc: "/sliderimage/5.jpeg", title: "CSE Faculty Members" },
    { imgSrc: "/sliderimage/6.jpg", title: "International Collaboration" },
    {
      imgSrc: "/sliderimage/7.jpg",
      title: "CSE Faculty Members with Director, IIT Indore",
    },
    {
      imgSrc: "/sliderimage/8.jpg",
      title: "Research Projects and Publication Statistics from 2014 to 2025",
    },
    { imgSrc: "/sliderimage/9.jpg", title: "Major Research Areas of the Department" },
    { imgSrc: "/sliderimage/10.jpg", title: "Major Research Areas of the Department" },
  ];

  // ABOUT CSE animation ref
  const aboutRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = aboutRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("about-visible");
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-900 dark:via-blue-950 dark:to-slate-800 text-gray-900 dark:text-white font-sans">
      {/* Super-smooth auto-scroll CSS + ABOUT CSE animation CSS */}
      <style jsx global>{`
        /* --------------------------
           SUPER SMOOTH AUTO SCROLL
           -------------------------- */
        :root {
          /* slower = smoother; tweak as needed */
          --scroll-duration: 36s;
        }

        .auto-scroll {
          overflow: hidden;
          position: relative;
        }

        .auto-scroll .auto-scroll-inner {
          display: flex;
          flex-direction: column;
          will-change: transform;
          /* linear, GPU-accelerated transform */
          animation: smoothLoop var(--scroll-duration) linear infinite;
          transform: translateZ(0);
        }

        /* Pause on hover (remove if you don't want this) */
        .auto-scroll:hover .auto-scroll-inner {
          animation-play-state: paused;
        }

        /* Duplicate blocks (each block is the full set) */
        .auto-scroll .scroll-block {
          flex-shrink: 0;
        }

        /* Smooth keyframes: translate by half because we duplicate content */
        @keyframes smoothLoop {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        /* Respect reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .auto-scroll .auto-scroll-inner {
            animation: none;
          }
        }

        /* Optional: small subtle top/bottom fade mask (unobtrusive) */
        .auto-scroll::before,
        .auto-scroll::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          height: 1.4rem;
          pointer-events: none;
          z-index: 10;
        }
        .auto-scroll::before {
          top: 0;
          background: linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0.9),
            rgba(255, 255, 255, 0)
          );
          mix-blend-mode: normal;
          opacity: 0.06;
        }
        .auto-scroll::after {
          bottom: 0;
          background: linear-gradient(
            to top,
            rgba(255, 255, 255, 0.9),
            rgba(255, 255, 255, 0)
          );
          mix-blend-mode: normal;
          opacity: 0.06;
        }
        @media (prefers-color-scheme: dark) {
          .auto-scroll::before,
          .auto-scroll::after {
            opacity: 0.12;
            background: linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0.7),
              rgba(0, 0, 0, 0)
            );
          }
        }

        /* Ensure duplicated lists don't collapse spacing */
        .auto-scroll .auto-scroll-inner .scroll-block ul > li {
          margin-bottom: 0;
        }

        /* --------------------------
           ABOUT CSE ANIMATION CARD
           -------------------------- */
        .about-card {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 700ms ease-out, transform 700ms ease-out,
            box-shadow 300ms ease-out, transform 300ms ease-out;
          background: transparent;
          backdrop-filter: none;
          box-shadow: 0 18px 40px rgba(15, 23, 42, 0.35);
          border-radius: 1.25rem;
          border: none;
        }

        .dark .about-card {
          background: transparent;
          box-shadow: 0 24px 55px rgba(15, 23, 42, 0.85);
          border: none;
        }

        .about-card.about-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .about-card:hover {
          box-shadow: 0 30px 70px rgba(15, 23, 42, 0.6);
          transform: translateY(-4px);
        }
      `}</style>

      {/* Marquee */}
      <div className="bg-slate-900 dark:bg-slate-700 text-white py-3 shadow-inner border-y border-blue-500/30">
        <div className="w-full px-2 sm:px-4 lg:px-6 xl:px-8 2xl:px-12">
          <Marquee speed={55} pauseOnHover gradient={false}>
            {marqueeItems.map((item) => {
              const itemClasses = `mx-6 sm:mx-10 md:mx-16 text-[clamp(0.8rem,1.4vw,1rem)] tracking-wide ${
                item.isStrong ? "font-semibold" : "font-normal opacity-85"
              }`;
              const hasHref =
                "href" in item && typeof (item as any).href === "string";
              if (hasHref) {
                return (
                  <Link
                    key={item.id}
                    href={(item as any).href}
                    className={`${itemClasses} hover:text-blue-300 transition-colors duration-200`}
                  >
                    {item.text}
                  </Link>
                );
              }
              return (
                <span key={item.id} className={itemClasses}>
                  {item.text}
                </span>
              );
            })}
          </Marquee>
        </div>
      </div>

      {/* News Slider */}
      <section className="py-12 md:py-16 bg-slate-100/50 dark:bg-slate-900/50">
        <div className="w-full px-2 sm:px-4 lg:px-6 xl:px-8 2xl:px-12">
          <div className="max-w mx-auto w-full">
            <div className="text-center mb-8">
              <h2 className="text-[clamp(1.25rem,2.8vw,2.5rem)] font-bold text-gray-900 dark:text-white mb-2">
                News & Highlights
              </h2>
              <p className="text-[clamp(0.9rem,1.4vw,1.125rem)] text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Stay updated with our latest announcements and events.
              </p>
            </div>

            <div
              className="overflow-hidden rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50"
              ref={emblaRef}
            >
              <div className="flex">
                {slides.map((slide, index) => (
                  <div className="min-w-full flex-none" key={index}>
                    {/* Image fully visible, responsive height */}
                    <div className="relative w-full h-[40vh] sm:h-[45vh] md:h-[55vh] lg:h-[60vh] xl:h-[65vh] max-h-[780px] min-h-[220px] bg-slate-900/30 dark:bg-black/30 rounded-2xl overflow-hidden flex items-center justify-center">
                      <Image
                        src={slide.imgSrc}
                        alt={slide.title}
                        fill
                        priority={index === 0}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1100px"
                        className="rounded-2xl object-contain"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent rounded-2xl pointer-events-none" />
                      <div className="absolute left-4 right-4 bottom-4 text-white">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold drop-shadow">
                          {slide.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT CSE Section */}
      <section className="bg-transparent border-t border-gray-200 dark:border-gray-700/50">
        <div
          ref={aboutRef}
          className="about-card w-full mx-auto text-center pb-10"
        >
          <h2 className="text-[clamp(1.25rem,2.8vw,2.5rem)] font-bold text-gray-900 dark:text-white mb-6 pt-10">
            ABOUT CSE
          </h2>

          <p className="text-[clamp(0.9rem,1.2vw,1.05rem)] text-gray-700 dark:text-gray-300 leading-relaxed mx-auto mb-6">
            The Department of Computer Science and Engineering (CSE) was set up in July
            2009. The department offers Bachelor of Technology (B. Tech.), Master of
            Science (M. S.) by Research and Doctor of Philosophy (Ph.D.) programmes. From
            2023 onwards, the department offers a Master of Technology (M. Tech.)
            programme. The department adopts a modern approach to teaching wherein
            students are rendered adequate academic freedom to innovate and learn in the
            process. The state-of-the-art facilities including the latest software and
            advanced hardware are available in various laboratories for use in both
            teaching and research. This facilitates adequate implementation of major
            B.Tech., MS (Research) and Ph.D. projects and for verification and validation
            of research results.
          </p>

          <p className="text-[clamp(0.9rem,1.2vw,1.05rem)] text-gray-700 dark:text-gray-300 leading-relaxed mx-auto mb-8">
            The department benefits from the location of the Institute. Indore is fast
            developing into a major IT hub in central India. Organizations like CSC and
            Impetus have a strong presence in the city and major players like TCS,
            Infosys, and other major IT organizations have set up their offices here. For
            the Department of CSE, this provides an excellent opportunity to foster
            industry–academia partnerships.
          </p>

          <h3 className="text-[clamp(1.25rem,2.8vw,2rem)] font-bold text-gray-900 dark:text-white mb-4">
            Vision and Mission
          </h3>

          <p className="text-[clamp(0.9rem,1.2vw,1.05rem)] text-gray-700 dark:text-gray-300 leading-relaxed max-w-9xl mx-auto mb-4">
            <strong>Vision:</strong> The Department of Computer Science and Engineering
            is looking to become a leader in fundamental and applied research on cutting
            edge technologies and know-how in the area of IT and Computer Science. It
            aims to become a top destination for knowledge dissemination in its field.
            The department has a very talented pool of faculty and support staff that
            facilitate its steady progress in this direction.
          </p>

          <p className="text-[clamp(0.9rem,1.2vw,1.05rem)] text-gray-700 dark:text-gray-300 leading-relaxed max-w-5xl mx-auto">
            <strong>Mission:</strong> To stay ahead of the curve in the use and
            dissemination of knowledge on evolving technologies.
          </p>
        </div>
      </section>

      {/* Academics */}
      <section className="relative w-full bg-transparent py-12 md:py-16">
        <div className="w-full px-2 sm:px-4 lg:px-6 xl:px-8 2xl:px-12">
          <div className="max-w mx-auto w-full pb-12 md:pb-20">
            <div className="text-center mb-10">
              <h2 className="text-[clamp(1.25rem,2.8vw,2.5rem)] font-bold text-gray-900 dark:text-white mb-2">
                Academics
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
              <div className="flex flex-col bg-white dark:bg-slate-800/60 shadow-2xl rounded-2xl p-6 md:p-8 border border-gray-200/50 dark:border-gray-700/50 transition-all duration-300 hover:shadow-blue-500/10 hover:border-blue-500/50 h-full">
                <h3 className="text-[clamp(1rem,1.6vw,1.5rem)] font-bold mb-3 text-blue-700 dark:text-blue-300">
                  B.TECH
                </h3>
                <p className="text-[clamp(0.9rem,1.2vw,1rem)] text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                  The B.Tech. Program in Computer Science And Engineering is a four-year
                  program with selection through the Joint Entrance Examination...
                </p>
                <Link
                  href="/join/btech"
                  className="mt-2 inline-block text-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300"
                >
                  Read more
                </Link>
              </div>

              <div className="flex flex-col bg-white dark:bg-slate-800/60 shadow-2xl rounded-2xl p-6 md:p-8 border border-gray-200/50 dark:border-gray-700/50 transition-all duration-300 hover:shadow-blue-500/10 hover:border-blue-500/50 h-full">
                <h3 className="text-[clamp(1rem,1.6vw,1.5rem)] font-bold mb-3 text-blue-700 dark:text-blue-300">
                  M.TECH
                </h3>
                <p className="text-[clamp(0.9rem,1.2vw,1rem)] text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                  The MTech program at IIT Indore offers advanced, research-focused
                  engineering education. It builds strong technical skills for careers
                  in...
                </p>
                <Link
                  href="/join/mtech"
                  className="mt-2 inline-block text-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300"
                >
                  Read more
                </Link>
              </div>

              <div className="flex flex-col bg-white dark:bg-slate-800/60 shadow-2xl rounded-2xl p-6 md:p-8 border border-gray-200/50 dark:border-gray-700/50 transition-all duration-300 hover:shadow-blue-500/10 hover:border-blue-500/50 h-full">
                <h3 className="text-[clamp(1rem,1.6vw,1.5rem)] font-bold mb-3 text-blue-700 dark:text-blue-300">
                  MS
                </h3>
                <p className="text-[clamp(0.9rem,1.2vw,1rem)] text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                  MS Research program of the Department of Computer Science and
                  Engineering is a two years research oriented Masters program...
                </p>
                <Link
                  href="/join/ms"
                  className="mt-2 inline-block text-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300"
                >
                  Read more
                </Link>
              </div>

              <div className="flex flex-col bg-white dark:bg-slate-800/60 shadow-2xl rounded-2xl p-6 md:p-8 border border-gray-200/50 dark:border-gray-700/50 transition-all duration-300 hover:shadow-blue-500/10 hover:border-blue-500/50 h-full">
                <h3 className="text-[clamp(1rem,1.6vw,1.5rem)] font-bold mb-3 text-blue-700 dark:text-blue-300">
                  Doctoral Program
                </h3>
                <p className="text-[clamp(0.9rem,1.2vw,1rem)] text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                  Department of Computer Science and Engineering at Indore offers Doctor
                  of Philosophy (PhD) program in almost all current areas...
                </p>
                <Link
                  href="/join/phd"
                  className="mt-2 inline-block text-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300"
                >
                  Read more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Panels area */}
      <section className="bg-slate-100/50 dark:bg-slate-900/50 py-12 md:py-20 border-t border-gray-200 dark:border-gray-700/50">
        <div className="w-full px-2 sm:px-4 lg:px-6 xl:px-8 2xl:px-12">
          <div className="max-w mx-auto w-full px-4 sm:px-0 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* NEWS */}
            <div className="flex flex-col">
              <div className="bg-blue-900 text-white p-3 rounded-t-lg shadow-lg">
                <h3 className="text-sm md:text-lg font-bold tracking-wide">
                  NEWS (2025)
                </h3>
              </div>

              <div className="bg-white dark:bg-slate-800 p-4 md:p-6 rounded-b-lg shadow-lg border-x border-b border-gray-200 dark:border-gray-700 auto-scroll h-[clamp(150px,20vh,250px)]">
                <div className="auto-scroll-inner">
                  <div className="scroll-block">
                    <ul className="space-y-3">
                      {newsItems.map((item) => (
                        <li
                          key={item.id}
                          className="flex items-start space-x-2"
                        >
                          <ChevronRight className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                          <span className="text-sm md:text-base text-gray-700 dark:text-gray-300">
                            {item.content}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* duplicate for seamless loop */}
                  <div className="scroll-block" aria-hidden>
                    <ul className="space-y-3">
                      {newsItems.map((item) => (
                        <li
                          key={`copy-news-${item.id}`}
                          className="flex items-start space-x-2"
                        >
                          <ChevronRight className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                          <span className="text-sm md:text-base text-gray-700 dark:text-gray-300">
                            {item.content}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* EVENTS */}
            <div className="flex flex-col">
              <div className="bg-blue-900 text-white p-3 rounded-t-lg shadow-lg">
                <h3 className="text-sm md:text-lg font-bold tracking-wide">
                  EVENTS
                </h3>
              </div>

              <div className="bg-white dark:bg-slate-800 p-4 md:p-6 rounded-b-lg shadow-lg border-x border-b border-gray-200 dark:border-gray-700 auto-scroll h-[clamp(150px,20vh,250px)]">
                <div className="auto-scroll-inner">
                  <div className="scroll-block">
                    <ul className="space-y-3">
                      {eventItems.map((item) => {
                        const hasHref =
                          "href" in item &&
                          typeof (item as any).href === "string";
                        return (
                          <li
                            key={item.id}
                            className="flex items-start space-x-2"
                          >
                            <ChevronRight className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                            {hasHref ? (
                              <Link
                                href={(item as any).href}
                                className="text-sm md:text-base text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                              >
                                {item.text}
                              </Link>
                            ) : (
                              <span className="text-sm md:text-base text-gray-700 dark:text-gray-300">
                                {item.text}
                              </span>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  <div className="scroll-block" aria-hidden>
                    <ul className="space-y-3">
                      {eventItems.map((item) => {
                        const hasHref =
                          "href" in item &&
                          typeof (item as any).href === "string";
                        return (
                          <li
                            key={`copy-event-${item.id}`}
                            className="flex items-start space-x-2"
                          >
                            <ChevronRight className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                            {hasHref ? (
                              <Link
                                href={(item as any).href}
                                className="text-sm md:text-base text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                              >
                                {item.text}
                              </Link>
                            ) : (
                              <span className="text-sm md:text-base text-gray-700 dark:text-gray-300">
                                {item.text}
                              </span>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* RECRUITMENT */}
            <div className="flex flex-col">
              <div className="bg-blue-900 text-white p-3 rounded-t-lg shadow-lg">
                <h3 className="text-sm md:text-lg font-bold tracking-wide">
                  RECRUITMENT
                </h3>
              </div>

              <div className="bg-white dark:bg-slate-800 p-4 md:p-6 rounded-b-lg shadow-lg border-x border-b border-gray-200 dark:border-gray-700 auto-scroll h-[clamp(150px,20vh,250px)]">
                <div className="auto-scroll-inner">
                  <div className="scroll-block">
                    <ul className="space-y-3">
                      {recruitmentItems.map((item) => (
                        <li
                          key={item.id}
                          className="flex items-start space-x-2"
                        >
                          <ChevronRight className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                          <span className="text-sm md:text-base text-gray-700 dark:text-gray-300 font-semibold">
                            {item.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="scroll-block" aria-hidden>
                    <ul className="space-y-3">
                      {recruitmentItems.map((item) => (
                        <li
                          key={`copy-rec-${item.id}`}
                          className="flex items-start space-x-2"
                        >
                          <ChevronRight className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                          <span className="text-sm md:text-base text-gray-700 dark:text-gray-300 font-semibold">
                            {item.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}