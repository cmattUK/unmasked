'use client';
import Image from 'next/image';
import kid from '../public/img/garrykid.jpg';
import kid2 from '../public/img/fightimage.jpg';
import { FaQuoteLeft } from "react-icons/fa";
import {Element} from 'react-scroll';

export default function Sample() {
  return (
    <Element className="sampleSection" id="sample">
      <section className="readasample">
        <div className="relative w-full bg-neutral-100 overflow-hidden pb-12 flex flex-col md:flex-none">
          <div className="bg-white xl:rotate-1 lg:rotate-6 lg:mt-8 xl:pt-4 xl:pb-14 xl:px-4 lg:px-2 lg:pb-8 lg:pt-2 ml-16 shadow-md absolute xl:-left-60 lg:-left-20  xl:translate-y-12 xl:max-w-[400px] lg:max-w-[200px] hidden md:block">
            <Image src={kid} className='w-full contrast-125 saturate-50 border-neutral-300 border'  alt="A picture of Chris Matthewman"  priority/>
          </div>
          <div className="overflow-hidden pt-4 md:pt-12 md:mt-12 mt-0 md:mb-12 mb-8 md:pb-12 max-w-[1440px] lg:mx-auto order-1">
            <div className="mx-auto  mt-12 pt-12">
              <h2 className="text-1xl leading-0 -mt-8 text-neutral-800 text-center font-light pb-2 uppercase">Read a Sample</h2>
              <h3 className="font-display leading-1 text-neutral-800 text-6xl uppercase pb-12 text-center underline underline-offset-8">from the book</h3>
              <div className="bg-white rotate-2 pt-4 pb-8 pl-2 pr-2 shadow-md max-w-[300px] md:hidden visible mx-auto mb-8">
            <Image src={kid} className='w-full contrast-125 saturate-50 border-neutral-300 border'  alt="A picture of Chris Matthewman"  priority/>
          </div>
              <div className="mx-auto md:grid md:max-w-2xl md:grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                <div className="lg:pt-4 flex h-full justify-items-center  px-4 md:px-8">
                  <div className="">
                    <p className="leading-1 font-sans text-neutral-700 font-normal">
                      Next morning, we discovered holes punched in doors and walls with broken glass on
                      the carpet. Nothing unusual about that, really. Dad was forever punching walls and
                      doors, then making a mess patching them up with scrunched up newspaper and cheap
                      filler: it was his party trick.
                    </p> 

                    <aside className="pullQ">
                      <blockquote className="float-left w-6/12  py-4  font-display text-3xl text-neutral-800 border border-r-0 border-l-0 border-b-2 border-t-2 border-[#dacf89] mr-8 my-4 md:mb-2 xl:-ml-8">
                          <p><span className="text-[#dacf89]"><FaQuoteLeft className="inline-block mr-2 mb-4"/></span>I kept saying, daddy, daddy, please stop. I never called him daddy ever.</p>
                      </blockquote>
                    </aside>
                      
                    <p className="leading-1 font-sans text-neutral-700 font-normal">
                      I vividly remember being outside my bedroom door,
                      shaking like when you can't catch your breath, crying my eyes out, listening it all go
                      off. I kept saying, daddy, daddy, please stop. I never called him daddy ever. I must have been so scared.
                    </p>

                    <p className="leading-1 font-sans text-neutral-700 pb-8 font-normal pt-4">I only
                      It's crazy, looking back. I would
                      have hated my kids to go through what I did and I'm glad it was me it happened to,
                      because I wouldn't have been able to live with myself if the shoe had been on the
                      other foot. Busy tidying up, we were relieved to see mam was still in one piece. It
                      was only when she about-turned that we saw the damage: a bruised cheek, damaged
                      lip and black eye.
                    </p>
                  </div>
                </div>
                <div className="lg:pt-4 flex h-full justify-items-center  px-4 md:px-8">
                  <div className="">
                    <p className="leading-1 font-sans text-neutral-700 pb-8 font-normal">Again, nothing unusual about that; we'd notice bruises on her all
                      the time and she'd try and convince us she'd fallen or banged herself. 
                      We didn't dare say anything for fear of inflaming matters, especially when dad came in from the
                      back garden, obviously released without charge. And, so, we put up and shut up,
                      hoping it would all eventually settle down and blow over. Not a chance. Things only
                      got worse with the passing of time, with dad being arrested on numerous occasions.
                      Sometimes, mam would be throwing bin bags filled with clothes on the front, or
                      slinging shirts and trousers from the bedroom window. And there he'd always be,
                      begging for forgiveness; begging to come back in; begging at her with all the sorries
                      in the world, promising it wouldn't happen again. We'd no idea where it was all
                      heading; until, one day, we woke up and dad was gone. As usual, the house was a
                      right mess. There were broken cups and plates lying about. Ornaments were broken.
                      Even one of a pair of big brass dogs we had in the front was snapped in two,
                      doubtless thrown in rage. Mam wasn't particularly bothered by this stage, though it
                      must have hurt when she explained he'd left her for another woman.
                    </p>
                  </div>
                </div>
                <div className="lg:float-right bg-white xl:rotate-1 lg:-rotate-6 xl:pt-4 xl:pb-14 xl:px-4 lg:px-2 lg:pb-8 lg:pt-2  xl:-mr-2y4 shadow-md absolute  xl:max-w-[400px] lg:max-w-[200px] lg:right-0 hidden lg:inline-block">
                  <Image src={kid2} className='w-full contrast-125 saturate-50 border-neutral-300 border'  alt="A picture of Chris Matthewman"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Element>
  )
}


