import React from 'react';
import CaroulselElastic from 'react-elastic-carousel';
import { useHref } from 'react-router-dom';
import './CarouselComponent.css'
import Obsolescencia from '../../assets/Obsolescencia.jpg'
import logo_sustech from '../../assets/logo_sustech.jpeg'


    
function CarouselComponent () {
    var Items = [
        { img: "https://i.imgur.com/cPUuPMY.png" },
        { img: "https://trecobox.com.br/wp-content/uploads/2021/11/Arcane-2.jpg" },
      


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


