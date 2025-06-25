import { useState } from "react";
import { FaBars } from "react-icons/fa";
import MenuPanel from "./MenuPanel";
import logo from "../assets/logo.jpg";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const navItems = [
    "Orientation",
    "Welcome Week",
    "Family Programs",
    "Student Leadership",
    "Connect",
  ];

  const submenus = {
    "Orientation": ["Campus Tour", "Checklist", "Housing Info"],
    "Welcome Week": ["Opening Ceremony", "Club Fair", "Icebreakers"],
    "Family Programs": ["Parent Info", "Support Sessions"],
    "Student Leadership": ["Workshops", "Apply", "Roles"],
    "Connect": ["Find Advisors", "Peer Mentors"],
  };

  return (
    <header className="bg-black text-white sticky top-0 z-50">
      {/* Top Row */}
      <div className="container-fluid d-flex justify-content-between align-items-center px-3 py-2">
        {/* Logo & Title */}
        <div className="d-flex align-items-center gap-2">
          <img
            src={logo}
            alt="ABC University Logo"
            className="h-16 w-auto rounded-sm object-contain"
          />
          <span className="fs-5 fw-bold">Campus Resources</span>
        </div>

        {/* Hamburger Always Visible */}
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="btn btn-link text-white fs-4 "
          aria-label="Toggle Menu"
        >
          <FaBars />
        </button>
      </div>

      {/* Centered Second Row Nav */}
      <nav className="bg-black border-top border-secondary py-2">
        <div className="container-fluid px-3">
          <ul className="d-flex flex-wrap justify-content-center gap-4 m-0 p-0 list-unstyled">
            {navItems.map((item, index) => (
              <li
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="position-relative"
              >
                <a
                  href="#"
                  className="text-decoration-none hover:text-northeasternRed  px-2"
                >
                  {item}
                </a>

                {/* Submenu */}
                {hoveredIndex === index && submenus[item] && (
                  <ul
                    className="position-absolute top-100 start-50 translate-middle-x mt-2 bg-white text-black shadow rounded p-2 list-unstyled hover:text-northeasternRed"
                    style={{ minWidth: "200px", zIndex: 1000 }}
                  >
                    {submenus[item].map((subItem, subIdx) => (
                      <li
                        key={subIdx}
                        className="px-2 py-1 hover:bg-light rounded"
                      >
                        <a
                          href="#"
                          className="text-decoration-none text-dark small"
                        >
                          {subItem}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Slide-out MenuPanel */}
      {showMenu && (
         <div className="position-absolute top-100 end-0 mt-2 me-3 bg-white text-black shadow p-3 rounded z-50" style={{ width: "200px" }}>
           <MenuPanel />
         </div>
      )}
    </header>
  );
}
