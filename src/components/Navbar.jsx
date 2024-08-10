import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { states } from "../constants";

import Title from "./Title";
import { demomode } from "../constants";

const demobox = demomode ? styles.demo.navbar : {};

const Navbar = ({ setActive }) => {
   
  const [onCollection, setOnCollection] = useState(true);
  const [animate, setAnimate] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-7 fixed top-0 z-20 bg-transparent`}
      style={demobox}
    >
      {/* TITLE */}
      <div className='w-full flex justify-between items-center max-w-full mx-auto' style={demobox}>
        <Link
          className='flex items-center gap-2'
          onClick={() => {
            setActive("Main");
            window.scrollTo(0, 0);
            setAnimate(false);
          }}
        >
          <Title />
        </Link>

        {/* NAVLINKS */}
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {states.map((state) => { if (state.menuItem) return (
            <li
              key={state.id}
              className={`text-white hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => { 
                setActive(state.title);
                setOnCollection(state.collection);
                setAnimate(true);
                }
              }
              style={demobox}
            >
              <a href={`#${state.id}`}>{state.title}</a>
            </li>
          )}
          )}
        </ul>
      </div>      
    </nav>
  ); 
}

export default Navbar;