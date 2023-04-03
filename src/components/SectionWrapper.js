import React from 'react'
import styles from '../styles/Global';
import assets from '../assets';
import Button from './Button';

const SectionWrapper = ({ title, description, showBtn, mockupImg, banner, reverse, count}) => {
  return (
    <div className={`min-h-screen ${styles.section} ${reverse ? styles.bgWhite : styles.bgPrimary} ${banner}`}>

      <div className={`flex items-center ${styles.boxClass} w-11/12 sm:w-full minmd:w-3/4 `}>
        <div className={`${styles.descDiv} ${reverse ? "fadeRightMini": "fadeLeftMini"}  ${reverse ? styles.textRight : styles.textLeft}`}>
          <h1 className={`${styles.h1Text} ${reverse ? styles.blackText : styles.whiteText}`}>
          {title}
          </h1>
          <p className={`${styles.descriptionText}`}>
           {description}
         </p>
         <div className='text-center md:relative md:left-24'>
         {showBtn && 
          <Button 
            assetUrl={assets.expo}
            link="https://expo.dev/@negative3/otaku?serviceType=classic&distribution=expo-go"
          />
         }
         </div>
        </div>

        <div className={`flex-1 ${styles.flexCenter} md:p-0 lg:p-8 sm:px-0`}>
        
        {count ? 
        <div style={{display: "flex"}} className={`${reverse ? "fadeLeftMini" : "fadeRightMini"}`}>
          <img src={assets.DSScreen} className={`${styles.sectionImg} ${reverse ? "rotate-0" : "md:rotate-0 lg:rotate-12"} lg:h-[50%] lg:w-[50%] relative left-12 z-0`}/>
          <img src={assets.NScreen} className={`${styles.sectionImg} ${reverse ? "-translate-x-28" : "rotate-12"} rotate-0 lg:h-[50%] lg:w-[50%] relative left-14 top-0 z-10`}/>
          </div>
          : 
          <img src={mockupImg} className={`${styles.sectionImg} ${reverse ? "rotate-0" : "md:rotate-0 lg:rotate-12"} z-0 lg:h-[50%] lg:w-[50%]`}/>
          
        }
        
        </div>
      </div>
    </div>
  )
}

export default SectionWrapper