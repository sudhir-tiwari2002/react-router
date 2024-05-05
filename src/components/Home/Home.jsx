import { Typography } from '@material-tailwind/react';
import React from 'react'
import { Link } from 'react-router-dom';
import CourseCard from '../courseCard/courseCard';

function Home() {
    return (
        <>
        <div className="mx-auto w-full max-w-7xl">

            <div className='mt-5'>
                
                <h1 className="text-4xl font-bold text-center">
                    <span className="text-blue-700">Pixel</span>
                    <span className="text-gray-700">Computer</span>
                </h1>
                <div className=' text-center '>----------X---------</div>
                <p>
                Pixel Computer offer prospective I.T. courses with best in quality, individual attention, practical approach, placement assistance and 100% satisfaction. Pixel Computer is only Computer Software Training institute which provide many courses like short term, specialization, academic, career oriented. Pixel Computer provide courses like Diploma in Web Design and Development, Diploma in Software Development, Diploma in Android Apps Development, Diploma in Software Testing, C,C++ Programming, Java, Python, PHP MySQL, Graphics Design and Digital Marketing. We guide all students to choose right course for them according to their requirement.
                </p>
            </div>
            </div>
        
        <div className=' mx-auto w-full max-w-7xl h-["600px"] mt-5 rounded-3xl' >
            <img className='w-full h-1/2 rounded-3xl' src="https://content3.jdmagicbox.com/comp/meerut/e1/9999px121.x121.190325120647.x5e1/catalogue/pixel-computer-institute-malyana-meerut-computer-training-institutes-for-basic-2cup36txk0.jpg" alt="" />
        </div>

            


        
        <div className='w-full bg-gray-100'>
            <div className=' mx-auto w-full max-w-7xl'>
                <div className='mt-4 p-4'>
                    <Typography className='text-4xl font-bold text-center'>Our Popular Courses</Typography>
                    <div className=' text-center '>----------X---------</div>
                </div>
                
                <CourseCard/>
                

            </div>

        </div>

        <div className='mx-auto w-full max-w-7xl mb-10'>
        <div className='flex justify-between mt-5 gap-5'>
                <div className=' justify-between items-center gap-3'>
                    <Typography className='bg-blue-500 text-white p-2 rounded-md text-lg font-semibold'>Our Mission</Typography>
                    <Typography className='mt-2'>Our mission  is to empower individual with the necessary skills and knowledge to excel in the ever evolving world of computers. Join our computer institute and unlock your potential in the digital era.

</Typography>
                    
                </div>
                <div className=' justify-between items-center'>
                    <Typography className='bg-blue-500 text-white p-2 rounded-md text-lg font-semibold' >Our Vision</Typography>
                    <Typography className='mt-2'>Our vision is to be a beacon of excellence in technology education, nurturing students to become adept professionals and innovators in the ever-evolving digital landscape.</Typography>
                </div>
            </div>
        </div>
       
        </>
    );
}

export default Home
