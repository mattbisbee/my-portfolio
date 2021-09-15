import React from "react";
import Matt from '../../assets/Matt.jpg';

const Home = () => (
  <main>
    <h1>Home</h1>
    <p>
      Welcome to my portfolio website! I am a new full stack web developer and I will be graduating soon from the University of Utah's full stack web developer bootcamp. There is a lot to learn in the coding world and the bootcamp was a great chance to abosrb as much as possible. On the front end I have learned how to code HTML, CSS, and JavaScript. I have also learned the back end side of coding including API's, relational and non-realtional databases, and middleware.
    </p>
    <p>
      Explore my website to learn more about what I have to offer as a Full Stack Web Developer.
    </p>
    <img src={Matt} alt='Matt Bisbee' className="matt"></img>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
  </main>
);

export default Home;
