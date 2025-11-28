"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Menu, X, ChevronDown, ExternalLink, ChevronRight } from "lucide-react";

type AnyItem = any;

export default function HomeNavbar() {
  const router = useRouter();

  // NAV UI State
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState<string | null>(null);
  const [activeProgram, setActiveProgram] = useState<string | null>(null);

  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  const [openMobileSub, setOpenMobileSub] = useState<string | null>(null);
  const [openMobileNested, setOpenMobileNested] = useState<string | null>(null);

  const toggleMobileDropdown = (name: string) => {
    setOpenMobileDropdown(openMobileDropdown === name ? null : name);
    setOpenMobileSub(null);
    setOpenMobileNested(null);
  };

  const toggleMobileSub = (name: string) => {
    setOpenMobileSub(openMobileSub === name ? null : name);
    setOpenMobileNested(null);
  };

  const toggleMobileNested = (key: string) => {
    setOpenMobileNested(openMobileNested === key ? null : key);
  };

  // Full navigation structure (unchanged)
  const navItems: AnyItem[] = [
    { name: "Home", href: "/" },
    {
      name: "People",
      href: "#",
      hasDropdown: true,
      dropdownItems: [
        { name: "Faculty", href: "/people/faculty" },
        { name: "Staff", href: "/people/staff" },
        { name: "Former Faculty", href: "/people/former-faculty" },
        {
          name: "BTech Students",
          href: "/people/btech-students",
          subDropdownItems: [
            { name: "2025", href: "/people/btech-students/2025" },
            { name: "2024", href: "/people/btech-students/2024" },
            { name: "2023", href: "/people/btech-students/2023" },
            { name: "2022", href: "/people/btech-students/2022" }
          ]
        },
        {
          name: "MTech Students",
          href: "/people/mtech-students",
          subDropdownItems: [
            { name: "2025", href: "/people/mtech-students/2025" },
            { name: "2024", href: "/people/mtech-students/2024" }
          ]
        },
        { name: "MS Students", href: "/people/ms-students" },
        { name: "PhD Students", href: "/people/phd-students" },

        // Alumni with nested items
        {
          name: "Alumni",
          href: "#",
          subDropdownItems: [
            {
              name: "BTech",
              subDropdownItems: [
                { name: "2009-13", href: "/people/alumni/btech/2009-13" },
                { name: "2010-14", href: "/people/alumni/btech/2010-14" },
                { name: "2011-15", href: "/people/alumni/btech/2011-15" },
                { name: "2012-16", href: "/people/alumni/btech/2012-16" },
                { name: "2013-17", href: "/people/alumni/btech/2013-17" },
                { name: "2014-18", href: "/people/alumni/btech/2014-18" },
                { name: "2015-19", href: "/people/alumni/btech/2015-19" },
                { name: "2016-20", href: "/people/alumni/btech/2016-20" },
                { name: "2017-21", href: "/people/alumni/btech/2017-21" },
                { name: "2018-22", href: "/people/alumni/btech/2018-22" },
                { name: "2019-23", href: "/people/alumni/btech/2019-23" },
                { name: "2020-24", href: "/people/alumni/btech/2020-24" },
                { name: "2021-25", href: "/people/alumni/btech/2021-25" }
              ]
            },
            {
              name: "MTech",
              subDropdownItems: [{ name: "2023-25", href: "/people/alumni/mtech" }]
            },
            { name: "MS", href: "/people/alumni/ms" },
            { name: "PhD", href: "/people/alumni/phd" }
          ]
        }
      ]
    },

    {
      name: "Research",
      href: "#",
      hasDropdown: true,
      dropdownItems: [
        { name: "Area", href: "/research/areas" },
        {
          name: "Sponsored Projects",
          href: "/research/sponsored-projects",
          subDropdownItems: [
            { name: "Research Projects", href: "/research/sponsored-projects/research" },
            { name: "GIAN Projects", href: "/research/sponsored-projects/gian" },
            { name: "Fellowships", href: "/research/sponsored-projects/fellowships" }
          ]
        },
        {
          name: "Publication",
          href: "/research/publications",
          subDropdownItems: [
            { name: "Journal", href: "/research/publications/journal" },
            { name: "Conference", href: "/research/publications/conference" },
            { name: "Patent", href: "/research/publications/patent" },
            { name: "Books", href: "/research/publications/books" },
            { name: "Book Chapter", href: "/research/publications/book-chapter" }
          ]
        }
      ]
    },

    {
      name: "Teaching",
      hasDropdown: true,
      dropdownItems: [
        { name: "Courses", href: "/teaching/courses" },
        { name: "Moodle Login", href: "https://lms.iiti.ac.in/" }
      ]
    },

    {
      name: "Programs",
      hasDropdown: true,
      dropdownItems: [
        { name: "BTech", href: "/programs/btech" },
        { name: "MTech", href: "/programs/mtech" },
        { name: "MS", href: "/programs/ms" },
        { name: "PhD", href: "/programs/phd" }
      ]
    },

    {
      name: "About us",
      hasDropdown: true,
      dropdownItems: [
        { name: "Department", href: "/about/department" },
        { name: "Administration", href: "/about/administration" },
        { name: "Facilities", href: "/about/facilities" },
        { name: "Achievements", href: "/about/achievements" },
        { name: "Contact us", href: "/about/contact" },
        { name: "About Indore", href: "/about/indore" }
      ]
    },

    {
      name: "Join Us",
      hasDropdown: true,
      dropdownItems: [
        { name: "Prospective Faculty", href: "/join/faculty" },
        { name: "Prospective BTech Students", href: "/join/btech" },
        { name: "Prospective MTech Students", href: "/join/mtech" },
        { name: "Prospective MS Students", href: "/join/ms" },
        { name: "Prospective PhD Students", href: "/join/phd" },
        { name: "Interns", href: "/join/interns" }
      ]
    },

    { name: "Seminar & Outreach", href: "https://events.cse.iiti.ac.in/" },
    { name: "How to reach", href: "/contact" }
  ];

  return (
    <>
      {/* ===== HERO / TOP HEADER ===== */}
      <header className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255,255,255,0.08) 2%, transparent 0%),
                                radial-gradient(circle at 75px 75px, rgba(255,255,255,0.08) 2%, transparent 0%)`,
              backgroundSize: "100px 100px",
            }}
          />
        </div>

        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20 pt-10 md:pt-16 relative z-10">
          <div className="max-w-7xl mx-auto w-full">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-[clamp(96px,12vw,220px)]">
                  <Image
                    src="/png/cselogo.png"
                    alt="CSE Department Logo"
                    width={1200}
                    height={1200}
                    className="w-full h-auto object-contain animate-float-slow"
                    priority
                  />
                </div>
              </div>

              <div className="inline-flex items-center px-5 py-2 bg-blue-600/10 rounded-full border border-blue-500/30 mb-4">
                <span className="text-xs sm:text-sm font-semibold text-blue-200 tracking-wide uppercase">
                  DEPARTMENT OF COMPUTER SCIENCE AND ENGINEERING
                </span>
              </div>

              <h2 className="text-lg md:text-xl text-blue-100 font-medium mb-4">
                भारतीय प्रौद्योगिकी संस्थान इंदौर • Indian Institute of Technology Indore
              </h2>
            </div>
          </div>
        </div>
      </header>

      <style jsx>{`
        @keyframes floatSlow {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
          100% { transform: translateY(0px); }
        }
        .animate-float-slow {
          animation: floatSlow 6s ease-in-out infinite;
        }
        @media (max-width: 640px) {
          header { padding-top: 2.5rem; }
        }
      `}</style>

      {/* ================= NAVBAR (placed below the header) ================= */}
      {/* Important: overflow-visible so dropdowns can extend outside */}
      <nav className="sticky top-0 z-50 bg-blue-800 shadow-xl text-white overflow-visible">
        <div className="w-full px-6 overflow-visible">
          {/* DESKTOP NAV */}
          <div className="hidden lg:flex justify-between items-center">
            <div className="flex flex-1 justify-evenly">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => {
                    setActiveDropdown(null);
                    setActiveSubDropdown(null);
                    setActiveProgram(null);
                  }}
                >
                  {item.hasDropdown ? (
                    <button
                      className="px-4 py-4 font-semibold hover:text-white/90 flex items-center gap-1"
                      onClick={(e) => item.hasDropdown && e.preventDefault()}
                    >
                      {item.name}
                      {item.hasDropdown && <ChevronDown size={14} />}
                    </button>
                  ) : (
                    // Render real link for items without dropdown (fixes Seminar & Outreach, How to reach)
                    <Link
                      href={item.href}
                      target={typeof item.href === "string" && item.href.startsWith("http") ? "_blank" : undefined}
                      rel={typeof item.href === "string" && item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="px-4 py-4 font-semibold hover:text-white/90 flex items-center gap-1"
                    >
                      {item.name}
                    </Link>
                  )}

                  {/* --- DROPDOWN PANEL --- */}
                  {item.hasDropdown && activeDropdown === item.name && item.dropdownItems && (
                    <div
                      // ensure this panel is above everything and overflow visible
                      className="absolute top-full bg-white text-black shadow-xl rounded-md py-2 min-w-[220px]"
                      style={{ zIndex: 9999, overflow: "visible" }}
                    >
                      {item.dropdownItems.map((dItem: AnyItem) => (
                        <div
                          key={dItem.name}
                          className="relative"
                          onMouseEnter={() => (dItem.subDropdownItems ? setActiveSubDropdown(dItem.name) : null)}
                          onMouseLeave={() => setActiveSubDropdown(null)}
                        >
                          <button
                            className="flex justify-between w-full px-4 py-2 hover:bg-gray-100 text-left"
                            onClick={() => {
                              if (dItem.href) router.push(dItem.href);
                            }}
                          >
                            {dItem.name}
                            {dItem.subDropdownItems && <ChevronRight size={14} />}
                          </button>

                          {/* SUB DROPDOWN */}
                          {dItem.subDropdownItems && activeSubDropdown === dItem.name && (
                            <div
                              className="absolute left-full top-0 bg-white shadow-xl rounded-md py-2 min-w-[240px]"
                              style={{ zIndex: 10000, overflow: "visible" }}
                            >
                              {dItem.subDropdownItems.map((sItem: AnyItem) => {
                                // Program with batches (nested mega)
                                if (sItem.subDropdownItems) {
                                  return (
                                    <div key={sItem.name} onMouseEnter={() => setActiveProgram(sItem.name)} onMouseLeave={() => setActiveProgram(null)}>
                                      <div className="flex justify-between px-4 py-2 hover:bg-gray-100">
                                        {sItem.name}
                                        <ChevronRight size={14} />
                                      </div>

                                      {/* nested mega panel (batches) */}
                                      {activeProgram === sItem.name && (
                                        <div
                                          className="absolute left-full top-0 bg-white shadow-xl rounded-md p-3 grid grid-cols-2 gap-2 max-h-[400px] overflow-y-auto"
                                          style={{ zIndex: 10001, minWidth: 360 }}
                                        >
                                          {sItem.subDropdownItems.map((batch: AnyItem) => (
                                            <Link
                                              key={batch.name}
                                              href={batch.href}
                                              className="px-2 py-2 bg-gray-50 hover:bg-gray-100 rounded text-sm text-center whitespace-nowrap"
                                              onClick={() => {
                                                setActiveDropdown(null);
                                                setActiveSubDropdown(null);
                                                setActiveProgram(null);
                                              }}
                                            >
                                              {batch.name}
                                            </Link>
                                          ))}
                                        </div>
                                      )}
                                    </div>
                                  );
                                }

                                // Simple link
                                return (
                                  <Link key={sItem.name} href={sItem.href} className="block px-4 py-2 hover:bg-gray-100">
                                    {sItem.name}
                                  </Link>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Search icon */}
            <button className="px-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 01-14 0z" />
              </svg>
            </button>
          </div>

          {/* MOBILE NAV */}
          <div className="lg:hidden py-3 flex justify-between">
            <span className="font-bold text-lg">Menu</span>
            <button onClick={() => setIsOpen(!isOpen)} aria-label="toggle mobile menu">
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>

          {isOpen && (
            <div className="lg:hidden space-y-2 pb-4">
              {navItems.map((item) => (
                <div key={item.name}>
                  {!item.hasDropdown ? (
                    <Link href={item.href} className="block px-4 py-2 bg-blue-700 rounded" onClick={() => setIsOpen(false)}>
                      {item.name}
                    </Link>
                  ) : (
                    <>
                      <button className="w-full px-4 py-2 bg-blue-700 rounded flex justify-between" onClick={() => toggleMobileDropdown(item.name)}>
                        {item.name}
                        <ChevronDown className={`transform ${openMobileDropdown === item.name ? "rotate-180" : ""}`} />
                      </button>

                      {openMobileDropdown === item.name && (
                        <div className="pl-4 space-y-2">
                          {item.dropdownItems.map((dItem: AnyItem) => (
                            <div key={dItem.name}>
                              {!dItem.subDropdownItems ? (
                                <Link href={dItem.href} className="block px-4 py-2 bg-blue-600 rounded" onClick={() => setIsOpen(false)}>
                                  {dItem.name}
                                </Link>
                              ) : (
                                <>
                                  <button className="w-full px-4 py-2 bg-blue-600 rounded flex justify-between" onClick={() => toggleMobileSub(dItem.name)}>
                                    {dItem.name}
                                    <ChevronDown className={`transform ${openMobileSub === dItem.name ? "rotate-180" : ""}`} />
                                  </button>

                                  {openMobileSub === dItem.name && (
                                    <div className="pl-4 space-y-2">
                                      {dItem.subDropdownItems.map((sItem: AnyItem) => (
                                        <div key={sItem.name}>
                                          {!sItem.subDropdownItems ? (
                                            <Link href={sItem.href} className="block px-4 py-2 bg-blue-500 rounded" onClick={() => setIsOpen(false)}>
                                              {sItem.name}
                                            </Link>
                                          ) : (
                                            <>
                                              <button className="w-full px-4 py-2 bg-blue-500 rounded flex justify-between" onClick={() => toggleMobileNested(`${item.name}:${dItem.name}:${sItem.name}`)}>
                                                {sItem.name}
                                                <ChevronDown className={`transform ${openMobileNested === `${item.name}:${dItem.name}:${sItem.name}` ? "rotate-180" : ""}`} />
                                              </button>

                                              {openMobileNested === `${item.name}:${dItem.name}:${sItem.name}` && (
                                                <div className="pl-4 grid grid-cols-2 gap-2">
                                                  {sItem.subDropdownItems.map((batch: AnyItem) => (
                                                    <Link key={batch.name} href={batch.href} className="block px-3 py-2 bg-blue-400 rounded text-center" onClick={() => setIsOpen(false)}>
                                                      {batch.name}
                                                    </Link>
                                                  ))}
                                                </div>
                                              )}
                                            </>
                                          )}
                                        </div>
                                      ))}
                                    </div>
                                  )}
                                </>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
