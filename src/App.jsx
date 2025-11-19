// import Navbar from "./assets/components/Navbar";
// import HeroSection from "./assets/components/HeroSection";
// import './index.css';
// import Projects from "./assets/components/Projects";

// function App() {
//   return (
//     <div>
//       <Navbar />
//       <HeroSection />
//       <Projects/>
//     </div>
//   );
// }

// export default App;

import Navbar from "./assets/components/Navbar";
import HeroSection from "./assets/components/HeroSection";
import Projects from "./assets/components/Projects";
import About from "./assets/components/About";
import './index.css';


function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Projects />
      {/* <About /> */}
    </div>
  );
}

export default App;
