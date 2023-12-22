

export default function Footer() {
  return (
    <div className='w-full border border-b-0 border-r-0 border-l-0 border-t-1 border-neutral-400 z-50 py-4'>
      <div className="max-w-[1440px] mx-auto pb-8 flex flex-col justify-items-center justify-center md:block">
        <ul className="px-8 font-sans text-xl uppercase md:float-left mt-1 text-center">
          <li className=" font-display leading-none text-white text-2xl uppercase inline-block hover:cursor-pointer hover:underline">UNMASKED</li>
        </ul>
        <ul className="px-8 font-sans font-normal text-sm uppercase md:float-right text-center">
          <li className="p-2 px-3 inline-block hover:cursor-pointer hover:underline">Copywrite 2023</li>
        </ul>
      </div>
  </div>

  )
}


