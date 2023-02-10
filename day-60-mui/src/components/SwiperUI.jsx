import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import { FreeMode, Thumbs } from "swiper"
import img from "../data/images"

const SwiperUI = () => {
    const swiperRef = useRef(null);
    const [thumbsSwiper, setThumbsSwiper] = useState(null)
    const slides = img.map((image, index) => {
        return (
            <SwiperSlide key={index}>
                <img src={image.url} alt="slider image" />
            </SwiperSlide>
        )
    })
    return (
        <div>
            <h1>Day 60 - Swiper JS with React</h1>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                // onSlideChange={() => console.log('slide change')}
                // onBeforeInit={swiper => (swiperRef.current = swiper)}
                modules={[FreeMode, Thumbs]}
                thumbs={{ swiper: thumbsSwiper }}

            >
                {slides}
            </Swiper>
            <Swiper
                modules={[FreeMode, Thumbs]}
                watchSlidesProgress
                onSwiper={setThumbsSwiper}
                spaceBetween={50}
                slidesPerView={3}
            // onSlideChange={() => console.log('slide change')}
            >
                {slides}
            </Swiper>
        </div>
    )
}

export default SwiperUI