import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

const Banner = () => {
  return (
    <>
      <section className='home-slider-area'>
        <Swiper
          autoplay={{
            delay: 1500,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true
          }}
          modules={[Pagination]}
          className="home-slides"
        >
          <SwiperSlide>
            <div className='single-banner-item item-bg1'></div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='single-banner-item item-bg2'></div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='single-banner-item item-bg3'></div>
          </SwiperSlide>
        </Swiper>

        <div className='banner-content'>
          <h1 className="banner-two-heading">
            <Swiper
              autoplay={{
                delay: 1500,
                pauseOnMouseEnter: true,
              }}
              modules={[Autoplay]}
            >
              <SwiperSlide>
                Find Nearby <span className="color-0ec6c6">Rooms</span>
              </SwiperSlide>

              <SwiperSlide>
                Find Nearby <span className="color-0ec6c6">Hostel</span>
              </SwiperSlide>

              <SwiperSlide>
                Find Nearby <span className="color-0ec6c6">Pg's</span>
              </SwiperSlide>
            </Swiper>
          </h1>

          <p>Expolore top-rated Pg's, rooms and more...</p>

          <form>
            <div className='row m-0 align-items-center'>
              <div className='col-lg-4 col-md-12 p-0'>
                <div className='form-group'>
                  <label>
                    <i className='flaticon-search'></i>
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='What are you looking for?'
                  />
                </div>
              </div>

              <div className='col-lg-3 col-md-6 p-0'>
                <div className='form-group'>
                  <label>
                    <i className='flaticon-pin'></i>
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Location'
                  />
                </div>
              </div>

              <div className='col-lg-3 col-md-6 p-0'>
                <div className='form-group category-select'>
                  <label className='category-icon'>
                    <i className='flaticon-category'></i>
                  </label>
                  <select className='banner-form-select-four'>
                    {
                      ['All Categories','single room','double room'].map((op,index)=>{
                        return(
                          <option key={op}>{op}</option>
                        )
                      })
                    }
                  </select>
                </div>
              </div>

              <div className='col-lg-2 col-md-12 p-0'>
                <div className='submit-btn'>
                  <button type='submit'>Search Now</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Banner;
