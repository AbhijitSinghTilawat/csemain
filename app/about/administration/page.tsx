"use client";

import React from "react";
import { Mail, Phone } from "lucide-react";

export default function AdministrationPage() {
  return (
    <main className="w-full min-h-screen bg-gray-50">
      <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 text-center pb-4 mb-12 border-b-4 border-blue-300">
          Administration
        </h1>

        <div className="mb-12 bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <h2 className="text-3xl font-semibold text-blue-800 mb-6">Head of Department</h2>
          <div className="text-lg text-gray-800">
            <p className="text-2xl font-bold text-gray-900">Dr. Ranveer Singh</p>

            <div className="flex items-center space-x-4 mt-4">
              <Mail className="h-5 w-5 text-blue-600" />
              <a href="mailto:hodcse@iiti.ac.in" className="text-gray-700 hover:text-blue-600">
                hodcse@iiti.ac.in
              </a>
            </div>

            <div className="flex items-center space-x-4 mt-3">
              <Phone className="h-5 w-5 text-blue-600" />
              <span className="text-gray-700">+91-731-6603224</span>
            </div>

            <div className="flex items-center space-x-4 mt-3">
              <Phone className="h-5 w-5 text-blue-600" />
              <span className="text-gray-700">Office of Head: +91-731-6603503</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">Post-Graduate Committee</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Dr. Soumi Chattopadhyay (Convenor)</li>
              <li>Prof. Anirban Sengupta (Member)</li>
              <li>Prof. Surya Prakash (Member)</li>
              <li>Dr. Aniruddha Singh Kushwahai (Member)</li>
              <li>HOD, CSE (Ex-officio)</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">Under-Graduate Committee</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Dr. Ayan Mondal (Convenor)</li>
              <li>Dr. Puneet Gupta (Member)</li>
              <li>Dr. Sasank Mouli (Member)</li>
              <li>Dr. Debasish Pattanayak (Member)</li>
              <li>HOD, CSE (Ex-officio)</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">Safety and Security Committee</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Dr. Bodhisatwa Mazumdar (Convenor)</li>
              <li>Prof. Abhishek Srivastava (Member)</li>
              <li>Dr. Puneet Gupta (Member)</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">Ph.D. Admission Coordinator</h3>
            <p className="text-gray-700">Dr. Lawqueen Kanesh</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">MS (Research) Co-ordinator</h3>
            <p className="text-gray-700">Dr. Chandresh Kumar Maurya</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">M.Tech. Co-ordinator</h3>
            <p className="text-gray-700">Dr. Subhra Mazumdar</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">Outreach Co-ordinator</h3>
            <p className="text-gray-700">Dr. Chandresh Kumar Maurya</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">Placement Co-ordinator</h3>
            <p className="text-gray-700">Dr. Chandresh Kumar Maurya</p>
          </div>
        </div>
      </section>
    </main>
  );
}
