'use client'
import Image from 'next/image';
import portrait from '../public/img/portrait.png';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

export default function Hero() {
  return (
    <Element className="heroSection" id="Work">
      <section className="hero">
        <div className='relative lg:pt-8 overflow-hidden lg:h-[600px] xl:h-screen'>
          <div className="bg-heroback bg-cover bg-center h-screen z-10 lg:py-auto lg:h-[600px] xl:h-screen">
            <div className="mx-auto lg:h-[600px]">
              <div className="mx-auto md:grid  md:grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2 bg-herobacksm bg-cover bg-left-bottom lg:bg-none min-h-screen  xl:h-screen">
                  <Image src={portrait} className='w-full hidden lg:block lg:pt-16 xl:pt-0 pt-0'  alt="A picture of Chris Matthewman"  priority/>
                <div className="lg:pt-4 flex h-full lg:h-[600px] xl:h-full justify-start items-center md:px-8 px-4">
                  <div className="absolute lg:relative bottom-0 pb-8 md:pb-0 mb-8 z-30">
                    <h1 className="font-mono font-black leading-none  text-white  text-xl md:text-3xl lg:text-2xl xl:text-6xl uppercase">GARRY BELL</h1>
                    <h2 className=" font-display leading-none text-[#dacf89] text-7xl md:text-[10rem] lg:text-9xl xl:text-[17rem] uppercase pb-4 md:pb-0 drop-shadow-lg md:drop-shadow-none">Unmasked</h2>
                    <p className="pt-0 -mt-4 lg:mt-2 leading-1 font-normal font-sans text-white text-sm md:text-xl w-11/12">A warts and all tale of courage, fortitude, determination and humour, delicately penned to provide hope, help and inspiration for anyone experiencing difficulties of their own...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" bg-gradient-to-t from-black to-transparent h-[300px] md:h-[300px] lg:h-[200px] xl:h-[400px] absolute bottom-0 z-0 w-full -mb-2 lg:mb-0 xl:-mb-2 pb-12"></div>
        </div>
      </section>
    </Element>
  )
}


