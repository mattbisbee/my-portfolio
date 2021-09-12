import React from 'react';

function Nav(props) {
  const tabs = ['Home', 'AboutMe', 'Portfolio', 'Contact', 'Résumé'];
  return (
    <header>
      <nav className="navbar">
        <h2>Matt Bisbee</h2>
        <ul className="nav justify-content-end">
          {tabs.map(tab => (
            <li key={tab}>
              <a
                href={'#' + tab.toLowerCase()}
                onClick={() => props.handlePageChange(tab)}
                className={
                  props.currentPage === tab ? 'nav-link active' : 'nav-link'
                }
              >
              {tab}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;