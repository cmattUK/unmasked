import Image from 'next/image';
import { FaBars } from "react-icons/fa";
import portrait from '../public/img/garrykid.jpg';

export default function Nav() {
  return (
    <nav className='w-full bg-neutral-950 border-b border-neutral-800 fixed z-50 md:py-4 py-2'>
      <div >
        <ul className="py-2 px-4 md:px-8 font-sans text-xl uppercase float-left w-full md:w-2/12">
          <li className="float-left font-display leading-none text-[#dacf89] text-xl md:text-4xl uppercase inline-block mt-1 hover:cursor-pointer hover:underline  border-neutral-600 mr-2 pr-4">UNMASKED</li>
          <li className="md:hidden font-display leading-none text-white text-xl md:text-4xl uppercase inline-block float-right mt-1 hover:cursor-pointer hover:underline"><button><FaBars/></button></li>
        </ul>
      <ul className="py-2 px-8 font-sans font-normal text-base uppercase mb-2 hidden md:inline-block float-right">
        <li className="px-3 inline-block hover:cursor-pointer hover:underline"><a>About</a></li>
        <li className="px-3 inline-block hover:cursor-pointer hover:underline"><a>Read a sample</a></li>
        <li className="pl-3 inline-block "> <a className="px-4 py-2 bg bg-[#dacf89]  text-black hover:bg-amber-400 inline-block text-center hover:cursor-pointer"  target="_blank" rel="noopener noreferrer" >preorder</a></li>
      </ul>
     </div>
    </nav>
  )
}


