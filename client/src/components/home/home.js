import React from "react";
import { About } from "../about/about";
import { Contact } from "../contact/contact";
import { Experience } from "../experience/experience";
import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import { Nav } from "../nav/nav";
import { Portfolio } from "../portfolio/portfolio";
import { Parallax } from "react-parallax";
export const Home = (props) => {


  return (
    <>
     <Nav home="true"  />
          <div>
      <Parallax strength={-200} bgImage={require('../../assets/bg.jpg')} blur={{min:-15, max:15}}>
        <Header />
        </Parallax>
      <Parallax strength={-200} bgImage={require('../../assets/bg2.jpg')} blur={{min:-15, max:15}}>
          <About />
      </Parallax>
      <Parallax strength={-200} bgImage={require('../../assets/bg.jpg')} blur={{min:-15, max:15}}>
         <Experience />
      </Parallax>
      <Parallax strength={-200} bgImage={require('../../assets/bg2.jpg')} blur={{min:-15, max:15}}>
          <Portfolio />
      </Parallax>
      <Parallax strength={-200} bgImage={require('../../assets/bg.jpg')} blur={{min:-15, max:15}}>
          <Contact />
      </Parallax>
      <Footer />
     </div>
    </>
  );
};
