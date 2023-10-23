import React from "react";
import {Swiper} from "swiper/react";
import 'swiper/css';

export default class Carrossel extends React.Component {
  render() {
    return (
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <div>Slide 1</div>
        <div>Slide 2</div>
        <div>Slide 3</div>
        <div>Slide 4</div>
      </Swiper>
    )
  }
}