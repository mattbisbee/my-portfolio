import React from "react";
import Ramble from '../../assets/rambleonsite.jpg';
import Quote from '../../assets/quotegenerator.jpg';
import Horiseon from '../../assets/horiseon.PNG';
import Weather from '../../assets/weather.jpg';

const Portfolio = () => (
  <main>
    <h1>Portfolio</h1>
    <p>
      Welcome to the main event! This is a list of some of my work that I have completed. Click on the images to go to the web pages. For a more comprehesive look, check out my GitHub page by clicking the GitHub icon at the bottom of the page. Thanks for looking!
    </p>
    <section className="flex-container">
      <h2 id="my-work">My Work</h2>
        <article  alt="Ramble-on Website"><a href="https://rocky-bayou-69146.herokuapp.com/" target="_blank" rel="noreferrer" id="rambleon-link"><img src={Ramble} alt='Rambleon website' className="ramble"></img></a>
        </article>
        <article alt="Horiseon Website"><a href="https://asa-grace.github.io/Quote-Generator" target="_blank" rel="noreferrer" id="horiseon-link"><img src={Quote} alt='Quote Generator' className="quote"></img></a>
        </article>
        <article id="Weather App"><a href="https://mattbisbee.github.io/Challenge1/" target="_blank" rel="noreferrer" id="weatherapp-link"><img src={Horiseon} alt='Horiseon website' className="horiseon"></img></a>
        </article>
        <article id="Quote Generator"><a href="https://mattbisbee.github.io/Weather-display/" target="_blank" rel="noreferrer" id="quote-generator-link"><img src={Weather} alt='Weather App' className="weather"></img></a>
        </article>
    </section>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
  </main>
  
);

export default Portfolio;
