import React, { useState } from "react";

import Navbar from "./components/Navbar";
import ForexHero from "./components/ForexHero";
// import EnquiryModal from "./components/EnquiryModal";

function App() {



  return (
    <>

      {/* ==============================
          NAVBAR
      =============================== */}

      <Navbar
      />


      {/* ==============================
          MAIN LANDING PAGE
      =============================== */}

      <ForexHero
      />


      {/* ==============================
          ENQUIRY POPUP
      =============================== */}

      {/* <EnquiryModal
    
      /> */}

    </>
  );
}

export default App;