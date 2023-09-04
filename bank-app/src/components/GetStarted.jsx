import React from 'react'
import styles from '../style'
import { arrowUp } from '../assets'

const GetStarted = () => (
  <div className={`${styles.flexCenter} w-[140px] aspect-square rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
    <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className='font-poppins font-medium text-[18px] leading-[23px]'>
          <span className='text-gradient mr-2'>Get</span>
          <img src={arrowUp} alt="arrow" className='inline w-[23px] aspect-square object-contain' />
          <span className='text-gradient block'>Started</span>
        </p>
      </div>
    </div>
  </div>
)

export default GetStarted