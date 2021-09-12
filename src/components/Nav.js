import React from 'react';

function Nav(props) {
  const tabs = ['Home', 'AboutMe', 'Portfolio', 'Contact', 'Resume'];
  return (
    <header>
      <nav className="navbar">
        <h2>My Portfolio</h2>
        <ul className="nav justify-content-end">
          {tabs.map(tab => (
            <li className="nav-item" key={tab}>
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