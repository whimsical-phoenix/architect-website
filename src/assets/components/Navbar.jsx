// export default function Navbar() {
//   return (
//     <nav>
//       <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
//         <div style={{ fontSize: '1.5rem', fontFamily: 'Playfair Display, serif', color: '#6B705C' }}>Varij

//         </div>
//         <ul>
//           <li>Home</li>
//           <li>Projects</li>
//           <li>Testimonials</li>
//           <li>Contact</li>
//         </ul>
//       </div>
//     </nav>
//   );
// }
import React, { useEffect, useState } from "react";
import logo from "../../assets/floral4.png"; // <-- PNG path import

const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const rotation = scrollY / 5;


  

  return (
    <nav className="navbar">
      <div
        className="logo-container"
        // style={{ transform: `rotate(${rotation}deg)` }}
      >
        {/* <img src={logo} alt="Lotus Logo" className="lotus-logo" /> */}
          <img
          src={logo}
          alt="Lotus Logo"
          className="lotus-logo"
          style={{ transform: `rotate(${rotation}deg)` }}
        />
        <span className="brand-name">Varij</span>
      </div>

      <ul className="nav-links">
        <li>Home</li>
        <li>Projects</li>
        <li>Testimonials</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
