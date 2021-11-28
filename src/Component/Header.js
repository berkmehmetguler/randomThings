import BgVideo from "../images/Earth.mp4";

import Logo from "../images/elephant_logo.png"

const Header = ({ startA, start }) => {
  return (
    <header>
      <div className="container">
        <nav className="nav py-2">
          <a href="/" className="navbar-brand fs-2 g-3 text-light justify-content-between align-items-center d-flex">
           <img className="me-4" src={Logo} alt="" /> <span>Random Things</span>
          </a>
          <ul className="navbar-nav flex-row justify-content-center align-items-center">
            <li className="nav-item">
              <a href="/" className="nav-link text-light fs-4">
                Homepage 
              </a>
            </li>
            <li className="nav-item text-light"> | </li>
            <li className="nav-item">
              <a href="" className="nav-link text-light fs-4">
                Feedback
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
