
import Image from 'next/image';
import logo from '../public/img/footerlogog.png';
import { FaRegCopyright } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <div className='w-full border border-b-0 border-r-0 border-l-0 border-t-1 border-neutral-400 z-50 py-4'>
        <div className="max-w-[1440px] mx-auto flex flex-col justify-items-center justify-center md:block">
          <ul className="px-8 font-sans text-xl uppercase  mt-1 text-center">
            <li className=" font-display leading-none text-white text-2xl uppercase inline-block hover:cursor-pointer hover:underline">
                <Image src={logo} className='w-full max-w-[150px]'  alt="The Unmasked book logo in white"/>
            </li>
          </ul>
          <ul className="px-8 font-sans font-normal  uppercase text-center">
            <li className="mt-2 px-3 text-xs inline-block hover:cursor-pointer hover:underline"><FaRegCopyright className="inline-block"/> Copyrite 2023</li>
          </ul>
        </div>
    </div>
  </footer>
  )
}


