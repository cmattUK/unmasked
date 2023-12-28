import Image from 'next/image';
import book from '../public/img/book.png';
import { FaFacebook } from "react-icons/fa6";
import {  FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";

export default function Order() {
  return (
    <div className="relative w-full z-20 pb-12 bg-glassback">
      <div className="overflow-hidden md:pt-12   mb-12 pb-12 max-w-[1440px] mx-auto">
        <div className="mx-auto  mt-12 pt-12">
          <div className="mx-auto w-full text-center">
            <div className="flex justify-items-center px-4 md:px-0">
              <Image src={book} className='w-full h-auto max-w-[300px] mx-auto mb-8'  alt="A picture of Chris Matthewman"  priority/>
              </div>
              <div className="lg:pt-4 flex h-full justify-items-center items-center pr-8 w-6/12 mx-auto text-center">
                <div className="mx-auto">
                  <div>
                    <hr className="w-4/12 mx-auto h-px bg-neutral-700 border-0 md:mt-12"/>
                    <p className="text-neutral-200 text-center font-light font-sans text-lg mt-4 italic md:mb-16 mb-8 px-4 md:px-0">It's painful to relive the past. <br/>But sometimes you need to relive the past to heal from it <span className="font-bold">- Garry Bell</span></p>
                  </div>
                  <h2 className="font-display leading-1 text-white text-8xl uppercase pb-8">Coming soon</h2>
                 <p className="leading-1 font-light font-sans text-lg text-[#dacf89] pb-8"><a className="px-6 py-3 bg bg-[#dacf89]  text-black hover:bg-amber-400 inline-block text-center hover:cursor-pointer uppercase"  target="_blank" rel="noopener noreferrer" >preorder</a></p>
                 <p className="leading-1 font-sans text-white pb-8 font-normal"> </p>
                  
                  <ul className="px-8 font-sans font-normal  uppercase py-2">
          <li className="md:py-4 md:px-4  mr-2  bg-neutral-950 text-xl  inline-block hover:cursor-pointer hover:underline"><a><FaFacebook/></a></li>
          <li className="md:py-4 md:px-4  mx-2  bg-neutral-950 text-xl  inline-block hover:cursor-pointer hover:underline"><a><FaInstagram/></a></li>
          <li className="md:py-4 md:px-4  ml-2  bg-neutral-950 text-xl  inline-block "> <a className=""  target="_blank" rel="noopener noreferrer" ><FaYoutube/></a></li>
        </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


