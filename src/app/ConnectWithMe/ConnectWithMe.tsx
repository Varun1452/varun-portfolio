"use client";
import React from "react";

const skillsData = [
  { src: "./linkedIn.svg", alt: "HTML5 Logo", label: "LinkedIn", href: "https://in.linkedin.com/in/varun-gaudani-938b79292" },
  { src: "./instagram.svg", alt: "CSS3 Logo", label: "Instagram", href: "https://www.instagram.com/varun_verse_2505/" },
  { src: "./facebook.svg", alt: "JavaScript Logo", label: "Facebook", href: "https://www.facebook.com/profile.php?id=100075145203930" },
//   { src: "./telegram.svg", alt: "ReactJS Logo", label: "Telegram", href: "https://telegram.org" },
  { src: "./gmail.svg", alt: "React Hook Forms Logo", label: "varungaudani80@gmail.com", href: "mailto:varungaudani80@gmail.com" },
];

const ConnectWithME = () => {
  return (
    <div id="skills" className=" flex flex-col gap-2 md:gap-8 my-20 sm:mt-10 md:mt-36">
      <div className="flex justify-center">
        <h1 className="text">
          <span className="letter text-3xl md:text-4xl flex">
            Connect With Me
          </span>
        </h1>
      </div>
      <div className=" mx-0 md:mx-40 mt-10 flex flex-wrap gap-4 justify-center">
        {skillsData.map((skill, index) => (
          <a
            key={index}
            href={skill.href}
            target="_blank"
            rel="noopener noreferrer"
            className="min-w-[50px] my-0 mx-0 md:my-2 md:mx-2 backdrop-blur-md backdrop-brightness-15 0 text-white md:py-4 md:px-6 py-2 px-4 rounded-full flex items-center justify-center shadow-lg"
          >
            <img
              src={skill.src}
              alt={skill.alt}
              className={`mr-4 md:h-12 h-6 md:w-12 w-6 ${
                skill.label === "ReactJS" ? "animate-spin" : skill.label === "Redux" ? "animate-spin" : ""
              }`}
            />
            <h1 className="text-center text-lg md:text-3xl">{skill.label}</h1>
          </a>
        ))} 
      </div>
      <div className="flex justify-center">
        <img className="" src="./avatar-mac.svg" alt="" />
      </div>
      </div>
  );
};

export default ConnectWithME;