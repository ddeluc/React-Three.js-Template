import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

import {
  Navbar,
  Hero,
  Landing,
} from './components';

const App = () => {
  const [onLanding, setOnLanding] = useState(false);
  const [active, setActive] = useState("Main");

  if (onLanding) {
    return (
      <>
        <Landing setOnLanding={setOnLanding}/>
      </>
    )
  } else {
    return (
      <BrowserRouter>
        <div className='relative z-0 bg-primary'>
          <Navbar setActive={setActive} />
          <Hero active={active} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
