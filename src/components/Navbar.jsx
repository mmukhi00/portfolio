import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../style";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={`${styles.paddingX} flex items-center py-5 fixed top-0 z-30 w-full bg-cyan-950 rounded-b-[70px] `}
    >
      <div
        className="w-full flex 
      justify-between items-center max-w-7xl mx-auto"
      >
        <Link
          to="/"
          className="flex  gap-5 items-center"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-12 h-15 object-left" />
          <p className="text-white  text-[18px] font-medium cursor-pointer">
            Mahima Mukhi
            <span className="sm:block hidden font-light text-[15px]">
              React | Next.js | Typescript
            </span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`
              ${active == link.title ? "text-white" : "text-stone-300"}
               hover:text-white
               hover:text-[16px]
               text-[15px] font-normal cursor-pointer
              `}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end item-center">
          <img
            src={toggle ? close : menu}
            alt={menu}
            className="w-[22px] h-[22px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 absolute top-20 right-0 mx-4 my-2 min-w-[120px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-6">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`
              ${active === link.title ? "text-white" : "text-stone-300"}

                font-poppins
               text-[15px] font-normal cursor-pointer
            
              `}
                  onClick={() => {
                    setToggle(!toggle);
                    // console.log("title:" + link.title);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
