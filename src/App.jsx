import { useEffect, useState } from "react";
import Features from "./views/Features";
import Footer from "./views/Footer";
import Header from "./views/Header";
import Hero from "./views/Hero";
import Latest from "./views/Latest";
import MenuMobile from "./views/MenuMobile";

const App = () => {
  const [open,setOpen] = useState(false)

  useEffect(()=>{
    document.body.classList.toggle('body-blocked')
  },[open])
  
  return (
    <>
      {open?<MenuMobile/>:null}
      <Header open={open} setOpen={setOpen}/>
      <Hero />
      <Features/>
      <Latest/>
      <Footer/>
    </>
  );
};

export default App;
