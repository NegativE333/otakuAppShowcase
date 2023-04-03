import React from 'react'
import styles from '../styles/Global';
import assets from '../assets';
import Button from './Button';

const SectionWrapper = ({ title, description, showBtn, mockupImg, banner, reverse, count}) => {
  return (
    <div className={`min-h-screen ${styles.section} ${reverse ? styles.bgWhite : styles.bgPrimary} ${banner}`}>

      <div className={`flex items-center ${styles.boxClass} w-11/12 sm:w-full minmd:w-3/4 `}>
        <div className={`${styles.descDiv} ${reverse ? "fadeRightMini": "fadeLeftMini"} ${reverse ? styles.textRight : styles.textLeft}`}>
          <h1 className={`${styles.h1Text} ${reverse ? styles.blackText : styles.whiteText}`}>
          {title}
          </h1>
          <p className={`${styles.descriptionText}`}>
           {description}
         </p>
         {showBtn && 
          <Button 
            assetUrl={assets.expo}
            link="https://expo.dev/@negative3/otaku?serviceType=classic&distribution=expo-go"
          />
         }
        </div>
        <div className={`flex-1 ${styles.flexCenter} p-8 sm:px-0`}>
        
        {count ? 
        <div style={{display: "flex"}} className={`${reverse ? "fadeLeftMini" : "fadeRightMini"}`}>
          <img src={assets.DSScreen} className={`${styles.sectionImg} ${reverse ? "rotate-0" : "rotate-12"}`} style={{height:"50%", width:"50%", zIndex: 0}}/>
          <img src={assets.NScreen} className={`${styles.sectionImg} ${reverse ? "hover:-translate-x-28" : "rotate-12"} -translate-x-64 rotate-0 `} style={{height:"50%", width:"50%", position:"relative",top:0, zIndex: 1, }}/>
          </div>
          : 
          <img src={mockupImg} className={`${styles.sectionImg} ${reverse ? "rotate-0" : "rotate-12"} z-0`} style={{height:"50%", width:"50%"}}/>
          
        }
        
        </div>
      </div>
    </div>
  )
}

export default SectionWrapper