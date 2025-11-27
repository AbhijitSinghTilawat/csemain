"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Menu, X, ChevronDown, ExternalLink, ChevronRight } from "lucide-react";

type Batch = { name: string; href: string };
type Program = { name: string; batches?: Batch[] };

export default function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState<string | null>(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  const [openMobileSubDropdown, setOpenMobileSubDropdown] = useState<string | null>(null);
  const [selectedAlumniProgram, setSelectedAlumniProgram] = useState<string | null>(null);

  const handleMobileDropdown = (itemName: string) => {
    if (openMobileDropdown === itemName) {
      setOpenMobileDropdown(null);
      setOpenMobileSubDropdown(null);
    } else {
      setOpenMobileDropdown(itemName);
      setOpenMobileSubDropdown(null);
    }
  };

  const handleMobileSubDropdown = (itemName: string) => {
    if (openMobileSubDropdown === itemName) {
      setOpenMobileSubDropdown(null);
    } else {
      setOpenMobileSubDropdown(itemName);
    }
  };

  const alumniPrograms: Program[] = [
    {
      name: "BTech",
      batches: [
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
    { name: "MTech", batches: [{ name: "2023-25", href: "/people/alumni/mtech" }] },
    { name: "MS", batches: [{ name: "MS Alumni", href: "/people/alumni/ms" }] },
    { name: "PhD", batches: [{ name: "PhD Alumni", href: "/people/alumni/phd" }] }
  ];

  // Admissions already removed in your previous request
  const navItems = [
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
        
        { name: "MTech Students", href: "/people/mtech-students",
           subDropdownItems: [
            { name: "2025", href: "/people/mtech-students/2025" },
            { name: "2024", href: "/people/mtech-students/2024" },
          ]
        },
        
        { name: "MS Students", href: "/people/ms-students" },
        { name: "PhD Students", href: "/people/phd-students" },
        {
          name: "Alumni",
          href: "#",
          isAlumni: true,
          subDropdownItems: alumniPrograms
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
        { name: "MS", href: "/programs/ms" },
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
        { name: "Prospective MS Students", href: "/join/ms" },
        { name: "Prospective PhD Students", href: "/join/phd" },
        { name: "Interns", href: "/join/interns" }
      ]
    },
    { name: "Seminar & Outreach", href: "https://events.cse.iiti.ac.in/" },
    { name: "How to reach", href: "/contact" }
  ];

  const quickLinks = [{ name: "IIT Indore", href: "https://www.iiti.ac.in/", icon: <ExternalLink size={14} /> }];

  const isAlumniActive = (itemName: string) => {
    return openMobileSubDropdown === itemName || openMobileSubDropdown?.startsWith(`${itemName}:`);
  };

  return (
    <>
      <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white relative overflow-hidden select-none">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25px 25px, white 2%, transparent 0%),
                                radial-gradient(circle at 75px 75px, white 2%, transparent 0%)`,
              backgroundSize: "100px 100px"
            }}
          />
        </div>

        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20 py-6 md:py-8 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-center space-y-4 lg:space-y-0">
            <div className="flex items-center space-x-3 md:space-x-6">
              <a href="https://www.iiti.ac.in/" target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
                <div className="bg-white rounded-xl p-1.5 md:p-2 shadow-2xl border border-blue-300/20">
                  <img
                    src="/png/iitlogo.png"
                    alt="IIT Indore Logo"
                    className="w-16 h-16 md:w-20 md:h-20 object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                    }}
                  />
                </div>
              </a>

              <div className="flex flex-col justify-center pb-4 md:pb-6">
                <div className="mb-2 md:mb-3">
                  <span className="inline-block px-2 md:px-3 py-0.5 md:py-1 bg-blue-600/20 text-blue-300 rounded-full text-xs md:text-sm font-medium border border-blue-500/30">
                    DEPARTMENT OF
                  </span>
                </div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent mb-2 md:mb-3 tracking-tight leading-tight">
                  <span className="hidden md:inline">Computer Science And Engineering</span>
                  <span className="md:hidden">Computer Science<br />And Engineering</span>
                </h1>
                <div className="space-y-1 md:space-y-2">
                  <p className="text-sm md:text-lg font-semibold text-blue-200 tracking-wide">भारतीय प्रौद्योगिकी संस्थान इंदौर</p>
                  <p className="text-xs md:text-base font-medium text-white/80">Indian Institute of Technology Indore</p>
                </div>
              </div>
            </div>

            {/* Removed "Excellence in Innovation & Research" text per request — no replacement */}
          </div>
        </div>
      </div>

      <nav className="sticky top-0 z-50 transition-all duration-500 bg-gradient-to-r from-blue-900/95 via-blue-800/95 to-blue-900/95 backdrop-blur-lg shadow-xl">
        <div className="w-full px-2 sm:px-4 lg:px-8 xl:px-12 2xl:px-20">
          <div className="hidden lg:flex items-center justify-between">
            <div className="flex items-center flex-1 justify-evenly">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => {
                    setActiveDropdown(null);
                    setActiveSubDropdown(null);
                    setSelectedAlumniProgram(null);
                  }}
                >
                  <a
                    href={item.href}
                    className="relative px-3 xl:px-4 2xl:px-5 py-4 xl:py-5 font-medium transition-all duration-300 flex items-center space-x-1 whitespace-nowrap text-white/90 hover:text-white"
                    target={item.href?.startsWith("http") ? "_blank" : "_self"}
                    rel={item.href?.startsWith("http") ? "noopener noreferrer" : ""}
                    onClick={(e) => {
                      if (item.hasDropdown) e.preventDefault();
                    }}
                  >
                    <span className="font-semibold tracking-wide text-sm md:text-lg lg:text-lg">{item.name}</span>
                    {item.hasDropdown && <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === item.name ? "rotate-180" : ""}`} />}
                  </a>

                  <div className={`absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 transform origin-left transition-transform duration-300 ${activeDropdown === item.name ? "scale-x-100" : "scale-x-0"}`} />

                  {item.hasDropdown && item.dropdownItems && activeDropdown === item.name && (
                    <div className="absolute top-full left-0 mt-0 z-50 min-w-[220px]">
                      <div className="bg-white shadow-2xl rounded-b-xl border border-gray-200/50 py-2">
                        {item.dropdownItems.map((dropdownItem) => (
                          <div
                            key={dropdownItem.name}
                            className="relative"
                            onMouseEnter={() => {
                              if (dropdownItem.subDropdownItems) {
                                setActiveSubDropdown(dropdownItem.name);
                                if ((dropdownItem as any).isAlumni) {
                                  const firstProg = ((dropdownItem.subDropdownItems as Program[])?.[0]?.name) || null;
                                  setSelectedAlumniProgram(firstProg);
                                }
                              }
                            }}
                            onMouseLeave={() => {
                              if (dropdownItem.subDropdownItems && !dropdownItem.isAlumni) setActiveSubDropdown(null);
                            }}
                          >
                            <a
                              href={(dropdownItem as any).isAlumni ? "#" : (dropdownItem.href as string)}
                              className="flex items-center justify-between px-4 py-2.5 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 hover:text-blue-600 transition-all duration-200 font-medium text-sm"
                              target={(dropdownItem as any).href?.startsWith?.("http") ? "_blank" : "_self"}
                              rel={(dropdownItem as any).href?.startsWith?.("http") ? "noopener noreferrer" : ""}
                              onClick={(e) => {
                                if ((dropdownItem as any).isAlumni) {
                                  e.preventDefault();
                                  setActiveSubDropdown(dropdownItem.name);
                                  const firstProg = ((dropdownItem.subDropdownItems as Program[])?.[0]?.name) || null;
                                  setSelectedAlumniProgram(firstProg);
                                }
                              }}
                            >
                              <span>{dropdownItem.name}</span>
                              {dropdownItem.subDropdownItems && <ChevronRight size={16} />}
                            </a>

                            {dropdownItem.isAlumni && dropdownItem.subDropdownItems && activeSubDropdown === dropdownItem.name && (
                              <div className="absolute left-full top-0 w-[680px] bg-white shadow-2xl rounded-r-xl border border-gray-200/50 z-50 max-h-[600px] overflow-hidden" onMouseEnter={() => setActiveSubDropdown(dropdownItem.name)} onMouseLeave={() => { setActiveSubDropdown(null); setSelectedAlumniProgram(null); }}>
                                <div className="p-4">
                                  <div className="grid grid-cols-4 gap-4">
                                    <div className="col-span-1 space-y-2">
                                      <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider pb-2">Programs</h3>
                                      {((dropdownItem.subDropdownItems as Program[]) || []).map((program) => (
                                        <button
                                          key={program.name}
                                          onMouseEnter={() => setSelectedAlumniProgram(program.name)}
                                          onFocus={() => setSelectedAlumniProgram(program.name)}
                                          onClick={() => {
                                            if (program.batches && program.batches.length === 1 && program.batches[0].href) {
                                              router.push(program.batches[0].href);
                                              setActiveDropdown(null);
                                              setActiveSubDropdown(null);
                                              setSelectedAlumniProgram(null);
                                            } else {
                                              setSelectedAlumniProgram(program.name);
                                            }
                                          }}
                                          className={`w-full text-left px-3 py-2 rounded-lg transition-all text-sm font-medium ${selectedAlumniProgram === program.name ? "bg-blue-50 text-blue-700" : "text-gray-700 hover:bg-blue-50"}`}
                                          aria-pressed={selectedAlumniProgram === program.name}
                                        >
                                          {program.name}
                                        </button>
                                      ))}
                                    </div>

                                    <div className="col-span-3">
                                      <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider pb-2 border-b-2 border-blue-500">
                                        {selectedAlumniProgram ?? "Select a program"}
                                      </h3>
                                      <div className="pt-3 grid grid-cols-2 gap-3">
                                        {alumniPrograms.find((p) => p.name === selectedAlumniProgram)?.batches?.map((batch) => (
                                          <Link key={batch.name} href={batch.href || "#"} className="block px-3 py-2 text-gray-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 hover:text-blue-600 transition-all duration-200 font-medium text-sm rounded-lg" onClick={() => { setActiveDropdown(null); setActiveSubDropdown(null); setSelectedAlumniProgram(null); }}>
                                            {batch.name}
                                          </Link>
                                        )) ?? <div className="text-gray-500 italic px-3 py-2">Choose a program on the left to view batches.</div>}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}

                            {!dropdownItem.isAlumni && dropdownItem.subDropdownItems && activeSubDropdown === dropdownItem.name && (
                              <div className="absolute left-full top-0 w-56 bg-white shadow-2xl rounded-r-xl border border-gray-200/50 z-50">
                                <div className="py-2">
                                  {dropdownItem.subDropdownItems.map((subItem) => (
                                    <Link key={(subItem as any).name} href={(subItem as any).href} className="block px-4 py-2.5 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 hover:text-blue-600 transition-all duration-200 font-medium text-sm">
                                      {(subItem as any).name}
                                    </Link>
                                  ))}
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

          <div className="lg:hidden">
            <div className="flex items-center justify-between px-4 py-3 bg-transparent">
              <div className="flex items-center space-x-2">
                <a href="https://www.iiti.ac.in/" target="_blank" rel="noopener noreferrer">
                  <div className="bg-white rounded-lg p-1">
                    <img src="/png/iitlogo.png" alt="IITI Logo" className="w-8 h-8 object-contain" onError={(e) => { const t = e.target as HTMLImageElement; t.style.display = "none"; }} />
                  </div>
                </a>
                <span className="font-bold text-base md:text-lg text-white">CSE IITI</span>
              </div>
              <div className="flex items-center space-x-2">
                <button className="p-2 rounded-xl transition-all text-white hover:bg-white/10" aria-label="Search">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
                <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-xl transition-all text-white hover:bg-white/10" aria-label="Toggle menu">
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
                        <button onClick={() => handleMobileDropdown(item.name)} className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-all font-medium text-white hover:bg-white/10">
                          <span className="font-semibold text-base md:text-lg">{item.name}</span>
                          <ChevronDown size={16} className={`transition-transform duration-300 ${openMobileDropdown === item.name ? "rotate-180" : ""}`} />
                        </button>
                      ) : (
                        <Link href={item.href} onClick={() => setIsOpen(false)} className="block px-3 py-2.5 rounded-xl transition-all font-medium text-white hover:bg-white/10">
                          <span className="font-semibold text-base md:text-lg">{item.name}</span>
                        </Link>
                      )}

                      {item.hasDropdown && openMobileDropdown === item.name && (
                        <div className="pl-3 mt-1 mb-1 space-y-1 border-l-2 border-blue-700 ml-3">
                          {item.dropdownItems.map((dropdownItem) => (
                            <div key={dropdownItem.name}>
                              {dropdownItem.isAlumni ? (
                                <>
                                  <button onClick={() => handleMobileSubDropdown(dropdownItem.name)} className="w-full flex items-center justify-between px-3 py-2 rounded-lg transition-all text-sm font-medium text-white/80 hover:bg-white/10">
                                    <span>{dropdownItem.name}</span>
                                    <ChevronDown size={14} className={`transition-transform duration-300 ${isAlumniActive(dropdownItem.name) ? "rotate-180" : ""}`} />
                                  </button>

                                  {isAlumniActive(dropdownItem.name) && dropdownItem.subDropdownItems && (
                                    <div className="pl-2 mt-1 space-y-2">
                                      {(dropdownItem.subDropdownItems as Program[]).map((program) => (
                                        <div key={program.name} className="space-y-1">
                                          <button onClick={() => {
                                            if (program.batches && program.batches.length === 1 && program.batches[0].href) {
                                              router.push(program.batches[0].href);
                                              setIsOpen(false);
                                            } else {
                                              const isOpen = openMobileSubDropdown === `${dropdownItem.name}:${program.name}`;
                                              if (isOpen) setOpenMobileSubDropdown(dropdownItem.name); else setOpenMobileSubDropdown(`${dropdownItem.name}:${program.name}`);
                                            }
                                          }} className="w-full flex items-center justify-between px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
                                            <span>{program.name}</span>
                                            <ChevronDown size={12} className={`transition-transform duration-200 ${openMobileSubDropdown === `${dropdownItem.name}:${program.name}` ? "rotate-180" : ""}`} />
                                          </button>

                                          {openMobileSubDropdown === `${dropdownItem.name}:${program.name}` && program.batches && (
                                            <div className="pl-3 mt-1 space-y-1">
                                              {program.batches.map((batch) => (
                                                <Link key={batch.name} href={batch.href} onClick={() => setIsOpen(false)} className="block px-4 py-1.5 rounded-md text-xs transition-all text-white/70 hover:bg-white/10">
                                                  {batch.name}
                                                </Link>
                                              ))}
                                            </div>
                                          )}
                                        </div>
                                      ))}
                                    </div>
                                  )}
                                </>
                              ) : (
                                <>
                                  <button onClick={(e) => {
                                    if (dropdownItem.subDropdownItems) {
                                      e.preventDefault();
                                      handleMobileSubDropdown(dropdownItem.name);
                                    } else {
                                      setIsOpen(false);
                                      if (dropdownItem.href) router.push(dropdownItem.href);
                                    }
                                  }} className="flex items-center justify-between px-3 py-2 rounded-lg transition-all text-sm font-medium text-white/80 hover:bg-white/10">
                                    <span>{dropdownItem.name}</span>
                                    {dropdownItem.subDropdownItems && <ChevronRight size={14} className="opacity-60" />}
                                  </button>

                                  {dropdownItem.subDropdownItems && openMobileSubDropdown === dropdownItem.name && (
                                    <div className="pl-2 mt-1 space-y-1">
                                      {dropdownItem.subDropdownItems.map((subItem) => (
                                        <Link key={(subItem as any).name} href={(subItem as any).href} onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-xs transition-all text-white/80 hover:bg-white/10">
                                          {(subItem as any).name}
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
                      <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="flex items-center space-x-2 px-3 py-2 rounded-lg transition-all text-sm font-medium text-white/80 hover:bg-white/10">
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
