import React, { useState } from 'react';
import Nav from './Nav';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Footer from './Footer';
//import coverImage from "../assets/cover/Paris.JPG";


function PortfolioRender() {
  const [currentPage, handlePageChange] = useState('Home');
 

  const renderPage = () => {
    switch (currentPage) {
      case 'AboutMe':
        return <AboutMe />;
      case 'Resume':
        return <Resume />;
      case 'Contact':
        return <Contact />;
      case 'Portfolio':
        return <Portfolio />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" /> */}
      <div>{renderPage(currentPage)}</div>
      <Footer></Footer>
    </div>
  );
}

export default PortfolioRender;
