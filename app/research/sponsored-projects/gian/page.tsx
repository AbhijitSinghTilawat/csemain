 

import React from 'react';
 
const gianCoursesData = [
    {
        title: "Media Security and Forensics",
        offeredBy: "Prof. Gaurav Sharma, University of Rochester",
        coordinator: "Dr. Surya Prakash",
        schedule: "March 26 - April 06, 2018",
        registerLink: "#",  
        webpageLink: "#"  
    },
    {
        title: "Advanced Pattern Recognition Techniques for Biometrics",
        offeredBy: "Prof. Massimo Tistarelli, University of Sassari, Italy.",
        coordinator: "Dr. Surya Prakash",
        schedule: "March 5 - 9, 2018",
        registerLink: "#",
        webpageLink: "#"
    },
    {
        title: "Ubiquitous Computing",
        offeredBy: "Prof. Hee Yong Youn, Director, Ubiquitous Computing Technology Research Institute Sungkyunkwan University Suwon Korea",
        coordinator: "Dr. Abhishek Srivastava",
        schedule: "January 15 - 26, 2018",
        registerLink: "#",
        webpageLink: "#"
    },
    {
        title: "Data protection - from principles to practice",
        offeredBy: "Prof. Anwitaman Datta, EPFL, Lausanne (Switzerland)",
        coordinator: "Dr. Somnath Dey",
        schedule: "December 18 - 22, 2017",
        registerLink: "#",
        webpageLink: "#"
    },
    {
        title: "Fundamentals and Applications of the Principles of Optimization to various disciplines – Engineering, Business, Life Sciences ,Social Sciences and Physical Sciences",
        offeredBy: "Prof. Chandrasekhar Putcha, California State University, USA",
        coordinator: "Dr. Neminath Hubballi",
        schedule: "July 17-21, 2017",
        registerLink: "#",
        webpageLink: "#"
    },
    {
        title: "Probabilistic models and Belief Propagation",
        offeredBy: "Prof. Gaurav Sharma, University of Rochester, USA",
        coordinator: "Dr. Surya Prakash",
        schedule: "August 01-10, 2016",
        registerLink: "#",
        webpageLink: "#"
    },
    {
        title: "Linear and Non-linear Systems with Applications in Medical Imaging, Optimal Design, and Graphics",
        offeredBy: "Prof. Eric de Sturler, Virginia Tech, USA",
        coordinator: "Dr. Kapil Ahuja",
        schedule: "July 25 - August 05, 2016",
        registerLink: "#",
        webpageLink: "#"
    },
    {
        title: "Neural Network Learning Theory-Advanced Topics",
        offeredBy: "Dr. Suresh Sundaram, Nanyang Technological University Singapore",
        coordinator: "Dr. Aruna Tiwari",
        schedule: "July 06 - 15, 2016",
        registerLink: "#",
        webpageLink: "#"
    },
    {
        title: "Basic Concepts and Issues in Big Data Management",
        offeredBy: "Prof. Dr. Spyratos Nicholas, University of Paris-South, France",
        coordinator: "Dr. Gourinath Banda",
        schedule: "December 05 - 17, 2016",
        registerLink: "#",
        webpageLink: "#"
    }
];
 
export default function GianCoursesPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold text-blue-900 mb-12 text-center">
                GIAN Courses
            </h1>
 
            <div className="space-y-8">
                {gianCoursesData.map((course, index) => (
                    <div
                        key={index}
                        className="bg-white p-6 rounded-lg shadow-lg border border-gray-200"
                    > 
                        <div className="flex items-start">
                            
                            <h2 className="text-2xl font-semibold text-blue-800 mb-4 flex-1">
                                {course.title}
                            </h2>
                        </div>

                    
                        <div className="pl-10 space-y-2">
                            <p className="text-xl text-gray-700">
                                <strong className="text-xl font-medium text-gray-900">
                                    Offered By:
                                </strong> {course.offeredBy}
                            </p>

                            <p className="text-xl text-gray-700">
                                <strong className="text-xl font-medium text-gray-900">
                                    Coordinator:
                                </strong> {course.coordinator}
                            </p>

                            <p className="text-xl text-gray-700">
                                <strong className="text-xl font-medium text-gray-900">
                                    Course Schedule:
                                </strong> {course.schedule}
                            </p>

                    
                            <div className="flex space-x-4 pt-2">
                                <a
                                    href={course.registerLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xl text-blue-600 font-medium hover:underline"
                                >
                                    To register for this course click here
                                </a>
                                <span className="text-xl text-gray-400">|</span>
                                <a
                                    href={course.webpageLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xl text-blue-600 font-medium hover:underline"
                                >
                                    For course webpage click here
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}