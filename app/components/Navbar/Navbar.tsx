"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Menu, X, ChevronDown, ExternalLink, ChevronRight } from "lucide-react";
import Image from "next/image";

type AnyItem = any;

export default function HomeNavbar() {
  const router = useRouter();

  // UI state
  const [isOpen, setIsOpen] = useState(false); // mobile main menu
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null); // desktop top-level dropdown hover
  const [activeSubDropdown, setActiveSubDropdown] = useState<string | null>(null); // desktop first-level sub hover
  const [activeProgram, setActiveProgram] = useState<string | null>(null); // desktop program hover (BTech/MTech -> show batches)

  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null); // mobile top-level dropdown (People / Research / ...)
  const [openMobileSub, setOpenMobileSub] = useState<string | null>(null); // mobile sub-dropdown under a top-level item (e.g., under People -> Alumni or BTech Students)
  const [openMobileNested, setOpenMobileNested] = useState<string | null>(null); // mobile nested key for program batches (e.g., "People:Alumni:BTech")

  // Helpers for mobile toggles
  const toggleMobileDropdown = (name: string) => {
    setOpenMobileDropdown((prev) => (prev === name ? null : name));
    // collapse lower-level when switching top-level
    setOpenMobileSub(null);
    setOpenMobileNested(null);
  };

  const toggleMobileSub = (name: string) => {
    setOpenMobileSub((prev) => (prev === name ? null : name));
    // collapse nested when switching sub
    setOpenMobileNested(null);
  };

  const toggleMobileNested = (key: string) => {
    setOpenMobileNested((prev) => (prev === key ? null : key));
  };

  // Navigation data (Alumni has nested BTech (batches) and MTech (single batch))
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
      href: "#",
      hasDropdown: true,
      dropdownItems: [
        { name: "Courses", href: "/teaching/courses" },
        { name: "Moodle Login", href: "https://lms.iiti.ac.in/" }
      ]
    },
    {
      name: "Programs",
      href: "#",
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
      href: "#",
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
      href: "#",
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
    // CHANGED: "Seminar & Outreach" -> "Student Corner" with dropdown items
    {
      name: "Student Corner",
      href: "#",
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

  const quickLinks = [{ name: "IIT Indore", href: "https://www.iiti.ac.in/", icon: <ExternalLink size={14} /> }];

  return (
    <>
      {/* header/top brand */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white relative overflow-hidden select-none">
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

        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20 py-6 md:py-8 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-center space-y-4 lg:space-y-0">
            <div className="flex items-center space-x-3 md:space-x-6">
              <a href="https://www.iiti.ac.in/" target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
                <div className="rounded-xl p-1.5 md:p-2">
                  {/* Enlarged CSE logo - uses next/image for better optimization */}
                  <Image
                    src="/png/cselogo.png"
                    alt="CSE IITI Logo"
                    width={340}
                    height={340}
                    className="w-32 h-32 md:w-44 md:h-44 object-contain"
                    onError={(e) => {
                      // next/image doesn't allow direct onError manipulation in the same way as <img>,
                      // but keeping this for parity if switching to <img> is desired.
                    }}
                    priority
                  />
                </div>
              </a>

              <div className="flex flex-col justify-center pb-4 md:pb-6">
                <div className="mb-2 md:mb-3">
                  <span className="inline-block px-2 md:px-3 py-0.5 md:py-1 bg-blue-600/20 text-blue-300 rounded-full text-xs md:text-sm font-medium border border-blue-500/30">
                    DEPARTMENT OF
                  </span>
                </div>
                <h1 className="pb-2 md:pb-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent mb-2 md:mb-3 tracking-tight leading-tight">
                  <span className="hidden md:inline">Computer Science and Engineering</span>
                  <span className="md:hidden">Computer Science<br />and Engineering</span>
                </h1>

                <div className="space-y-1 md:space-y-2">
                  <p className="text-sm md:text-lg font-semibold text-blue-200 tracking-wide">भारतीय प्रौद्योगिकी संस्थान इंदौर</p>
                  <p className="text-xs md:text-base font-medium text-white/80">Indian Institute of Technology Indore</p>
                </div>
              </div>
            </div>

            {/* SECOND LOGO - hidden on small screens (mobile) */}
            <a
              href="https://www.iiti.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 hidden md:block"
            >
              <div className="rounded-xl p-1.5 md:p-2">
                {/* Keep as <img> so hiding with tailwind behaves predictably for very small screens */}
                <img
                  src="/png/iitlogo.png"
                  alt="IITI Logo"
                  className="w-24 h-24 md:w-36 md:h-36 object-contain"
                  onError={(e) => {
                    const t = e.target as HTMLImageElement;
                    t.style.display = "none";
                  }}
                />
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* navbar */}
      <nav className="sticky top-0 z-50 transition-all duration-500 bg-gradient-to-r from-blue-900/95 via-blue-800/95 to-blue-900/95 backdrop-blur-lg shadow-xl">
        <div className="w-full px-2 sm:px-4 lg:px-8 xl:px-12 2xl:px-20">
          {/* Desktop */}
          <div className="hidden lg:flex items-center justify-between">
            <div className="flex items-center flex-1 justify-evenly">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => {
                    setActiveDropdown((prev) => (prev === item.name ? null : prev));
                    setActiveSubDropdown(null);
                    setActiveProgram(null);
                  }}
                >
                  <a
                    href={item.href}
                    className="relative px-3 xl:px-4 2xl:px-5 py-4 xl:py-5 font-medium transition-all duration-300 flex items-center space-x-1 whitespace-nowrap text-white/90 hover:text-white"
                    target={typeof item.href === "string" && item.href.startsWith("http") ? "_blank" : "_self"}
                    rel={typeof item.href === "string" && item.href.startsWith("http") ? "noopener noreferrer" : ""}
                    onClick={(e) => {
                      if (item.hasDropdown) e.preventDefault();
                    }}
                  >
                    <span className="font-semibold tracking-wide text-sm md:text-lg lg:text-lg">{item.name}</span>
                    {item.hasDropdown && <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === item.name ? "rotate-180" : ""}`} />}
                  </a>

                  <div className={`absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 transform origin-left transition-transform duration-300 ${activeDropdown === item.name ? "scale-x-100" : "scale-x-0"}`} />

                  {/* Desktop dropdown panel */}
                  {item.hasDropdown && item.dropdownItems && activeDropdown === item.name && (
                    <div className="absolute top-full left-0 mt-0 z-50 min-w-[220px]">
                      <div className="bg-white shadow-2xl rounded-b-xl border border-gray-200/50 py-2">
                        {(item.dropdownItems || []).map((dropdownItem: AnyItem) => (
                          <div
                            key={dropdownItem.name}
                            className="relative"
                            onMouseEnter={() => {
                              if (dropdownItem.subDropdownItems) {
                                setActiveSubDropdown(dropdownItem.name);
                              } else {
                                setActiveSubDropdown(null);
                              }
                            }}
                            onMouseLeave={() => {
                              setActiveSubDropdown((prev) => (prev === dropdownItem.name ? null : prev));
                              setActiveProgram(null);
                            }}
                          >
                            {/* top-level dropdown item (link or opener) */}
                            <button
                              onClick={(e) => {
                                if (dropdownItem.subDropdownItems) {
                                  e.preventDefault();
                                  setActiveSubDropdown(dropdownItem.name);
                                } else if (dropdownItem.href) {
                                  // link to page
                                  router.push(dropdownItem.href);
                                  setActiveDropdown(null);
                                }
                              }}
                              className="w-full text-left flex items-center justify-between px-4 py-2.5 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 hover:text-blue-600 transition-all duration-200 font-medium text-sm"
                            >
                              <span>{dropdownItem.name}</span>
                              {/* Only show chevron-right if this dropdownItem actually has subDropdownItems */}
                              {dropdownItem.subDropdownItems && <ChevronRight size={16} />}
                            </button>

                            {/* subDropdown (right flyout) for dropdownItem that has subDropdownItems */}
                            {dropdownItem.subDropdownItems && activeSubDropdown === dropdownItem.name && (
                              <div className="absolute left-full top-0 w-56 bg-white shadow-2xl rounded-r-xl border border-gray-200/50 z-50">
                                <div className="py-2">
                                  {(dropdownItem.subDropdownItems || []).map((subItem: AnyItem) => {
                                    const href = subItem.href;
                                    const nested = subItem.subDropdownItems;

                                    // If a simple link (MS/PhD or batch), render Link
                                    if (typeof href === "string" && href.length > 0 && !nested) {
                                      return (
                                        <Link key={subItem.name} href={href} className="block px-4 py-2.5 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 hover:text-blue-600 transition-all duration-200 font-medium text-sm" onClick={() => { setActiveDropdown(null); setActiveSubDropdown(null); }}>
                                          {subItem.name}
                                        </Link>
                                      );
                                    }

                                    // If this subItem has nested batches (program -> batches)
                                    if (nested) {
                                      return (
                                        <div key={subItem.name} className="relative"
                                          onMouseEnter={() => setActiveProgram(subItem.name)}
                                          onMouseLeave={() => setActiveProgram(null)}
                                        >
                                          <div className="w-full flex items-center justify-between px-4 py-2.5 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 hover:text-blue-600 transition-all duration-200 font-medium text-sm">
                                            <span>{subItem.name}</span>
                                            <ChevronRight size={14} />
                                          </div>

                                          {activeProgram === subItem.name && (
                                            <div
                                              className="absolute left-full top-0 bg-white shadow-2xl rounded-r-xl border border-gray-200/50 z-50
                                                         max-h-[400px] overflow-y-auto px-2 py-3 w-[450px] lg:w-[520px]"
                                            >
                                              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
                                                {(nested || []).map((batch: AnyItem) => (
                                                  <Link
                                                    key={batch.name}
                                                    href={batch.href}
                                                    className="px-3 py-2 bg-white rounded-md border border-gray-200 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 hover:text-blue-600 transition-all duration-200 text-sm font-medium text-center whitespace-nowrap"
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
                                            </div>
                                          )}
                                        </div>
                                      );
                                    }

                                    // fallback
                                    return (
                                      <div key={subItem.name} className="block px-4 py-2.5 text-gray-500 font-medium text-sm">
                                        {subItem.name}
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}

            </div>

            <div className="px-2 text-white">
              <button className="p-2 rounded-lg hover:bg-white/10 transition-all duration-300" aria-label="Search">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile */}
          <div className="lg:hidden">
            <div className="flex items-center justify-between px-4 py-3 bg-transparent">
              <div className="flex items-center space-x-2">
                {/* small icon removed from mobile earlier — keep only text */}
                <span className="font-bold text-base md:text-lg text-white">CSE IITI</span>
              </div>
              <div className="flex items-center space-x-2">
                <button className="p-2 rounded-xl transition-all text-white hover:bg-white/10" aria-label="Search">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
                <button onClick={() => setIsOpen((s) => !s)} className="p-2 rounded-xl transition-all text-white hover:bg-white/10" aria-label="Toggle menu">
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>

            {isOpen && (
              <div className="lg:hidden border-t bg-blue-900/95 backdrop-blur-lg border-blue-700">
                <div className="px-3 py-3 space-y-1 max-h-[70vh] overflow-y-auto">
                  {navItems.map((item) => (
                    <div key={item.name}>
                      {item.hasDropdown ? (
                        <button
                          onClick={() => toggleMobileDropdown(item.name)}
                          className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-all font-medium text-white hover:bg-white/10"
                        >
                          <span className="font-semibold text-base md:text-lg">{item.name}</span>
                          <ChevronDown size={16} className={`transition-transform duration-300 ${openMobileDropdown === item.name ? "rotate-180" : ""}`} />
                        </button>
                      ) : (
                        <Link href={item.href} onClick={() => { setIsOpen(false); }} className="block px-3 py-2.5 rounded-xl transition-all font-medium text-white hover:bg-white/10">
                          <span className="font-semibold text-base md:text-lg">{item.name}</span>
                        </Link>
                      )}

                      {item.hasDropdown && openMobileDropdown === item.name && (
                        <div className="pl-3 mt-1 mb-1 space-y-1 border-l-2 border-blue-700 ml-3">
                          {(item.dropdownItems || []).map((dropdownItem: AnyItem) => (
                            <div key={dropdownItem.name}>
                              {/* If dropdownItem has nested subDropdownItems (e.g. Alumni) */}
                              {dropdownItem.subDropdownItems ? (
                                <>
                                  <button
                                    onClick={() => {
                                      // toggle this dropdownItem (top-level under People)
                                      toggleMobileSub(dropdownItem.name);
                                    }}
                                    className="w-full flex items-center justify-between px-3 py-2 rounded-lg transition-all text-sm font-medium text-white/80 hover:bg-white/10"
                                  >
                                    <span>{dropdownItem.name}</span>
                                    <ChevronDown size={14} className={`transition-transform duration-200 ${openMobileSub === dropdownItem.name ? "rotate-180" : ""}`} />
                                  </button>

                                  {/* show sub items (programs like BTech, MTech) */}
                                  {openMobileSub === dropdownItem.name && (
                                    <div className="pl-3 mt-1 space-y-1">
                                      {(dropdownItem.subDropdownItems || []).map((subItem: AnyItem) => (
                                        <div key={subItem.name} className="space-y-1">
                                          {subItem.subDropdownItems ? (
                                            <>
                                              {/* This toggles nested batches grid. Use a unique key so it doesn't conflict. */}
                                              <button
                                                onClick={() => {
                                                  const key = `${item.name}:${dropdownItem.name}:${subItem.name}`;
                                                  toggleMobileNested(key);
                                                }}
                                                className="w-full flex items-center justify-between px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white"
                                              >
                                                <span>{subItem.name}</span>
                                                <ChevronDown size={12} className={`transition-transform duration-200 ${openMobileNested === `${item.name}:${dropdownItem.name}:${subItem.name}` ? "rotate-180" : ""}`} />
                                              </button>

                                              {/* ===== Responsive grid for batches (mobile) ===== */}
                                              {openMobileNested === `${item.name}:${dropdownItem.name}:${subItem.name}` && (
                                                <div className="pl-3 mt-2">
                                                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                                                    {(subItem.subDropdownItems || []).map((batch: AnyItem) => (
                                                      <Link
                                                        key={batch.name}
                                                        href={batch.href}
                                                        onClick={() => { setIsOpen(false); setOpenMobileDropdown(null); setOpenMobileSub(null); setOpenMobileNested(null); }}
                                                        className="block px-2 py-2 rounded-md text-xs text-center transition-all text-white/90 hover:bg-white/10"
                                                      >
                                                        {batch.name}
                                                      </Link>
                                                    ))}
                                                  </div>
                                                </div>
                                              )}
                                            </>
                                          ) : (
                                            // simple link (MS/PhD)
                                            <Link key={subItem.name} href={subItem.href} onClick={() => { setIsOpen(false); setOpenMobileDropdown(null); setOpenMobileSub(null); setOpenMobileNested(null); }} className="block px-3 py-2 rounded-md text-sm transition-all text-white/80 hover:bg-white/10">
                                              {subItem.name}
                                            </Link>
                                          )}
                                        </div>
                                      ))}
                                    </div>
                                  )}
                                </>
                              ) : (
                                // dropdownItem without nested items (normal dropdown)
                                <>
                                  <button
                                    onClick={() => {
                                      if (dropdownItem.href) {
                                        setIsOpen(false);
                                        router.push(dropdownItem.href);
                                      }
                                    }}
                                    className="flex items-center justify-between px-3 py-2 rounded-lg transition-all text-sm font-medium text-white/80 hover:bg-white/10"
                                  >
                                    <span>{dropdownItem.name}</span>
                                    {dropdownItem.subDropdownItems && <ChevronRight size={14} className="opacity-60" />}
                                  </button>

                                  {dropdownItem.subDropdownItems && openMobileSub === dropdownItem.name && (
                                    <div className="pl-2 mt-1 space-y-1">
                                      {dropdownItem.subDropdownItems.map((subItem: AnyItem) => (
                                        <Link key={subItem.name} href={subItem.href} onClick={() => { setIsOpen(false); setOpenMobileDropdown(null); setOpenMobileSub(null); setOpenMobileNested(null); }} className="block px-3 py-2 rounded-md text-xs transition-all text-white/80 hover:bg-white/10">
                                          {subItem.name}
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
                    </div>
                  ))}
                </div>

                <div className="px-3 py-3 border-t border-blue-700">
                  <div className="grid grid-cols-1 gap-2">
                    {quickLinks.map((link) => (
                      <Link key={link.name} href={link.href} onClick={() => { setIsOpen(false); }} className="flex items-center space-x-2 px-3 py-2 rounded-lg transition-all text-sm font-medium text-white/80 hover:bg-white/10">
                        {link.icon}
                        <span>{link.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}