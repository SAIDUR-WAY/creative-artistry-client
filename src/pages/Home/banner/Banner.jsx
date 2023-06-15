
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper';
import { useRef } from 'react';
import bannerImg1 from '../../../assets/banner/banner-1.webp'
import bannerImg2 from '../../../assets/banner/banner-2.png'
import bannerImg3 from '../../../assets/banner/Banner-3.jpg'

import '../banner/banner.css'

const Banner = () => {
     const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
     return (
          <>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 6500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            className="mySwiper"
          >
            <SwiperSlide>
            <div className="hero " style={{ height: '600px' }}>
              <img className='min-h-screen' src={bannerImg1} alt="" />
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-left  text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Join Our Art and Craft Summer School!</h1>
      <p className="mb-5">As artists, we are often told to take every opportunity that comes our way.</p>
      <button className="btn glass">Get Started</button>
    </div>
    
  </div>
</div>
            </SwiperSlide>
            <SwiperSlide>
             <div className="hero " style={{ height: '600px' }} >
              <img className='min-h-screen'  src={bannerImg2} alt="" />
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-right left-5 text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Explore Your Artistic Side with our Summer School Program</h1>
      <p className="mb-5">Join us for a fun and immersive experience that will inspire you to create beautiful works of art.</p>
      <button className="btn glass">Get Started</button>
    </div>
  </div>
</div>
            </SwiperSlide>
            <SwiperSlide>
             <div className="hero " style={{ height: '600px' }}>
              <img className='min-h-screen' src={bannerImg3} alt="" />
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Learn, Create, and Enjoy at our Art and Craft Summer School</h1>
      <p className="mb-5">Learn the techniques, unleash your creativity, and enjoy a summer filled with artistic exploration at our Art and Craft Summer School.</p>
      <button className="btn glass">Get Started</button>
    </div>
  </div>
</div>
            </SwiperSlide>

            <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
          </Swiper>


        </>
     );
};

export default Banner;