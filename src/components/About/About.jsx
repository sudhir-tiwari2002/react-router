import React from 'react'

function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            Personality development 
                        </h2>
                        <p className="mt-6 text-gray-600">
                        The Personality Development course aims to enhance individuals' personal and professional growth by focusing on various aspects of self-improvement. It covers communication skills, interpersonal relations, confidence-building, time management, and emotional intelligence. Participants learn effective public speaking techniques, assertiveness, and conflict resolution strategies to navigate diverse social and professional environments successfully. Through experiential exercises and role-playing, students develop self-awareness, empathy, and leadership qualities. The course also emphasizes goal-setting, resilience, and stress management to foster a positive mindset and adaptability. By cultivating a well-rounded personality, participants gain the confidence and skills necessary to thrive in their careers and personal lives, fostering meaningful connections, and achieving their full potential.
                        </p>
                    </div>
                </div>
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            Software development 
                        </h2>
                        <p className="mt-6 text-gray-600">
                        The Software Development course provides a comprehensive understanding of the principles, methodologies, and tools essential for creating robust and scalable software solutions. Covering programming languages such as Python, Java, or C++, along with development frameworks like React, Angular, or Django, participants learn to design, develop, and deploy software applications. The course emphasizes software engineering best practices, including version control, testing, and debugging techniques. Participants gain hands-on experience in the entire software development lifecycle, from requirements gathering to deployment and maintenance. Additionally, the course covers Agile methodologies, project management, and collaboration tools to prepare participants for real-world software development projects. By mastering software development skills, participants become proficient in building high-quality software solutions that meet user needs and industry standards.                        </p>
                    </div>
                    <div className="md:5/12 lg:w-5/12">
                        <img className=' rounded-lg'
                            src="https://thumbs.dreamstime.com/b/software-development-word-cloud-concept-grey-background-88535408.jpg"
                            alt="image"
                        />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default About
