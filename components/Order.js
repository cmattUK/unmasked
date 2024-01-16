'use client'
import Image from 'next/image';
import book from '../public/img/book.png';
import { FaFacebook } from "react-icons/fa6";
import {  FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import {useState, useEffect, useRef} from 'react';
import { useInView } from 'react-intersection-observer';


export default function Order() {

  const { ref:quoteRef, inView:quoteIsVisible} = useInView();

  return (
    <section className="orderSection relative w-full pb-12 bg-glassback bg-cover bg-no-repeat z-20">
      <div className="overflow-hidden md:pt-12  mb-12 pb-12 max-w-[1440px] mx-auto">
        <div className="mx-auto  mt-12 pt-12">
          <div className="mx-auto w-full text-center" >
          <h2 className="font-display leading-1 text-white lg:text-9xl md:text-9xl text-7xl uppercase pb-8">Coming soon</h2>
            <div className='ease-in-out duration-700 delay-300 flex justify-items-center px-4 md:px-0 mt-6'>
              <Image src={book}  className='w-full h-auto max-w-[300px] mx-auto mb-6' alt="An image of the front cover of the the book 'Unmasked' "  priority/>
            </div>
            <div className="lg:pt-4 flex h-full justify-items-center items-center md:pr-8 w-12/12 md:w-6/12 mx-auto text-center">
              <div className="mx-auto">
                <aside className="painQuote">
                  <div ref={quoteRef} className={quoteIsVisible ? 'ease-in duration-700 translate-y-0 opacity-1' : 'opacity-0 translate-y-20'}>
                    <hr className="w-8/12 mx-auto h-px bg-neutral-700 border-0 md:mt-2"/>
                    <p className='ease-in duration-500 opacity-1 text-neutral-200 text-center font-light font-sans text-lg mt-4 italic md:mb-10 mb-4 px-4 md:px-0' >It's painful to relive the past. <br/>But sometimes you need to relive the past to heal from it <br/><span className="font-bold">- Garry Bell</span></p>
                  </div>
                </aside>
                
                <p className="leading-1 font-light font-sans text-lg text-[#dacf89] pb-8"><a className="px-6 py-3 bg bg-[#dacf89]  text-black hover:bg-amber-400 inline-block text-center hover:cursor-pointer uppercase"  target="_blank" rel="noopener noreferrer" >preorder</a></p>
                <p className="leading-1 font-sans text-white pb-8 font-normal"> </p>
                  
                <ul className="px-8 font-sans font-normal uppercase py-2">
                  <li className="md:py-4 md:px-4  mr-2  bg-neutral-950 text-xl  inline-block hover:cursor-pointer hover:underline hover:bg-neutral-700 text-neutral-200"><a href="https://m.facebook.com/ContenderFightAcademy/videos/742484234427839/?extid=WA-UNK-UNK-UNK-IOS_GK0T-GK1C&wtsid=rdr_0NKIcxHtqefOPmSF2&refsrc=deprecated&ref=sharing&_rdr"><FaFacebook/></a></li>
                  <li className="md:py-4 md:px-4    bg-neutral-950 text-xl  inline-block hover:cursor-pointer hover:underline hover:bg-neutral-700 text-neutral-200"><a href="https://www.instagram.com/unmaskedbook/"><FaInstagram/></a></li>
                  {/*<li className="md:py-4 md:px-4  ml-2  bg-neutral-950 text-xl  inline-block hover:bg-neutral-700 hover:cursor-pointer hover:underline"> <a className=""  target="_blank" rel="noopener noreferrer" ><FaYoutube/></a></li>*/}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


