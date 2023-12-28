'use client'
import Image from 'next/image';
import about from '../public/img/garryabout.jpg';;
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

export default function About() {
  return (
    <Element className="aboutSection" id="about">
    <div className="relative w-full z-20">
      <div className="overflow-hidden md:pt-12 pt-0 mt-0 md:mt-12 mb-12 md:pb-12 pb-0 max-w-[1440px] mx-auto">
        <div className="mx-auto  mt-12 pt-12">
          <div className="mx-auto md:grid ms:max-w-2xl Md:grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2 flex flex-col md:flex-none">
            <div className="lg:pt-4 flex h-full justify-items-center items-center px-4 md:px-8 order-2 md:order-1">
              <div className="">
                <h2 className=" font-display leading-1 text-[#dacf89] text-5xl md:text-8xl uppercase pb-8">Garry Bell <br className="hidden md:visible"/>was born a <span className="underline underline-offset-8">fighter</span></h2>
                <p className="leading-1 font-sans text-white pb-8 font-normal">From the rough, tough streets of Teeside, he trained extensively in martial arts and went on to become a championship winning kickboxer. He's rubbed shoulders with the biggest names in the sport and obsessively channelled a winning mentality into business, building a popular and forward-thinking gym in his native north-east.</p>
                <p className="leading-1 font-bold  font-sans text-xl md:text-2xl text-[#dacf89] pb-8">But all that came after. First, he faced a harrowing battle against adversity, honing the power of positive thinking to survive and overcome the trauma of an abusive childhood.</p>
              </div>
            </div>
            <div className="flex justify-items-center justify-center order-1 md:order-2 flex-col ">
            <Image src={about} className=''  alt="A picture of Chris Matthewman"  priority/>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Element>
  )
}


