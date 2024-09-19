import React, { useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiences } from '../constants';
import Footer from './Footer';

const Experience = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleRoleClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className='experience bg-black w-screen text-white pt-4 pt-16 overflow-x-hidden' id='experience'>
      <div className='pt-12 sm:px-16'>
        <p className='font-light'>E-Cell Journey so Far.</p>
        <h2 className='text-4xl sm:text-5xl font-extrabold mt-2'>E-CELL EVENTS</h2>
      </div>

      <VerticalTimeline className='mt-9'>
        {experiences.map((experience) => (
          <VerticalTimelineElement
            key={experience.role}
            className="relative vertical-timeline-element--work cursor-pointer"
            contentStyle={{ background: "#1d1836", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #232631" }}
            date={experience.duration}
            iconStyle={{ background: '#fff' }}
            icon={
              <a className='flex justify-center items-center w-full h-full' href={experience.url} target='_blank' rel="noreferrer">
                <img
                  src={experience.logo}
                  alt={experience.company}
                  className='w-[60%] h-[60%] object-contain'
                />
              </a>
            }
            onClick={() => handleRoleClick(experience.image)} // Update state with image URL on click
          >
            <div>
              <h3 className='text-white text-[24px] font-bold'>{experience.role}</h3>
              <p className='text-secondary text-[16px] font-semibold' style={{ margin: 0 }}>
                {experience.company}
              </p>

              <ul className='mt-5 list-disc ml-5 space-y-2'>
                {experience.points.map((point, index) => (
                  <li
                    key={`experience-point-${index}`}
                    className='text-white-100 text-[14px] pl-1 tracking-wider'
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>

      {/* Conditionally render the image */}
      {selectedImage && (
        <div className='flex justify-center items-center mt-10'>
          <img
            src={selectedImage}
            alt='Experience visual'
            className='w-[80%] h-auto object-contain rounded-lg'
          />
        </div>
      )}

    </div>
  );
};

export default Experience;
