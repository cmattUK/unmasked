import Image from 'next/image'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import About from '../components/About'
import Sample from '../components/Sample'
import Order from '../components/Order'
import Footer from '../components/Footer'

import useState from 'react';

export default function Home() {
  return (
    <main className="w-full">
      <Nav/>
      <Hero/>
      <About/>
      <Sample/>
      <Order/>
      <Footer/>
    </main>
  )
}
