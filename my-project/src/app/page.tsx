

import Navbar from "../../components/Navbar"
import Video from "../../components/HomePage";
import ImageSlider from "../../components/ImageSlider";
import Joinus from "../../components/Joinus";
import Estimate from "../../components/Estimate";
import Footer from "../../components/Footer";


export default function Home() {
  return (
     <>
     <div>
      
      <Navbar/>
      <Video/>
     <ImageSlider/>
     <Joinus/>
     <Estimate/>
     <Footer/>
     </div>
       
     </>
  );
}
