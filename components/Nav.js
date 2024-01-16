'use client'
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from "react-scroll";
import Image from 'next/image';
import logo from '../public/img/logo.png';
import {useState, useEffect} from 'react';

export default function Nav() {
  const [menuOpen, setMenu] = useState(false);
  const toggleMenu = () => {
      setMenu(!menuOpen);
  };

  return (
    <div>
      <div className={ menuOpen ? 'ease-in-out duration-300 left-[0%] w-9/12 bg-neutral-950 h-screen z-50 fixed mr-8 flex flex-col border border-r-2 border-t-0 border-l-0 border-b-0 border-neutral-800' : 'fixed left-[-100%]'}>
        <ul className="font-sans text-xl uppercase w-full px-4 bg-neutral-950 pb-4">
            <Link activeClass="active" to="heroSection" spy={true} smooth={true} duration={500}>
              <li className="font-display leading-none text-[#dacf89] text-3xl md:text-4xl uppercase block hover:cursor-pointer hover:underline  border-neutral-600 mr-2 pr-4 pt-5"><button onClick={toggleMenu}><Image src={logo} className='w-full max-w-[150px]'  alt="Garry Bell Unmaksed book logo"/></button></li>
            </Link>
          </ul>
        <ul className="font-sans text-base uppercase flex flex-col text-white px-4 h-full">
          <Link activeClass="active" to="aboutSection" spy={true} smooth={true} duration={500}>              
            <li className="hover:cursor-pointer hover:underline py-4 border border-b-2 border-t-0 border-r-0 border-l-0 border-neutral-200"><button onClick={toggleMenu}>About</button></li>
          </Link>
          <Link activeClass="active" to="sampleSection" spy={true} smooth={true} duration={500}>
            <li className="hover:cursor-pointer hover:underline py-4 border border-b-2 border-t-0 border-r-0 border-l-0 border-neutral-200"><button onClick={toggleMenu}>Read a sample</button></li>
          </Link>
          <li className="py-4"> <a className="px-4 py-2 bg bg-[#dacf89] text-xl font-semibold text-neutral-900 hover:bg-amber-400 block text-center hover:cursor-pointer uppercase"  target="_blank" rel="noopener noreferrer" >preorder</a></li>
        </ul>
      </div>

      <nav className='w-full bg-neutral-950 border-b border-neutral-800 fixed z-40'>
        <div>
          <ul className="px-4 md:px-8 font-sans text-xl uppercase float-left w-full md:w-4/12 flex flex-row justify-items-center justify-between py-2">
            <Link activeClass="active" to="heroSection" spy={true} smooth={true} duration={500}>
              <li className="float-left font-display leading-none text-[#dacf89] text-xl md:text-4xl uppercase inline-block mt-1 md:mt-0 lg:mt-1  hover:cursor-pointer hover:underline  border-neutral-600 mr-2 pr-4"><button><Image src={logo} className='w-full max-w-[150px] mt-2'  alt="Garry Bell Unmaksed book logo"/></button></li>
            </Link>
            <li className="md:hidden font-display leading-none text-white text-xl md:text-4xl uppercase inline-block float-right mt-4 hover:cursor-pointer hover:underline pt-1" onClick={toggleMenu}><button>{menuOpen ? <FaTimes/> : <FaBars/>}</button></li>
          </ul>
          <ul className="px-8 hidden md:inline-block float-right pt-5 text-white">
            <Link activeClass="active" to="aboutSection" spy={true} smooth={true} duration={500}>              
              <li className="px-3 inline-block hover:cursor-pointer hover:underline"><button className="uppercase font-sans hover:underline">About</button></li>
            </Link>
            <Link activeClass="active" to="sampleSection" spy={true} smooth={true} duration={500}>
              <li className="px-3 inline-block hover:cursor-pointer hover:underline"><button className="uppercase font-sans hover:underline">Read a sample</button></li>
            </Link>
            <li className="pl-3 inline-block "> <a className="px-4 py-2 bg bg-[#dacf89]  text-black hover:bg-amber-400 inline-block text-center hover:cursor-pointer uppercase"  target="_blank" rel="noopener noreferrer" >preorder</a></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}


