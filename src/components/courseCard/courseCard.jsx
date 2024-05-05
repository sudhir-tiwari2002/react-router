import React from 'react'

function CourseCard() {

   const courseData =[{
        id: 1,
        name: "Tally ERP 9.0",
        img: "https://ics-worldwide.com/wp-content/uploads/2020/04/Tally-img-2.jpg",
        description: "The Tally ERP 9 course offers comprehensive training in the leading accounting software. Covering fundamental concepts like creating companies, managing accounts, inventory, and taxation, it progresses to advanced features such as financial statements, GST compliance, and data security. Participants learn to streamline business processes, generate insightful reports, and ensure regulatory compliance. Practical exercises and real-world scenarios enhance proficiency in navigating Tally ERP 9's interface and customizing it to organizational needs. By the end of the course, students gain expertise in automating tasks, optimizing workflows, and leveraging Tally ERP 9's capabilities for efficient financial management, making them adept users ready for professional roles."
    },
{
    id: 2,
    name: "Tally Prime",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9m6DcS1ebfmDGRM_KkZgc728lEJzPnJfekIlFCs94jb_Xp4QVv296BW_cKUS-RpRAunI&usqp=CAU",
    description: "The Tally Prime course provides comprehensive training in the latest version of Tally's accounting software, Tally Prime. Participants learn essential concepts such as company creation, ledger management, inventory handling, and taxation features. The course advances to cover advanced functionalities like financial analysis, GST compliance, and data security enhancements introduced in Tally Prime. Through practical exercises and real-world scenarios, students gain proficiency in navigating Tally Prime's user-friendly interface and customizing it to meet organizational requirements. By the course's conclusion, participants are equipped with the skills to efficiently manage financial tasks, generate insightful reports, and ensure compliance, making them proficient users of Tally Prime for professional endeavors."
},
{
    id: 3,
    name: "Typing training",
    img: "https://www.typingtest.com/trainer/assets/images/TTrainer_slide_2.png",
    description: "The Typing Training course offers a structured program designed to enhance typing speed, accuracy, and efficiency. Participants learn touch typing techniques, proper finger placement, and ergonomic practices to minimize fatigue and maximize productivity. Through interactive exercises and drills, learners progressively build muscle memory and improve their typing skills. The course covers essential keyboarding skills such as letter and number typing, as well as more advanced exercises including punctuation and special characters. With regular practice and feedback, students develop proficiency in typing without looking at the keyboard, ultimately increasing their typing speed and accuracy. By completing this course, participants gain a valuable skill applicable in various personal and professional contexts."
},
{
    id: 4,
    name: "Web Development",
    img: "https://media.istockphoto.com/id/1371339413/photo/co-working-team-meeting-concept-businessman-using-smart-phone-and-digital-tablet-and-laptop.jpg?s=612x612&w=0&k=20&c=ysEsVw3q2axYt3oVZAuQjtHRlN3lY-U_e0ikK5yKIXQ=",
    description: "The Web Design Development course offers a comprehensive exploration of the principles and techniques essential for creating dynamic and engaging websites. Beginning with HTML, CSS, and JavaScript fundamentals, participants progress to advanced topics like responsive design, accessibility, and SEO optimization. Through hands-on projects, students learn to craft visually appealing layouts, implement interactive features, and integrate multimedia content effectively. Additionally, the course covers popular frameworks and tools such as Bootstrap and WordPress, empowering learners to build scalable and user-friendly websites efficiently. By mastering the skills taught in this course, students are equipped to design and develop professional-grade websites tailored to modern web standards and user expectations."
},
{
    id: 5,
    name: "Mobile App Development",
    img: "https://riseuplabs.com/wp-content/uploads/2021/07/mobile-application-development-guidelines-riseuplabs.jpg",
    description: "The Mobile App Development course provides a comprehensive journey into creating applications for iOS and Android platforms. Beginning with programming languages like Swift and Java, students delve into app architecture, user interface design, and data management. Advanced topics include integrating APIs, implementing push notifications, and ensuring security. Through hands-on projects, participants learn to build functional prototypes and deploy apps to app stores. The course also covers cross-platform development frameworks like React Native and Flutter, enabling students to develop apps for multiple platforms simultaneously. By mastering the skills taught in this course, learners gain the expertise needed to design, develop, and launch successful mobile applications in today's competitive market."
},
{
    id: 6,
    name: "Android App Development",
    img: "https://www.zestminds.com/blog/wp-content/uploads/2021/11/How-to-Select-An-Android-App-Development-Company.jpg",
    description: "The Android App Development course offers a comprehensive exploration of creating applications for the Android platform. Beginning with Java or Kotlin programming fundamentals, participants learn about app components, user interfaces, and data management. Advanced topics include integrating APIs, implementing navigation patterns, and optimizing app performance. Through hands-on projects, students build functional prototypes and gain experience deploying apps to the Google Play Store. The course also covers modern development tools and best practices, empowering learners to create high-quality, user-friendly apps that meet industry standards. By mastering the skills taught in this course, participants become proficient Android developers ready to tackle real-world app development challenges."
},
{
    id: 7,
    name: "Course On Comuter Concept (CCC)",
    img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi4JRBnC81NRASNYlhvbFqcrQ2ZgneeBn6mb1_hHa6zq1isdnpoaMcjZAgYSaHeGOB79tFJ2kBvMttr7hAuxgDXTJK55XG1dDWI9Azo2uaV6YayEvyWC3eBUuHehOIHlLExYR0DRYcCXJIIZ3M_gTk_s3aJIDk2sXYq4RNGYBrJROcu3avaFShrbtB_SNc0/s1536/CCC-Online-Test-20-Questions.jpg",
    description: "The Course on Computer Concepts (CCC) offers a foundational understanding of computer fundamentals and digital literacy. Covering essential topics such as operating systems, word processing, spreadsheets, and internet usage, the course provides practical skills necessary for navigating today's digital world. Participants learn about computer hardware and software, file management, and basic troubleshooting techniques. Additionally, the CCC course introduces concepts of cyber safety, email etiquette, and online collaboration. Through hands-on exercises and assessments, students develop proficiency in using computers for personal and professional tasks. By completing the CCC course, individuals enhance their digital competence, empowering them to excel in various academic and professional endeavors."
},
{
    id: 8,
    name: "IOS App Development",
    img: "https://www.techosquare.com/images/blog/iphone-ios-mobile-application-development-home.jpg",
    description: "The iOS App Development course offers an in-depth exploration of creating applications specifically for Apple's iOS platform. Starting with Swift programming language essentials, participants delve into app design principles, user interface development, and data management techniques. Advanced topics include integrating APIs, implementing core functionalities like push notifications and location services, and ensuring app security. Through hands-on projects, students build functional prototypes and gain experience deploying apps to the Apple App Store. The course also covers iOS development tools and best practices, empowering learners to create polished, user-friendly apps that meet Apple's stringent guidelines. By mastering the skills taught in this course, participants become proficient iOS developers poised to succeed in the competitive app market."
},

{
    id: 9,
    name: "Backend Development",
    img: "https://media.excellentwebworld.com/wp-content/uploads/2023/04/13073124/Backend-Development.jpg",
    description: "Backend Development involves building and maintaining the server-side logic of web applications, powering their functionality and interactions. This course covers programming languages like Python, Node.js, or Java, along with frameworks such as Django, Express, or Spring Boot. Participants learn to design and implement databases, manage user authentication, and handle data securely. Advanced topics include RESTful API development, scalability, and performance optimization. Through practical projects, learners gain proficiency in creating robust and efficient backend systems that support complex web applications. By mastering backend development skills, participants become adept at building scalable, secure, and high-performing web applications to meet modern digital demands."
}
]


  return (
    <>
   <div className='flex flex-wrap justify-between mb-5'> 
        {courseData.map((course)=>{
            return(
                <div className='flex justify-start max-w-md w-1/3 p-2' key={course.id}>
                    <div className='flex flex-col'>
                        <img src={course.img} alt="" className='w-full rounded-lg h-80'/>
                        <div className='mt-2 gap-3'>
                            <h3 className='text-xl font-bold'>{course.name}</h3>
                            <p className='text-gray-500'>{course.description}</p>
                        </div>
                        </div>
                </div>
            )
        })}
      </div>
    </>
  )
}

export default CourseCard
