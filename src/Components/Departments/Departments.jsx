import PropTypes from 'prop-types';
import { useState } from 'react';

const Departments = props => {
    // State to track if full text is shown
    const [isExpanded, setIsExpanded] = useState(false);

    // Text content to be truncated
    const description1 = `
        The Diploma in Electrical Engineering at Sherpur Polytechnic Institute provides students with comprehensive 
        knowledge of electrical systems, circuits, and power generation. Through practical training and theoretical 
        coursework, students develop skills in designing, maintaining, and troubleshooting electrical systems, preparing 
        them for successful careers in the electrical and energy industries.
    `;
    const description2 = `
       The Diploma in Computer Engineering at Sherpur Polytechnic Institute offers a strong foundation in computer science, programming, and software development. Students gain hands-on experience in coding, networking, and hardware design, preparing them for careers in software engineering, IT support, and technology-driven industries with practical, industry-relevant skills.
    `;
    const description3 = `
        The Diploma in Electrical Engineering at Sherpur Polytechnic Institute provides students with comprehensive 
        knowledge of electrical systems, circuits, and power generation. Through practical training and theoretical 
        coursework, students develop skills in designing, maintaining, and troubleshooting electrical systems, preparing 
        them for successful careers in the electrical and energy industries.
    `;
    const description4 = `
        The Diploma in Electrical Engineering at Sherpur Polytechnic Institute provides students with comprehensive 
        knowledge of electrical systems, circuits, and power generation. Through practical training and theoretical 
        coursework, students develop skills in designing, maintaining, and troubleshooting electrical systems, preparing 
        them for successful careers in the electrical and energy industries.
    `;

    // Function to toggle text visibility
    const toggleText = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div>
            <div className='bg-gray-100'>
                <div className='py-10'>
                    <div className='text-center max-w-6xl mx-auto space-y-3 p-2'>
                        <h1 className='text-5xl font-bold'>Our Departments</h1>
                        <p className='text-lg'>
                            The Computer, Civil, and Electrical departments at Sherpur Polytechnic Institute provide comprehensive, hands-on training in cutting-edge technology, engineering, and infrastructure. Each department combines theoretical knowledge with practical skills, preparing students to excel in their respective fields and meet industry demands.
                        </p>
                    </div>

                    <div className='border-2 bg-green-200 border-[#5bec91]  container mx-auto my-5 p-10 rounded-xl flex flex-col gap-5'>

                        <div className="card card-side border-2 border-[#5bec91] bg-gray-100 transition hover:scale-105 overflow-hidden flex flex-col lg:flex-row lg:p-10">
                            {/* Image Section */}
                            <figure className="w-full lg:w-2/5">
                                <img
                                    className='h-full p-2 rounded-2xl object-cover'
                                    src="https://i.postimg.cc/SNpVt8Lh/Whats-App-Image-2024-11-07-at-6-28-11-PM.jpg"
                                    alt="Department Image" />
                            </figure>

                            {/* Text Section */}
                            <div className="card-body lg:w-3/5 p-4">
                                <h2 className="card-title text-2xl font-bold">Diploma in Computer Engineering</h2>
                                <p className='text-lg mt-2'>

                                    <span className="sm:hidden">
                                        {isExpanded ? description2 : `${description2.slice(0, 100)}...`}
                                        <button
                                            onClick={toggleText}
                                            className="text-blue-500 underline ml-2"
                                        >
                                            {isExpanded ? "See Less" : "See More"}
                                        </button>
                                    </span>
                                    <span className="hidden sm:inline ">
                                        {description2}
                                    </span>
                                </p>
                            </div>
                        </div>


                        <div className="card card-side border-2 border-[#5bec91] bg-gray-100 transition hover:scale-105 overflow-hidden flex flex-col lg:flex-row">

                            {/* Text Section */}
                            <div className="card-body lg:w-3/5 p-4">
                                <h2 className="card-title text-2xl font-bold">Diploma in Electrical Engineering</h2>
                                <p className='text-lg mt-2'>

                                    <span className="sm:hidden">
                                        {isExpanded ? description1 : `${description1.slice(0, 100)}...`}
                                        <button
                                            onClick={toggleText}
                                            className="text-blue-500 underline ml-2"
                                        >
                                            {isExpanded ? "See Less" : "See More"}
                                        </button>
                                    </span>
                                    <span className="hidden sm:inline ">
                                        {description1}
                                    </span>
                                </p>
                            </div>

                            {/* Image Section */}
                            <figure className="w-full lg:w-2/5">
                                <img
                                    className='h-full p-2 rounded-2xl object-cover'
                                    src="https://i.postimg.cc/Z5wcRMGb/Whats-App-Image-2024-11-07-at-6-28-11-PM-2.jpg"
                                    alt="Department Image" />
                            </figure>
                        </div>



                        <div className="card card-side border-2 border-[#5bec91] bg-gray-100 transition hover:scale-105 overflow-hidden flex flex-col lg:flex-row">
                            {/* Image Section */}
                            <figure className="w-full lg:w-2/5">
                                <img
                                    className='h-full p-2 rounded-2xl object-cover'
                                    src="https://i.postimg.cc/zG2C5Rh3/Whats-App-Image-2024-11-07-at-6-41-41-PM.jpg"
                                    alt="Department Image" />
                            </figure>

                            {/* Text Section */}
                            <div className="card-body lg:w-3/5 p-4">
                                <h2 className="card-title text-2xl font-bold">Diploma in Electornics Engineering</h2>
                                <p className='text-lg mt-2'>

                                    <span className="sm:hidden">
                                        {isExpanded ? description3 : `${description3.slice(0, 100)}...`}
                                        <button
                                            onClick={toggleText}
                                            className="text-blue-500 underline ml-2"
                                        >
                                            {isExpanded ? "See Less" : "See More"}
                                        </button>
                                    </span>
                                    <span className="hidden sm:inline ">
                                        {description3}
                                    </span>
                                </p>
                            </div>
                        </div>

                        <div className="card card-side border-2 border-[#5bec91] bg-gray-100 transition hover:scale-105 overflow-hidden flex flex-col lg:flex-row">
                            {/* Text Section */}
                            <div className="card-body lg:w-3/5 p-4">
                                <h2 className="card-title text-2xl font-bold">Diploma in Cevil Engineering</h2>
                                <p className='text-lg mt-2'>

                                    <span className="sm:hidden">
                                        {isExpanded ? description4 : `${description4.slice(0, 100)}...`}
                                        <button
                                            onClick={toggleText}
                                            className="text-blue-500 underline ml-2"
                                        >
                                            {isExpanded ? "See Less" : "See More"}
                                        </button>
                                    </span>
                                    <span className="hidden sm:inline ">
                                        {description4}
                                    </span>
                                </p>
                            </div>

                            {/* Image Section */}
                            <figure className="w-full lg:w-2/5">
                                <img
                                    className='h-full p-2 rounded-2xl object-cover'
                                    src="https://i.postimg.cc/SxSdmht1/Whats-App-Image-2024-11-07-at-6-28-11-PM-1.jpg"
                                    alt="Department Image" />
                            </figure>

                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

Departments.propTypes = {};

export default Departments;


