"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp, FileText, File } from "lucide-react";

// Updated Data Structure to support specific URLs per format
const formsData = [
  {
    category: "Forms for UG Students",
    forms: [
      {
        name: "Promotion of Research/Innovation for Undergraduate Students (PRIUS)",
        links: [
          { type: "PDF", url: "https://academic.iiti.ac.in/Document/04072014PRIUS.pdf" }
        ]
      },
      {
        name: "Form for Selecting BTP Project",
        links: [
          { type: "PDF", url: "https://academic.iiti.ac.in/Document/04072014Form-for-Selecting-BTP-Project.pdf" }
        ]
      },
      {
        name: "Form for BTP Progress Report",
        links: [
          { type: "PDF", url: "https://academic.iiti.ac.in/Document/04072014BTP-Progress-Report-Form.pdf" }
        ]
      },
      {
        name: "Format for Preparing BTP Report",
        links: [
          { type: "DOC", url: "https://academic.iiti.ac.in/Document/29102014Format-for-Preparing-BTP-Report.docx" }
        ]
      },
      {
        name: "Application For Bonafide Certificate / NOC",
        links: [
          { type: "DOC", url: "https://academic.iiti.ac.in/phdforms/Bonafide_application.docx" },
          { type: "PDF", url: "https://academic.iiti.ac.in/phdforms/Bonafide_application%20(1).pdf" }
        ]
      },
      {
        name: "Leave application cum advance form for foreign visit of student",
        links: [
          { type: "DOC", url: "https://academic.iiti.ac.in/phdforms2/Leave%20Form%20for%20foreign%20visit%20of%20student.doc" },
          { type: "PDF", url: "https://academic.iiti.ac.in/phdforms2/Leave%20Form%20for%20foreign%20visit%20of%20student.pdf" }
        ]
      },
      {
        name: "Application Form for students",
        links: [
          { type: "DOC", url: "https://academic.iiti.ac.in/Document/Application%20Form%20for%20students.docx" },
          { type: "PDF", url: "https://academic.iiti.ac.in/Document/Application%20Form%20for%20students.pdf" }
        ]
      },
    ],
  },
  {
    category: "Forms for PG Students",
    forms: [
      {
        name: "Application for Casual Leave (CL) / Duty Leave (DL)",
        links: [
          { type: "PDF", url: "https://academic.iiti.ac.in/phdforms/CL%20Form.pdf" }
        ]
      },
      {
        name: "Application Form for students",
        links: [
          { type: "DOC", url: "https://academic.iiti.ac.in/Document/2021/Application%20Form%20for%20students%20(2).docx" },
          { type: "PDF", url: "https://academic.iiti.ac.in/Document/2021/Application%20Form%20for%20students.pdf" }
        ]
      },
      {
        name: "Leave application cum advance form for foreign visit of student",
        links: [
          { type: "DOC", url: "https://academic.iiti.ac.in/Document/2021/Leave%20Form%20for%20foreign%20visit%20of%20student%20(1).doc" },
          { type: "PDF", url: "https://academic.iiti.ac.in/Document/2021/Leave%20Form%20for%20foreign%20visit%20of%20student%20(pdf).pdf" }
        ]
      },
      {
        name: "Application Form for Maternity Leave (ML) for Female Students",
        links: [
          { type: "DOC", url: "https://academic.iiti.ac.in/phdforms/IITIndore_Maternity_Leave_Application_Form_for_Students.docx" },
          { type: "PDF", url: "https://academic.iiti.ac.in/phdforms/IITIndore_Maternity_Leave_Application_Form_for_Students.pdf" }
        ]
      },
      {
        name: "Application For Bonafide Certificate / NOC",
        links: [
          { type: "DOC", url: "https://academic.iiti.ac.in/phdforms/Bonafide_application.docx" },
          { type: "PDF", url: "https://academic.iiti.ac.in/phdforms/Bonafide_application%20(1).pdf" }
        ]
      },
      {
        name: "Teaching Assistantship (TA) Report",
        links: [
          { type: "DOC", url: "https://academic.iiti.ac.in/phdforms/TA%20form%20for%20Ph%20D.docx" },
          { type: "PDF", url: "https://academic.iiti.ac.in/phdforms/TA%20form%20for%20Ph%20D.pdf" }
        ]
      },
      {
        name: "Teaching Assistantship (TA) Not Assigned Report",
        links: [
          { type: "DOC", url: "https://academic.iiti.ac.in/phdforms/Work%20Report%20of%20PhD%20Student.docx" },
          { type: "PDF", url: "https://academic.iiti.ac.in/phdforms/Work%20Report%20of%20PhD%20Student.pdf" }
        ]
      },
      {
        name: "Form for continuation of PhD Program beyond FIVE Years",
        links: [
          { type: "DOC", url: "https://academic.iiti.ac.in/phdforms/IITI_Form_for_Continuation_of_Ph.D_Programme_Beyond_Five_Years.doc" },
          { type: "PDF", url: "https://academic.iiti.ac.in/phdforms/IITI_Form_for_Continuation_of_Ph.D_Programme_Beyond_Five_Years.pdf" }
        ]
      },
      {
        name: "Application for Continuation / Extension of PhD Scholarship",
        links: [
          { type: "DOC", url: "https://academic.iiti.ac.in/phdforms/Application%20for%20continuation%20or%20extension%20of%20PhD%20scholarship%20(for%204%20years).docx" },
          { type: "PDF", url: "https://academic.iiti.ac.in/phdforms/Application%20for%20continuation%20or%20extension%20of%20PhD%20scholarship%20(for%204%20years).pdf" }
        ]
      },
      {
        name: "Additional Rules for Defense Forces (DF), Institute Staff (IS) and Sponsored (SW) category candidates",
        links: [
          { type: "PDF", url: "https://academic.iiti.ac.in/phdforms/5022015Additional-Rules-for-IS+SW-Part-Time-PG+PhD-Programs.pdf" }
        ]
      },
      {
        name: "Form for Sponsorship letter for applicants under IS, SW and DF category",
        links: [
          { type: "PDF", url: "https://academic.iiti.ac.in/phdforms/Form%20for%20Sponsorship%20letter%20for%20applicants%20under%20IS,%20SW%20and%20%20DF%20category.pdf" }
        ]
      },
      {
        name: "Form for NOC for applicants under IS, SW and DF category",
        links: [
          { type: "PDF", url: "https://academic.iiti.ac.in/phdforms/Form%20for%20NOC%20for%20applicants%20under%20IS,%20SW%20and%20DF%20category.pdf" }
        ]
      },
      {
        name: "Form for selecting a Co-Supervisor from an External or Sponsoring Organization",
        links: [
          { type: "PDF", url: "https://academic.iiti.ac.in/phdforms/Form%20for%20selecting%20a%20Co-Supervisor%20from%20an%20External%20or%20Sponsoring%20Organization.pdf" }
        ]
      },
      {
        name: "Form for the employer for candidates joining PG/PhD on study leave (SW/DF)",
        links: [
          { type: "PDF", url: "https://academic.iiti.ac.in/phdforms/Form%20for%20the%20employer%20for%20the%20candidates%20joining%20PG%20or%20PhD%20program%20on%20study%20leave%20under%20%20SW%20and%20DF%20category.pdf" }
        ]
      },
      {
        name: "No Objection-cum-Sponsoring-Experience Certificate (PhD Applicant under CT category)",
        links: [
          { type: "PDF", url: "https://academic.iiti.ac.in/phdforms/Form%20for%20No%20Objection-cum-Sponsoring-Experience%20Certificate%20from%20the%20Sponsoring%20University%20College%20Institution%20for%20PhD%20Applicant%20under%20CT%20category.pdf" }
        ]
      },
      {
        name: "Additional Rules for CT category",
        links: [
          { type: "PDF", url: "https://academic.iiti.ac.in/phdforms/Rules%20and%20Form%20for%20CT%20category.pdf" }
        ]
      },
      {
        name: "Form for External Assessment for Conversion from JRF to SRF",
        links: [
          { type: "DOC", url: "https://academic.iiti.ac.in/phdforms/IITI-Form-for-external-assessment-of-JRF-to-SRF-Conversion.docx" },
          { type: "PDF", url: "https://academic.iiti.ac.in/phdforms/IITI-Form-for-external-assessment-of-JRF-to-SRF-Conversion.pdf" }
        ]
      },
      {
        name: "Minimum publication criteria exemption form",
        links: [
          { type: "DOC", url: "https://academic.iiti.ac.in/phdforms/Minimum%20publication%20criteria%20exemption%20form_June%202023.docx" },
          { type: "PDF", url: "https://academic.iiti.ac.in/phdforms/Minimum%20publication%20criteria%20exemption%20form_June%202023.pdf" }
        ]
      },
      {
        name: "Format of latest list of publications",
        links: [
          { type: "DOC", url: "https://academic.iiti.ac.in/phdforms/Formate%20of%20latest%20list%20of%20publications_June%202023.docx" },
          { type: "PDF", url: "https://academic.iiti.ac.in/phdforms/Formate%20of%20latest%20list%20of%20publications_June%202023.pdf" }
        ]
      },
    ],
  },
  {
    category: "Forms for MTech / MSc Students Thesis Submission",
    forms: [
      {
        name: "Template for MTech Thesis",
        links: [
          { type: "DOC", url: "https://academic.iiti.ac.in/phdforms/Template%20for%20MTech%20Thesis.docx" }
        ]
      },
      {
        name: "Template for MSc Thesis",
        links: [
          { type: "DOC", url: "https://academic.iiti.ac.in/phdforms/Template%20for%20MSc%20Thesis.docx" }
        ]
      },
      {
        name: "Form for submitting soft/spiral bound copies of PG Thesis (PGTS 1)",
        links: [
          { type: "DOC", url: "https://academic.iiti.ac.in/phdforms/PGTS-1.docx" }
        ]
      },
      {
        name: "Report of PG Thesis oral examination (PGTS 2)",
        links: [
          { type: "DOC", url: "https://academic.iiti.ac.in/phdforms/PGTS-2.docx" }
        ]
      },
      {
        name: "Submission of hard bound Thesis copies (PGTS 3)",
        links: [
          { type: "DOC", url: "https://academic.iiti.ac.in/phdforms/PGTS-3.docx" }
        ]
      },
    ],
  },
  {
    category: "Forms for MS (Research) Students Thesis Submission",
    forms: [
      {
        name: "Procedure for submission and evaluation of MS (Research) Thesis",
        links: [
          { type: "PDF", url: "https://academic.iiti.ac.in/phdforms/MS/PROCEDURE%20FOR%20SUBMISSION%20AND%20EVALUATION%20OF%20MS%20(RESEARCH)%20THESIS.pdf" }
        ]
      },
      {
        name: "Template for MS (Research) Thesis",
        links: [
          { type: "DOC", url: "https://academic.iiti.ac.in/phdforms/MS/Template%20for%20MS%20(Research)%20Thesis.docx" },
          { type: "PDF", url: "https://academic.iiti.ac.in/phdforms/MS/Template%20for%20MS%20(Research)%20Thesis.pdf" }
        ]
      },
      {
        name: "MSRTS-1 form for submitting synopsis and softbound copies",
        links: [
          { type: "DOC", url: "https://academic.iiti.ac.in/phdforms/MS/MSRTS-1%20FORM%20FOR%20SUBMITTING%20SYNOPSIS%20AND%20SOFTBOUND%20COPIES%20OF%20MS%20(RESEARCH)%20THESIS%20%20%20.docx" },
          { type: "PDF", url: "https://academic.iiti.ac.in/phdforms/MS/MSRTS-1%20FORM%20FOR%20SUBMITTING%20SYNOPSIS%20AND%20SOFTBOUND%20COPIES%20OF%20MS%20(RESEARCH)%20THESIS%20%20%20.pdf" }
        ]
      },
      {
        name: "MSRTS-2 form for list of suggested examiners",
        links: [
          { type: "DOC", url: "https://academic.iiti.ac.in/phdforms/MS/MSRTS-2%20FORM%20FOR%20LIST%20OF%20SUGGESTED%20EXAMINERS%20FOR%20EVALUATION%20OF%20THE%20MS%20(Research)%20THESIS.docx" },
          { type: "PDF", url: "https://academic.iiti.ac.in/phdforms/MS/MSRTS-2%20FORM%20FOR%20LIST%20OF%20SUGGESTED%20EXAMINERS%20FOR%20EVALUATION%20OF%20THE%20MS%20(Research)%20THESIS.pdf" }
        ]
      },
      {
        name: "MSRTS-3 form for evaluation report of the examiner",
        links: [
          { type: "DOC", url: "https://academic.iiti.ac.in/phdforms/MS/MSRTS-3%20FORM%20FOR%20EVALUATION%20REPORT%20OF%20THE%20EXAMINER%20FOR%20AWARD%20OF%20(MS%20RESEARCH)%20DEGREE.docx" },
          { type: "PDF", url: "https://academic.iiti.ac.in/phdforms/MS/MSRTS-3%20FORM%20FOR%20EVALUATION%20REPORT%20OF%20THE%20EXAMINER%20FOR%20AWARD%20OF%20(MS%20RESEARCH)%20DEGREE.pdf" }
        ]
      },
      {
        name: "MSRTS-4 form for report of MS (RESEARCH) Thesis ORAL EXAMINATION",
        links: [
          { type: "DOC", url: "https://academic.iiti.ac.in/phdforms/MS/MSRTS-4%20FORM%20FOR%20REPORT%20OF%20MS%20(RESEARCH)%20THESIS%20ORAL%20EXAMINATION.docx" },
          { type: "PDF", url: "https://academic.iiti.ac.in/phdforms/MS/MSRTS-4%20FORM%20FOR%20REPORT%20OF%20MS%20(RESEARCH)%20THESIS%20ORAL%20EXAMINATION.pdf" }
        ]
      },
      {
        name: "MSRTS-5 form for submission of hard bound Thesis copies",
        links: [
          { type: "DOC", url: "https://academic.iiti.ac.in/phdforms/MS/MSRTS-5%20FORM%20FOR%20SUBMISSION%20OF%20HARD%20BOUND%20THESIS%20COPIES.docx" },
          { type: "PDF", url: "https://academic.iiti.ac.in/phdforms/MS/MSRTS-5%20FORM%20FOR%20SUBMISSION%20OF%20HARD%20BOUND%20THESIS%20COPIES.pdf" }
        ]
      },
    ],
  },
  {
    category: "Forms for Ph.D. Students Thesis Submission",
    forms: [
      {
        name: "Template for PhD Thesis",
        links: [
          { type: "DOC", url: "https://academic.iiti.ac.in/phdforms/Template%20for%20Ph.D.%20Thesis.docx" }
        ]
      },
      {
        name: "Report of The Open Seminar (PTS 1)",
        links: [
          { type: "DOC", url: "https://academic.iiti.ac.in/phdforms/Form-PTS%201%20REPORT%20OF%20THE%20OPEN%20SEMINAR.docx" },
          { type: "PDF", url: "https://academic.iiti.ac.in/phdforms/Form-PTS%201%20REPORT%20OF%20THE%20OPEN%20SEMINAR.pdf" }
        ]
      },
      {
        name: "Certificates to be Submitted Along with the PhD Synopsis (PTS 2)",
        links: [
          { type: "DOC", url: "https://academic.iiti.ac.in/phdforms/Form-PTS%202%20CERTIFICATES%20TO%20BE%20SUBMITTED%20ALONG%20WITH%20THE%20PhD%20SYNOPSIS.docx" },
          { type: "PDF", url: "https://academic.iiti.ac.in/phdforms/Form-PTS%202%20CERTIFICATES%20TO%20BE%20SUBMITTED%20ALONG%20WITH%20THE%20PhD%20SYNOPSIS.pdf" }
        ]
      },
      {
        name: "Request for Submission of Synopsis and PhD Thesis from Outside the Institute (PTS 2a)",
        links: [
          { type: "DOC", url: "https://academic.iiti.ac.in/phdforms/Form-PTS%202a-Request%20for%20Submission%20of%20Synopsis%20and%20PhD%20Thesis%20from%20Outside%20the%20Institute.docx" },
          { type: "PDF", url: "https://academic.iiti.ac.in/phdforms/Form-PTS%202a-Request%20for%20Submission%20of%20Synopsis%20and%20PhD%20Thesis%20from%20Outside%20the%20Institute.pdf" }
        ]
      },
      {
        name: "List of Suggested Examiners for Evaluation of the Ph.D. Thesis (PTS 3)",
        links: [
          { type: "DOC", url: "https://academic.iiti.ac.in/phdforms/Modified-Form-PTS%203%20LIST%20OF%20SUGGESTED%20EXAMINERS%20FOR%20EVALUATION%20OF%20THE%20Ph.D.%20THESIS%2003.09.15.docx" },
          { type: "PDF", url: "https://academic.iiti.ac.in/phdforms/Modified-Form-PTS%203%20LIST%20OF%20SUGGESTED%20EXAMINERS%20FOR%20EVALUATION%20OF%20THE%20Ph.D.%20THESIS%2003.09.15.pdf" }
        ]
      },
      {
        name: "Form for Submitting Soft Spiral Bound Copies of PhD Thesis (PTS 4)",
        links: [
          { type: "DOC", url: "https://academic.iiti.ac.in/phdforms/Form-PTS%204%20FORM%20FOR%20SUBMITTING%20SOFT%20SPIRAL%20BOUND%20COPIES%20OF%20PhD%20THESIS.docx" },
          { type: "PDF", url: "https://academic.iiti.ac.in/phdforms/Form-PTS%204%20FORM%20FOR%20SUBMITTING%20SOFT%20SPIRAL%20BOUND%20COPIES%20OF%20PhD%20THESIS.pdf" }
        ]
      },
      {
        name: "Report of Ph.D. Thesis Oral Examination (PTS 6)",
        links: [
          { type: "DOC", url: "https://academic.iiti.ac.in/phdforms/Form-PTS%206%20REPORT%20OF%20PH.D.%20THESIS%20ORAL%20EXAMINATION.docx" },
          { type: "PDF", url: "https://academic.iiti.ac.in/phdforms/Form-PTS%206%20REPORT%20OF%20PH.D.%20THESIS%20ORAL%20EXAMINATION.pdf" }
        ]
      },
      {
        name: "Submission of Hard Bound Thesis Copies (PTS 7)",
        links: [
          { type: "DOC", url: "https://academic.iiti.ac.in/phdforms/Form-PTS%207%20SUBMISSION%20OF%20HARD%20BOUND%20THESIS%20COPIES.docx" },
          { type: "PDF", url: "https://academic.iiti.ac.in/phdforms/Form-PTS%207%20SUBMISSION%20OF%20HARD%20BOUND%20THESIS%20COPIES.pdf" }
        ]
      },
    ],
  },
  {
    category: "Ph.D. Admission Related Forms",
    forms: [
      {
        name: "CHECKLIST For Ph.D. Admission",
        links: [
          { type: "PDF", url: "https://academic.iiti.ac.in/phdforms/phd/PhD%20Admission%20Candidates%20Document%20sChecklist.pdf" }
        ]
      },
      {
        name: "Format of Recommendation Letter",
        links: [
          { type: "DOC", url: "https://academic.iiti.ac.in/phdforms/phd/Format%20of%20Recommendation%20Letter_March%202021.docx" },
          { type: "PDF", url: "https://academic.iiti.ac.in/phdforms/phd/Format%20of%20Recommendation%20Letter_March%202021.pdf" }
        ]
      },
      {
        name: "PhD Statement of Purpose",
        links: [
          { type: "DOC", url: "https://academic.iiti.ac.in/phdforms/phd/PhD%20Statement%20of%20Purpose_March%202021.doc" },
          { type: "PDF", url: "https://academic.iiti.ac.in/phdforms/phd/PhD%20Statement%20of%20Purpose_March%202021.pdf" }
        ]
      },
      {
        name: "Approval for Recruiting TA Category PhD Students",
        links: [
          { type: "DOC", url: "https://academic.iiti.ac.in/phdforms/phd/Approval%20for%20Recruiting%20TA%20Category%20PhD%20Students_March%202021.doc" },
          { type: "PDF", url: "https://academic.iiti.ac.in/phdforms/phd/Approval%20for%20Recruiting%20TA%20Category%20PhD%20Students_March%202021.pdf" }
        ]
      },
    ],
  },
];

export default function FormsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w">
        
        <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-900 mb-10 text-center">
          Downloadable Forms
        </h1>

        <div className="space-y-4">
          {formsData.map((section, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden"
            >
              {/* Accordion Header */}
              <button
                onClick={() => toggleAccordion(index)}
                className={`w-full flex items-center justify-between px-6 py-5 text-left transition-colors duration-200
                  ${openIndex === index ? "bg-blue-50" : "bg-white hover:bg-gray-50"}
                `}
              >
                <span className="text-lg sm:text-xl font-bold text-blue-900">
                  {section.category}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="text-blue-600 w-6 h-6" />
                ) : (
                  <ChevronDown className="text-gray-400 w-6 h-6" />
                )}
              </button>

              {/* Accordion Content */}
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 py-6 border-t border-gray-100 bg-white">
                  <div className="grid gap-4">
                    {section.forms.map((form, fIndex) => (
                      <div
                        key={fIndex}
                        className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-lg border border-gray-100 hover:border-blue-200 hover:shadow-sm transition-all bg-gray-50/50"
                      >
                        <span className="text-gray-700 font-medium text-sm sm:text-base mb-3 sm:mb-0 mr-4">
                          {form.name}
                        </span>
                        
                        <div className="flex flex-wrap gap-2 shrink-0">
                          {form.links.map((link, lIndex) => {
                            const isPdf = link.type === "PDF";
                            return (
                              <a
                                key={lIndex}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-full transition-colors border
                                  ${isPdf 
                                    ? "bg-red-50 text-red-700 border-red-200 hover:bg-red-100" 
                                    : "bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100"
                                  }
                                `}
                              >
                                {isPdf ? <FileText size={14} /> : <File size={14} />}
                                {link.type}
                              </a>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 