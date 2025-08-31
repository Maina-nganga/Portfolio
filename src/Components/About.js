import React from 'react';

const About = () => {
  return (
    <div className="p-10 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">About</h1>
        <p className="text-lg mb-4">
          My name is John Maina. I am from Nairobi Kenya, .
        </p>
        <p className="text-lg mb-4">
          I am a passionate Fullstack Developer. I have strong technical skills and extensive experience in crucial frontend technologies such as JavaScript, ReactJS, HTML, and CSS. With a creative flair and an eye for design, I can skillfully bring an application to life, refining every detail to achieve a polished end result. I am also committed to keeping pace with the ever-evolving technological landscape.
        </p>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">My hobbies include:</h2>
        <ul className="list-disc list-inside">
          <li className="mb-2">
            Playing games (currently enjoying Asphalt 9) cool game!
          </li>
          <li className="mb-2">
            Listening to music. I enjoy listening to house genre. I love house music because it helps me concentrate for long hours and I am drawn to beats as an individual
          </li>
          <li className="mb-2">
            Watching movies.
          </li>
          <li className="mb-2">
            Dancing. I love dancing because I get to relax, take a breather and exercise especially after staring at the computer for a long time. Taking breaks during my coding sessions is very important
          </li>
          <li className="mb-2">
            Traveling and experiencing new places
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;