'use client';
import Image from 'next/image';
import kid from '../public/img/garrykid.jpg';
import kid2 from '../public/img/fightimage.jpg';
import { FaQuoteLeft } from "react-icons/fa";
import {Element} from 'react-scroll';
import { useInView } from 'react-intersection-observer';


export default function Sample() {
  const { ref:kidImage, inView:imageIsVisible} = useInView();
  const { ref:garryFight, inView:image2IsVisible} = useInView();
  const { ref:garryFightMid, inView:image3IsVisible} = useInView();


  return (
    <Element className="sampleSection" id="sample">
      <section  className="readasample overflow-hidden">
        <div  className="relative w-full bg-neutral-100 overflow-hidden pb-12 flex flex-col md:flex-none">
          <div  className='bg-white xl:rotate-16 md:rotate-12 lg:rotate-6 pt-4 pb-8 pl-2 pr-2 lg:mt-8 2xl:pt-4 2xl:pb-12 2xl:px-4 lg:px-2 lg:pb-8 lg:pt-2 ml-8 shadow-md absolute 2xl:-left-10 lg:-left-10 2xl:-top-20  2xl:translate-y-12 2xl:max-w-[300px] max-w-[200px] hidden md:block'>
            <Image src={kid}  className=' w-full contrast-125 saturate-50 border-neutral-300 border'  alt="An image of a Garry Bell as a child wearing a bandana. He's shirtless in a karate pose, he has scars painted on his body."  priority/>
          </div>
          <div className="overflow-hidden pt-4 md:pt-12 md:mt-12 mt-0 md:mb-12 mb-8 md:pb-12 max-w-[1440px] lg:mx-auto order-1">
            <div className="mx-auto  mt-12 pt-12">
              <div ref={kidImage}   className={imageIsVisible ? 'ease-in-out duration-500 delay-300 translate-y-0 opacity-1' : '-translate-x-20 opacity-0'}>
                <h2 className="text-1xl leading-0 -mt-8 text-neutral-800 text-center font-light pb-2 uppercase">Read a Sample</h2>
                <h3 className="font-display leading-1 text-neutral-800 text-6xl uppercase pb-12 text-center underline underline-offset-8">from the book</h3>
              </div>
            <div className="bg-white rotate-2 pt-4 pb-8 pl-2 pr-2 shadow-md max-w-[300px] md:hidden visible mx-auto mb-8">
            <Image  src={kid} className='w-full contrast-125 saturate-50 border-neutral-300 border'  alt="An image of a Garry Bell as a child wearing a bandana. He's shirtless in a karate pose, he has scars painted on his body."  priority/>
          </div>
              <div ref={garryFight}  className= { image2IsVisible ? 'ease-in-out duration-500  translate-y-0 mx-auto md:grid md:max-w-2xl md:grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2 opcaity-1' :  'translate-y-40 opacity-0'}>
                <div className="lg:pt-4 flex h-full justify-items-center  px-4 md:px-8">
                  <div className="">
                    <p className="leading-1 font-sans text-neutral-700 font-normal">
                      Next morning, we discovered holes punched in doors and walls with broken glass on
                      the carpet. Nothing unusual about that, really. Dad was forever punching walls and
                      doors, then making a mess patching them up with scrunched up newspaper and cheap
                      filler: it was his party trick.
                    </p> 

                    <aside className="pullQ">
                      <blockquote className="float-left md:w-6/12 w-full  py-4  font-display text-3xl text-neutral-800 border border-r-0 border-l-0 border-b-2 border-t-2 border-[#dacf89] mr-8 my-4 md:mb-2 2xl:-ml-8">
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

               
              </div>
             <div>
            <div  className='bg-white -rotate-2 md:-rotate-12 px-2 pb-8 pt-2 shadow-md max-h-[260px] md:max-w-[200px] lg:mb-0 right-0  md:top-0 top-10 hidden absolute md:inline-block 2xl:hidden'>
                  <Image src={kid2}   className='w-full contrast-125 saturate-50 border-neutral-300 border right-0 opacity-1'  alt="An image of adult Garry Bell fighting as a pro kickboxer"/>
                </div>
                </div>
            <div  className=' bg-white -rotate-2 pt-4 pb-14 px-4 shadow-md absolute 2xl:max-w-[300px] 2xl:max-h-[370px] bottom-0 right-0 z-30 hidden 2xl:inline-block opacity-1' >
                  <Image src={kid2} className= 'w-full contrast-125 saturate-50 border-neutral-300 border opacity-1'  alt="An image of adult Garry Bell fighting as a pro kickboxer"/>
                </div>
             
              </div>
          </div>
        </div>
      </section>
    </Element>
  )
}


