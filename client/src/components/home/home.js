import { useState, useEffect } from "react";
import SquareLoader from "react-spinners/SquareLoader";
import { About } from "../about/about";
import { Contact } from "../contact/contact";
import { Experience } from "../experience/experience";
import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import { Nav } from "../nav/nav";
import { Portfolio } from "../portfolio/portfolio";
import { Parallax } from "react-parallax";
import axios from "axios";

export const Home = (props) => {
  const [loading, setLoading] = useState(false);
  const [profile,setProfile] = useState([]);
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "#e5958e",
    alignSelf: "center",
  };
  useEffect(() => {
    const fetchProfile= async () => {
      setLoading(true);
      try {
        const result = await axios(`${process.env.REACT_APP_APP_URL}/profiles`, {
          headers: {
            Accept: "application/json",
          },
        });
        //get user
        const data = result.data.profiles;
        console.log(data);
        setProfile(data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        console.log(err);
      }
    };
    fetchProfile();

  }, []);

  return (
    <>
    {loading &&
      <div className="sweet-loading">
        <SquareLoader
          color="#e5958e"
          loading={loading}
          cssOverride={override}
          size={60}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>}

  
     <Nav home="true"  />
          <div>
      <Parallax strength={-200} bgImage={require('../../assets/bg.jpg')} blur={{min:-15, max:15}}>
        <Header profile={profile} />
        </Parallax>
      <Parallax strength={-200} bgImage={require('../../assets/bg2.jpg')} blur={{min:-15, max:15}}>
          <About profile={profile} />
      </Parallax>
      <Parallax strength={-200} bgImage={require('../../assets/bg.jpg')} blur={{min:-15, max:15}}>
         <Experience profile={profile} />
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
