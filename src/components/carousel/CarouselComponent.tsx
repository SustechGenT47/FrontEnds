import React from 'react';
import CaroulselElastic from 'react-elastic-carousel';
import { useHref } from 'react-router-dom';
import './CarouselComponent.css'

function CarouselComponent() {
    var items = [
        { img: "https://i.blogs.es/79f36c/portada-analisis-trailer-arcane-league-of-legends/1366_2000.jpeg" },
        { img: "https://cdn1.dotesports.com/wp-content/uploads/sites/3/2021/09/26143317/LUkXhMag.jpeg" }
        
        // { img: { arcane } } // 
    ]

    return (
        <CaroulselElastic isRTL={false}>
            {
                items.map(item => (
                    <>
                        <img src={item.img} alt="Item" />
                    </>
                ))

            }
        </CaroulselElastic>
    )
}

export default CarouselComponent


