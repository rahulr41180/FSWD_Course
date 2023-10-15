
import './App.css';

import { Header } from "./components/HeaderMe/Header";

import { Navbar } from "./components/NavbarMe/Navbar";

import { About } from "./components/AboutMe/About";

import { Education } from "./components/EducationMe/Education";

import { Experience } from "./components/ExperienceMe/Experience";

import { Services } from "./components/ServicesMe/Services";

import { Portfolio } from "./components/PortfolioMe/Portfolio";

import { Testimonial } from "./components/TestimonialMe/Testimonial";

import { Contact } from "./components/ContactMe/Contact";

import { Footer } from "./components/FooterMe/Footer";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <About />
      <Education />
      <Experience />
      {/* <Services /> */}
      <Portfolio />
      {/* <Testimonial /> */}
      <Contact />
      <Footer />
    </>
  );
}

export default App;
