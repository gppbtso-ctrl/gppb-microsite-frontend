'use client';

import { useMediaQuery, useWindowSize } from '@darkroom.engineering/hamo';
import { useWindowScroll } from '@uidotdev/usehooks';
import { usePathname } from 'next/navigation';
import Script from 'next/script';
import React, { useEffect, useState } from 'react'

const Chatbot = () => {
    const pathname = usePathname()
    const [{ x, y }, scrollTo] = useWindowScroll();
    const [isScrolled, setIsScrolled] = useState(false)
    const totalScrollHeight = document?.documentElement.scrollHeight-document?.body.offsetHeight
    const amountToSubtract = totalScrollHeight * (6 / 100);
    const result = parseInt(totalScrollHeight - amountToSubtract);

    useEffect(() => {
        if(pathname == '/' ? y>100 : y>result){
          setIsScrolled(true)
        }
        else{
          setIsScrolled(false)
        }
      }, [y]);
    
  return (
    <div> <Script src="https://eacomm.com/assets/js/include-chatbot.min.js"/>
    <div className={` ${isScrolled ? pathname ==='/' ? '[&_.chatbot-btn-wrap]:bottom-[68px] [&_.chatbot-btn-wrap]:md:bottom-[75px]': '[&_.chatbot-btn-wrap]:bottom-[32px] [&_.chatbot-btn-wrap]:md:bottom-[65px]' : '[&_.chatbot-btn-wrap]:bottom-[32px] [&_.chatbot-btn-wrap]:md:bottom-[32px]'} [&_.chatbot-btn-wrap]:transition-all [&_.chatbot-btn-wrap]:duration-500 [&_.chatbot-btn-wrap]:right-[15px] [&_.chatbot-btn-wrap]:sm:right-[15px] [&_.chatbot-btn-wrap]:md:right-[15px]  [&_.chatbot-btn-wrap]:lg:right-[35px]`} include-html="https://eacomm.com/chaital/embedded-chatbot?key=cs4962modHCz8pJgfRQUBhO1xWAkDSIY" id="chatbot"></div>
</div>
  )
}

export default Chatbot