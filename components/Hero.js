import Image from 'next/image';
import portrait from '../public/img/portrait.png';
import portraitSmall from '../public/img/untitledsmall.jpg';

export default function Hero() {
  return (
    <div className='relative pt-8 overflow-hidden'>
      <div className="bg-heroback bg-cover bg-center h-screen z-10">
        <div className="mx-auto">
          <div className="mx-auto md:grid md:max-w-2xl md:grid-cols-1  lg:mx-0 lg:max-w-none lg:grid-cols-2 bg-herobacksm bg-cover bg-left-bottom md:bg-none min-h-screen">
              <Image src={portrait} className='w-full hidden md:block'  alt="A picture of Chris Matthewman"  priority/>
            <div className="lg:pt-4 flex h-full justify-start items-center md:px-8 px-4">
              <div className="absolute md:relative bottom-0 pb-8 md:pb-0 mb-8 z-30">
                <h1 className="font-mono font-black leading-none  text-white  text-xl lg:text-6xl uppercase">GARRY BELL</h1>
                <h2 className=" font-display leading-none text-[#dacf89] text-7xl lg:text-[17rem] uppercase pb-4 md:pb-0 drop-shadow-lg md:drop-shadow-none">Unmasked</h2>
                <p className="pt-0 -mt-4  leading-1 font-normal font-sans text-white text-sm md:text-xl w-11/12">A warts and all tale of courage, fortitude, determination and humour, delicately penned to provide hope, help and inspiration for anyone experiencing difficulties of their own...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-gradient-to-t from-black to-transparent h-[400px] md:h-[300px] absolute bottom-0  z-20 w-full -mb-2 pb-12"></div>
    </div>
  )
}


