import React from "react";
import { About } from "./components/about/about";
import { Contact } from "./components/contact/contact";
import { Experience } from "./components/experience/experience";
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import { Nav } from "./components/nav/nav";
import { Portfolio } from "./components/portfolio/portfolio";
import { Parallax } from "react-parallax";
export const App = () => {
  return (
    <>
      <Parallax strength={-200} bgImage={require('./assets/bg.jpg')} blur={{min:-15, max:15}}>
        <Header />
        </Parallax>
      <Nav />
      <Parallax strength={-200} bgImage={require('./assets/bg2.jpg')} blur={{min:-15, max:15}}>
          <About />
      </Parallax>
      <Parallax strength={-200} bgImage={require('./assets/bg.jpg')} blur={{min:-15, max:15}}>
         <Experience />
      </Parallax>
      <Parallax strength={-200} bgImage={require('./assets/bg2.jpg')} blur={{min:-15, max:15}}>
          <Portfolio />
      </Parallax>
      <Parallax strength={-200} bgImage={require('./assets/bg.jpg')} blur={{min:-15, max:15}}>
          <Contact />
      </Parallax>
      <Footer />
     
    </>
  );
};
