import React from 'react';
import CaroulselElastic from 'react-elastic-carousel';
import { useHref } from 'react-router-dom';
import './CarouselComponent.css'
import Obsolescencia from '../../assets/Obsolescencia.jpg'
import logo_sustech from '../../assets/logo_sustech.jpeg'


    
function CarouselComponent () {
    var Items = [
        
        
        { img: "https://cdn.discordapp.com/attachments/943845163942441000/975958694510612510/SUSTECH_6.jpg" },
        { img: "https://cdn.discordapp.com/attachments/943845163942441000/975789760394190938/unknown.png" },
        { img: "https://cdn.discordapp.com/attachments/943845163942441000/976130515914616932/Oquee_3.jpg" },
      


    ]

    return (
        <CaroulselElastic isRTL={false}>
            {
                Items.map(item => (
                    <>
                        <img src= {item.img} alt="item" />
                    </>
                ))

            }
        </CaroulselElastic>
    )
}

export default CarouselComponent


