"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";

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

  // ---- Hover hide-delay logic ----
  const hideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const HIDE_DELAY_MS = 300; 

  const clearHideTimer = () => {
    if (hideTimerRef.current) {
      clearTimeout(hideTimerRef.current);
      hideTimerRef.current = null;
    }
  };

  const scheduleHideAll = (delay = HIDE_DELAY_MS) => {
    clearHideTimer();
    hideTimerRef.current = setTimeout(() => {
      setActiveDropdown(null);
      setActiveSubDropdown(null);
      setActiveProgram(null);
      hideTimerRef.current = null;
    }, delay);
  };

  // Mobile toggles
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

  // Full navigation structure
  const navItems: AnyItem[] = [
    { name: "Home", href: "/" },
    {
      name: "People",
      href: "#",
      hasDropdown: true,
      dropdownItems: [
        { name: "Faculty", href: "/people/faculty" },
        { name: "Staff", href: "/people/staff" },
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
        { name: "MS(Research) Students", href: "/people/ms-students" },
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
            { name: "MS(Research)", href: "/people/alumni/ms" },
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
        { name: "MS(Research)", href: "/programs/ms" },
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
        { name: "Prospective MS(Research) Students", href: "/join/ms" },
        { name: "Prospective PhD Students", href: "/join/phd" },
        { name: "Interns", href: "/join/interns" }
      ]
    },

    // CHANGED: "Seminar & Outreach" -> "Student Corner" with dropdown
    {
      name: "Student Corner",
      hasDropdown: true,
      dropdownItems: [
        { name: "Seminar & Outreach", href: "https://events.cse.iiti.ac.in/" },
        { name: "Placement Details", href: "/StudentCorner/PlacementDetails" },
        { name: "Student Association", href: "#" }, 
        { name: "Forms", href: "/StudentCorner/forms" } 
      ]
    },

    { name: "How to reach", href: "/contact" }
  ];

  return (
    <>
      {/* ===== HERO / TOP HEADER ===== */}
      <header className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
        <div className="absolute inset-0 opacity-8 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255,255,255,0.04) 2%, transparent 0%),
                                radial-gradient(circle at 75px 75px, rgba(255,255,255,0.03) 2%, transparent 0%)`,
              backgroundSize: "120px 120px",
            }}
          />
        </div>

        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20 pt-10 md:pt-16 relative z-10">
          <div className="w-full">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-[clamp(96px,12vw,220px)] aspect-square">
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

              <div className="inline-flex items-center px-5 py-2 bg-white/6 rounded-full border border-white/10 mb-4">
                <span className="text-xs sm:text-sm font-semibold text-white/90 tracking-wide uppercase">
                  DEPARTMENT OF COMPUTER SCIENCE AND ENGINEERING
                </span>
              </div>

              <h2 className="text-lg md:text-xl text-white/90 font-medium mb-4">
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
        /* hide horizontal scrollbar for the nav */
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* ================= NAVBAR (placed below the header) ================= */}
      <nav className="sticky top-0 z-50 bg-blue-800 text-white border-b border-blue-700">
        <div className="w-full px-0">
          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center w-full">
            <div className="flex w-full flex-wrap">
              {navItems.map((item) => {
                const isActive = activeDropdown === item.name;

                // CHANGED: prevent wrap logic now checks for "Student Corner" if desired,
                // or you can leave it if "Student Corner" fits.
                const preventWrap = item.name === "Student Corner";

                return (
                  <div
                    key={item.name}
                    className="relative flex-1 min-w-[120px] text-center"
                    // apply a larger min-width inline when needed so other items keep their layout
                    style={preventWrap ? { minWidth: "160px" } : undefined}
                    onMouseEnter={() => {
                      clearHideTimer();
                      setActiveDropdown(item.name);
                    }}
                    onMouseLeave={() => {
                      scheduleHideAll();
                    }}
                  >
                    <div className="inline-block w-full">
                      {item.hasDropdown ? (
                        <button
                          className={`w-full px-4 py-3 font-medium text-[15px] md:text-base rounded-md transition-colors hover:bg-blue-700/40 focus:outline-none flex items-center justify-center gap-2 ${isActive ? "text-sky-300" : "text-white"}`}
                          onClick={(e) => item.hasDropdown && e.preventDefault()}
                        >
                          <span className={preventWrap ? "whitespace-nowrap" : ""}>{item.name}</span>
                          {item.hasDropdown && <ChevronDown size={14} />}
                        </button>
                      ) : (
                        <Link
                          href={item.href}
                          target={typeof item.href === "string" && item.href.startsWith("http") ? "_blank" : undefined}
                          rel={typeof item.href === "string" && item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className={`inline-block w-full px-4 py-3 font-medium text-[15px] md:text-base rounded-md hover:bg-white/6 transition-colors text-white text-center ${preventWrap ? "whitespace-nowrap" : ""}`}
                          onMouseEnter={() => clearHideTimer()}
                          onMouseLeave={() => scheduleHideAll()}
                          onClick={() => {
                            setActiveDropdown(null);
                            setActiveSubDropdown(null);
                            setActiveProgram(null);
                          }}
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>

                    {/* Desktop dropdowns */}
                    {item.hasDropdown && item.dropdownItems && (
                      <div
                        onMouseEnter={() => {
                          clearHideTimer();
                          setActiveDropdown(item.name);
                        }}
                        onMouseLeave={() => scheduleHideAll()}
                        className={`absolute left-1/2 transform -translate-x-1/2 top-full mt-3 rounded-2xl shadow-lg border bg-white/95 backdrop-blur-sm text-slate-800 min-w-[220px] transition-all duration-200 ease-out ${isActive ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}`}
                        style={{ zIndex: 9999, overflow: 'visible' }}
                      >
                        <div className="p-2">
                          {item.dropdownItems.map((dItem: AnyItem) => {
                            const isSubActive = activeSubDropdown === dItem.name;
                            return (
                              <div
                                key={dItem.name}
                                className="relative rounded-md"
                                onMouseEnter={() => {
                                  clearHideTimer();
                                  if (dItem.subDropdownItems) setActiveSubDropdown(dItem.name);
                                }}
                                onMouseLeave={() => {
                                  scheduleHideAll();
                                }}
                              >
                                <button
                                  className="flex justify-between items-center w-full px-3 py-2 rounded-md hover:bg-slate-50 text-left text-[14px]"
                                  onClick={() => {
                                    if (dItem.href) {
                                      router.push(dItem.href);
                                      setActiveDropdown(null);
                                      setActiveSubDropdown(null);
                                      setActiveProgram(null);
                                    }
                                  }}
                                >
                                  <span className="truncate">{dItem.name}</span>
                                  {dItem.subDropdownItems && <ChevronRight size={14} />}
                                </button>

                                {dItem.subDropdownItems && (
                                  <div
                                    onMouseEnter={() => {
                                      clearHideTimer();
                                      setActiveSubDropdown(dItem.name);
                                    }}
                                    onMouseLeave={() => scheduleHideAll()}
                                    className={`absolute left-full top-0 mt-0 rounded-2xl shadow-lg border bg-white/95 backdrop-blur-sm min-w-[240px] transform origin-left transition-all duration-180 ease-out ${isSubActive ? 'opacity-100 scale-100 translate-x-0 pointer-events-auto' : 'opacity-0 scale-95 -translate-x-2 pointer-events-none'}`}
                                    style={{ zIndex: 10000 }}
                                  >
                                    <div className="p-3">
                                      {dItem.subDropdownItems.map((sItem: AnyItem) => {
                                        if (sItem.subDropdownItems) {
                                          const isProg = activeProgram === sItem.name;
                                          return (
                                            <div
                                              key={sItem.name}
                                              className="relative"
                                              onMouseEnter={() => {
                                                clearHideTimer();
                                                setActiveProgram(sItem.name);
                                              }}
                                              onMouseLeave={() => scheduleHideAll()}
                                            >
                                              <div className="flex justify-between items-center px-3 py-2 rounded-md hover:bg-slate-50 text-[14px]">
                                                <span>{sItem.name}</span>
                                                <ChevronRight size={14} />
                                              </div>

                                              {isProg && (
                                                <div
                                                  onMouseEnter={() => {
                                                    clearHideTimer();
                                                    setActiveProgram(sItem.name);
                                                  }}
                                                  onMouseLeave={() => scheduleHideAll()}
                                                  className="absolute left-full top-0 mt-0 rounded-2xl shadow-lg border bg-white/95 backdrop-blur-sm p-3 grid grid-cols-2 gap-2 max-h-[420px] overflow-y-auto min-w-[320px] z-50"
                                                >
                                                  {sItem.subDropdownItems.map((batch: AnyItem) => (
                                                    <Link
                                                      key={batch.name}
                                                      href={batch.href}
                                                      className="px-2 py-2 bg-slate-50 hover:bg-slate-100 rounded text-[14px] text-center whitespace-nowrap"
                                                      onMouseDown={() => {
                                                        clearHideTimer();
                                                      }}
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

                                        return (
                                          <Link
                                            key={sItem.name}
                                            href={sItem.href}
                                            className="block px-3 py-2 rounded-md hover:bg-slate-50 text-[14px]"
                                            onMouseEnter={() => clearHideTimer()}
                                            onMouseLeave={() => scheduleHideAll()}
                                            onMouseDown={() => clearHideTimer()}
                                            onClick={() => {
                                              setActiveDropdown(null);
                                              setActiveSubDropdown(null);
                                              setActiveProgram(null);
                                            }}
                                          >
                                            {sItem.name}
                                          </Link>
                                        );
                                      })}
                                    </div>
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* MOBILE NAV */}
          <div className="lg:hidden py-3 flex justify-between items-center px-4">
            <span className="font-semibold text-lg">Menu</span>
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="toggle mobile menu"
              className="p-2 rounded-md hover:bg-white/06 transition"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>

          <div className="lg:hidden">
            <div
              className={`transition-all duration-300 ${isOpen ? 'max-h-none opacity-100 overflow-visible' : 'max-h-0 opacity-0 overflow-hidden'}`}
              style={{ WebkitOverflowScrolling: 'touch' }}
            >
              <div className="p-2 space-y-1">
                {navItems.map((item) => (
                  <div key={item.name}>
                    {/* SIMPLE LINK - clean, borderless */}
                    {!item.hasDropdown ? (
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-3 rounded-md text-white/95 hover:bg-white/06 transition transform hover:translate-x-1"
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <>
                        {/* FIRST LEVEL DROPDOWN BUTTON - clean */}
                        <button
                          onClick={() => toggleMobileDropdown(item.name)}
                          className="w-full px-4 py-3 rounded-md text-white/95 flex justify-between items-center hover:bg-white/06 transition transform hover:translate-x-1"
                        >
                          <span>{item.name}</span>
                          <ChevronDown className={`transition-transform ${openMobileDropdown === item.name ? "rotate-180" : ""}`} />
                        </button>

                        {/* Dropdown panel - no height limit when open */}
                        <div
                          className={`pl-3 mt-1 transition-all ${openMobileDropdown === item.name ? "max-h-none opacity-100 overflow-visible" : "max-h-0 opacity-0 overflow-hidden"}`}
                          style={{ WebkitOverflowScrolling: 'touch' }}
                        >
                          {item.dropdownItems.map((dItem: AnyItem) => (
                            <div key={dItem.name} className="pt-1">
                              {!dItem.subDropdownItems ? (
                                <Link
                                  href={dItem.href}
                                  onClick={() => setIsOpen(false)}
                                  className="block px-4 py-2 rounded-md text-white/90 hover:bg-white/06 transition transform hover:translate-x-1"
                                >
                                  {dItem.name}
                                </Link>
                              ) : (
                                <>
                                  {/* SECOND LEVEL BUTTON */}
                                  <button
                                    onClick={() => toggleMobileSub(dItem.name)}
                                    className="w-full px-4 py-2 rounded-md text-white/90 flex justify-between items-center hover:bg-white/06 transition transform hover:translate-x-1"
                                  >
                                    <span>{dItem.name}</span>
                                    <ChevronDown className={`transition-transform ${openMobileSub === dItem.name ? "rotate-180" : ""}`} />
                                  </button>

                                  <div
                                    className={`pl-3 mt-1 transition-all ${openMobileSub === dItem.name ? "max-h-none opacity-100 overflow-visible" : "max-h-0 opacity-0 overflow-hidden"}`}
                                    style={{ WebkitOverflowScrolling: 'touch' }}
                                  >
                                    {dItem.subDropdownItems.map((sItem: AnyItem) => (
                                      <div key={sItem.name} className="pt-1">
                                        {!sItem.subDropdownItems ? (
                                          <Link
                                            href={sItem.href}
                                            onClick={() => setIsOpen(false)}
                                            className="block px-3 py-2 rounded-md text-white/80 hover:bg-white/06 transition transform hover:translate-x-1"
                                          >
                                            {sItem.name}
                                          </Link>
                                        ) : (
                                          <>
                                            {/* THIRD LEVEL */}
                                            <button
                                              onClick={() => toggleMobileNested(`${item.name}:${dItem.name}:${sItem.name}`)}
                                              className="w-full px-3 py-2 rounded-md text-white/80 flex justify-between items-center hover:bg-white/06 transition transform hover:translate-x-1"
                                            >
                                              <span>{sItem.name}</span>
                                              <ChevronDown className={`transition-transform ${openMobileNested === `${item.name}:${dItem.name}:${sItem.name}` ? "rotate-180" : ""}`} />
                                            </button>

                                            <div
                                              className={`pl-3 mt-1 grid grid-cols-2 gap-2 transition-all ${openMobileNested === `${item.name}:${dItem.name}:${sItem.name}` ? "max-h-none opacity-100 overflow-visible" : "max-h-0 opacity-0 overflow-hidden"}`}
                                              style={{ WebkitOverflowScrolling: 'touch' }}
                                            >
                                              {sItem.subDropdownItems.map((batch: AnyItem) => (
                                                <Link
                                                  key={batch.name}
                                                  href={batch.href}
                                                  onClick={() => setIsOpen(false)}
                                                  className="block px-3 py-2 rounded-md text-white text-center hover:bg-white/06 transition transform hover:translate-x-1"
                                                >
                                                  {batch.name}
                                                </Link>
                                              ))}
                                            </div>
                                          </>
                                        )}
                                      </div>
                                    ))} 
                                  </div>
                                </>
                              )}
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}