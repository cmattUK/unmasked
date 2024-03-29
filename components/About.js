'use client'
import {useState, useEffect, useRef} from 'react';
import Image from 'next/image';
import about from '../public/img/garryabout.jpg';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import { useInView } from 'react-intersection-observer';

export default function About() {

  const { ref:title, inView:titleIsVisible} = useInView();
const { ref:myRef, inView:elementIsVisible} = useInView();



  return (
    <Element className="aboutSection bg-black" id="about">
      <section className="about">
        <div className="relative w-full z-20">
          <div className="overflow-hidden md:pt-12 pt-0 mt-0  md:pb-12 pb-0 max-w-[1440px] mx-auto">
            <div className="mx-auto  mt-12 pt-12">
              <div className="mx-auto md:grid ms:max-w-2xl d:grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2 flex flex-col md:flex-none">
                <div className="lg:pt-4 flex h-full justify-items-center items-center px-4 md:px-8 order-2 md:order-1">
                  <div className="">
                    <div ref={title}  className={titleIsVisible ? 'duration-500 delay-300 translate-y-0 opacity-1 text-[#dacf89] opcaity-1' : '-translate-y-20 opacity-0'}>
                      <h2  className='font-display leading-1  text-5xl  md:text-8xl uppercase pb-8 text-[#dacf89]'>Garry Bell <br className="hidden md:visible"/>was born a <span className="underline underline-offset-8">fighter</span></h2>
                    
                    </div>
                   <p className="leading-1 font-sans text-white pb-8 font-normal">From the rough, tough streets of Teeside, he trained extensively in martial arts and went on to become a championship winning kickboxer. He's rubbed shoulders with the biggest names in the sport and obsessively channelled a winning mentality into business, building a popular and forward-thinking gym in his native north-east.</p>
                    <p className="leading-1 font-bold  font-sans text-xl md:text-2xl text-[#dacf89] pb-8">But all that came after. First, he faced a harrowing battle against adversity, honing the power of positive thinking to survive and overcome the trauma of an abusive childhood.</p>
                  </div>
                </div>
                <div className={' flex justify-items-center justify-center order-1 md:order-2 flex-col'}>
                  <Image src={about} className={elementIsVisible ? 'ease-in-out duration-500 delay-300 opacity-1 translate-x-0' : 'opacity-0 translate-x-60'} ref={myRef}  alt="A black and white image of Garry Bell standing in a boxing ring wearing boxing gloves and fight shorts" priority/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Element>
  )
}


