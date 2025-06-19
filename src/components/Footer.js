import React from 'react';
import './Footer.css';

const Footer = ({ onGetInTouchClick }) => {
  return (
    <footer className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center justify-center gap-y-2 py-10 text-center">
      <div className="relative">
        <svg className="absolute top-1/2 left-1/2 z-50 w-8 -translate-x-1/2 -translate-y-1/2 md:w-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5350 5350">
          <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" className="fill-black dark:fill-white" style={{ fontSize: '3500px', fontWeight: 'bold' }}>
            RS
          </text>
        </svg>
      </div>
      <span className="mt-4 text-base font-light tracking-wide text-black sm:text-2xl lg:text-3xl dark:text-white">
        <h3 className="text-nowrap" style={{ opacity: 1, transform: 'none' }}>FROM CONCEPT TO <span className="font-extrabold">CREATION</span></h3>
        <h3 className="mt-3 text-nowrap" style={{ opacity: 1, transform: 'none' }}>LET's MAKE IT <span className="font-extrabold">HAPPEN!</span></h3>
      </span>
      <div className="group" style={{ transform: 'none' }}>
        <button onClick={onGetInTouchClick} className="group relative inline-flex cursor-pointer items-center justify-between overflow-hidden rounded-full border border-black/30 bg-black/20 py-[3px] pr-[3px] pl-2 text-base font-medium opacity-85 backdrop-blur-xs transition-all hover:bg-transparent md:py-1 md:pr-1 md:pl-3 dark:border-white/10 dark:bg-white/10 my-10 group-hover:scale-125">
          <span className="z-10 px-3 text-black transition-colors duration-300 group-hover:text-white dark:text-white dark:group-hover:text-black">Get In Touch</span>
          <span className="absolute inset-0 translate-x-[45%] scale-0 rounded-full bg-black opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100 dark:bg-white"></span>
          <span className="z-10 flex items-center justify-center overflow-hidden rounded-full bg-black p-2 transition-colors duration-300 group-hover:bg-transparent md:p-2.5 dark:bg-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right text-white transition-all duration-300 group-hover:translate-x-5 group-hover:opacity-0 dark:text-black" aria-hidden="true">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right absolute -translate-x-5 text-white opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 dark:text-black" aria-hidden="true">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </span>
        </button>
      </div>
      <p className="tracking-wid text-base font-semibold lg:text-2xl text-white">I'm available for full-time roles.</p>
      <p className="my-2 text-xs font-extralight tracking-wide text-balance opacity-75 lg:text-sm">
        I thrive on crafting dynamic web applications, and<br />
        delivering seamless user experiences.
      </p>
    </footer>
  );
};

export default Footer; 