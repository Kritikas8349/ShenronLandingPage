import React, { useState } from "react";

import Navbar from "./components/Navbar";
import ForexHero from "./components/ForexHero";
import EnquiryModal from "./components/EnquiryModal";

function App() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  const openEnquiry = () => {
    setEnquiryOpen(true);
  };

  const closeEnquiry = () => {
    setEnquiryOpen(false);
  };

  return (
    <>
      <Navbar onEnquiry={openEnquiry} />

      <ForexHero onEnquiry={openEnquiry} />

      <EnquiryModal
        isOpen={enquiryOpen}
        onClose={closeEnquiry}
      />
    </>
  );
}

export default App;