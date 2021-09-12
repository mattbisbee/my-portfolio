import React from "react";
import Spartan from '../../assets/spartan.jpg';

const AboutMe = () => (
  <main>
    <h1>About Me</h1>
    <p>
    For the past 10 years I have been in Retail Management. My career took me to different roles in a few different companies. Multi-tasking, personal and team leadership, team building, and time-management were just a few of the skills I developed. Skills I'm excited to put to good use in my new career field! And although I had spent many years in store leadership, I realized that my path lay elsewhere. To that end I sold my house, quit my job, and moved away in order to go to school full time to start my journey as a web developer.
    </p>
    <p>
    Outside of work, I have developed many passions. The outdoors are amazing so I love to hike and camp.My love of the outdoors and my desire to push myself led me to many starting lines at the Spartan Races. There's nothing like wearing that medal at the end! I also love traveling. The adventure of meeting new people, learning words from the local language, trying new food, and seeing different places is something I will never get tired of.
    </p>
    <img src={Spartan} alt='Spartan Race!' className="spartan"></img>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
  </main>
);

export default AboutMe;