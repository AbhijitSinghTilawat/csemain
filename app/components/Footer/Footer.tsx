"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white border-t border-blue-700/50">
      {/* decorative dot pattern (non-interactive) */}
      <div className="pointer-events-none absolute inset-0 opacity-6 sm:opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25px 25px, rgba(255,255,255,0.06) 2%, transparent 0%), radial-gradient(circle at 75px 75px, rgba(255,255,255,0.06) 2%, transparent 0%)",
            backgroundSize: "100px 100px",
          }}
        />
      </div>

      {/* Use same horizontal padding as the navbar so it lines up perfectly */}
      <div className="relative z-10 w-full px-2 sm:px-4 lg:px-6 xl:px-8 2xl:px-12">
        {/* Main grid — tuned vertical rhythm to match navbar */}
        <div
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 py-6 sm:py-8 lg:py-12 border-b border-blue-700/30"
          /* Optional strict minimums if you want consistent visual height:
             add: min-h-[220px] sm:min-h-[260px] lg:min-h-[320px] */
        >
          {/* Column 1: Logo & contact */}
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-lg bg-white/8 p-2 backdrop-blur-sm border border-white/10">
                <Image
                  src="/png/cselogo.png"
                  alt="CSE Logo"
                  width={48}
                  height={48}
                  className="object-contain"
                  priority
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
                  CSE Department
                </h3>
                <p className="mt-1 text-sm text-blue-300">IIT Indore</p>
              </div>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 flex-shrink-0 text-blue-400" />
                <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                  Department of Computer Science and Engineering,
                  {"\n"}Indian Institute of Technology Indore
                  {"\n"}Khandwa Road, Simrol, Indore
                  {"\n"}Madhya Pradesh 453552
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={16} className="flex-shrink-0 text-blue-400" />
                <a className="text-gray-300 text-sm hover:text-white" href="tel:+917316603503">
                  +91 731 660 3503
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={16} className="flex-shrink-0 text-blue-400" />
                <a
                  href="mailto:cseoffice@iiti.ac.in"
                  className="text-gray-300 text-sm hover:text-white break-words"
                >
                  cseoffice@iiti.ac.in
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="mb-6 inline-block text-lg font-semibold text-white relative">
              Quick Links
              <span className="absolute -bottom-2 left-0 block h-[2px] w-1/2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
            </h4>

            <ul className="space-y-3 text-sm">
              {[
                { href: "/people/faculty", label: "Faculty And Staff" },
                { href: "/research/areas", label: "Research" },
                { href: "/about/contact", label: "Contact Us" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="group flex items-center gap-3 text-gray-300 hover:text-white transition-all duration-200"
                  >
                    <span className="block h-2 w-2 rounded-full bg-blue-400 group-hover:scale-150 transform transition-transform duration-200" />
                    <span className="truncate">{l.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Academics */}
          <div>
            <h4 className="mb-6 inline-block text-lg font-semibold text-white relative">
              Academics
              <span className="absolute -bottom-2 left-0 block h-[2px] w-1/2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
            </h4>

            <ul className="space-y-3 text-sm">
              {[
                { href: "/programs/btech", label: "B.Tech" },
                { href: "/programs/mtech", label: "M.Tech" },
                { href: "/programs/ms", label: "M.S(Research)" },
                { href: "/programs/phd", label: "Ph.D" },
                { href: "/teaching/courses", label: "Course Catalog" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="group flex items-center gap-3 text-gray-300 hover:text-white transition-all duration-200"
                  >
                    <span className="block h-2 w-2 rounded-full bg-cyan-400 group-hover:scale-150 transform transition-transform duration-200" />
                    <span className="truncate">{l.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Connect */}
          <div>
            <h4 className="mb-6 inline-block text-lg font-semibold text-white relative">
              Connect With Us
              <span className="absolute -bottom-2 left-0 block h-[2px] w-1/2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
            </h4>

            <p className="text-gray-300 text-sm leading-relaxed">
              Stay updated with the latest news, research breakthroughs, and academic events from the CSE Department.
            </p>

            {/* Example social / external links (unobtrusive) */}
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="https://www.iiti.ac.in"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-white/10 px-3 py-1 text-xs text-gray-200 hover:bg-white/4 transition"
              >
                <span className="text-xs">Visit IIT Indore</span>
              </a>
              <a
                href="/about/contact"
                className="inline-flex items-center gap-2 rounded-md border border-white/10 px-3 py-1 text-xs text-gray-200 hover:bg-white/4 transition"
              >
                Contact
              </a>
            </div>
          </div>
        </div>

        {/* Bottom legal */}
        <div className="mt-6 flex flex-col items-center justify-center gap-4 text-center py-6">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Department of Computer Science &amp; Engineering,
            <span className="ml-1 text-blue-300 font-medium">IIT Indore</span>. All rights reserved.
          </p>

          <p className="text-gray-500 text-xs">
            An Institute of National Importance under the Institutes of Technology Act, 1961
          </p>
        </div>
      </div>
    </footer>
  );
}
