import React from 'react'
import { styles } from '../styles';
import ComputersCanvas from './canvas/Computers';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto bg-black-300 border'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'>
            <div className='w-1 sm:h-80 h-40 violet-gradient' />
          </div>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm 
            <span className='text-[#915eff] ml-4 text-[26px]'>Gaurab magar</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white`}>
            A passionate software developer <br className='sm:block hidden' /> with a strong  focus on FrontEnd Development.
          </p>
        </div>
      </div>
      <ComputersCanvas />
    </section>
  )
}

export default Hero