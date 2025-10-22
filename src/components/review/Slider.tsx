"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import { RiDoubleQuotesR } from '@remixicon/react';
import { lobsterFont } from '@/utils/font';

export default function Slider() {
  return (
    <div className="w-full h-[300px] mt-16">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        speed={400}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        grabCursor={true}
        pagination={{ clickable: true, dynamicBullets: true }}
        autoplay={{ delay: 3000 }}
        className="!pb-10"
      >
        <SwiperSlide>
          <div className='flex flex-col gap-4 bg-green-900 rounded-md p-6'>
            <p className={lobsterFont.className}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique culpa ut amet voluptas asperiores alias sed consequatur.</p>
            <div className='flex items-center justify-between w-full'>
              <div className='flex items-center gap-3'>
                <Image src="/review-1.jpg" alt='' height={32} width={32} className='rounded-full w-12 h-12 object-cover' />
                <div>
                  <p className='text-yellow-500 uppercase'>John doe</p>
                  <p className='text-xs'>Designer</p>
                </div>
              </div>
              <RiDoubleQuotesR size={28} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex flex-col gap-4 bg-green-900 rounded-md p-6'>
            <p className={lobsterFont.className}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique culpa ut amet voluptas asperiores alias sed consequatur.</p>
            <div className='flex items-center justify-between w-full'>
              <div className='flex items-center gap-3'>
                <Image src="/review-2.jpg" alt='' height={32} width={32} className='rounded-full w-12 h-12 object-cover' />
                <div>
                  <p className='text-yellow-500 uppercase'>John doe</p>
                  <p className='text-xs'>Designer</p>
                </div>
              </div>
              <RiDoubleQuotesR size={28} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex flex-col gap-4 bg-green-900 rounded-md p-6'>
            <p className={lobsterFont.className}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique culpa ut amet voluptas asperiores alias sed consequatur.</p>
            <div className='flex items-center justify-between w-full'>
              <div className='flex items-center gap-3'>
                <Image src="/review-3.jpg" alt='' height={32} width={32} className='rounded-full w-12 h-12 object-cover' />
                <div>
                  <p className='text-yellow-500 uppercase'>John doe</p>
                  <p className='text-xs'>Designer</p>
                </div>
              </div>
              <RiDoubleQuotesR size={28} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex flex-col gap-4 bg-green-900 rounded-md p-6'>
            <p className={lobsterFont.className}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique culpa ut amet voluptas asperiores alias sed consequatur.</p>
            <div className='flex items-center justify-between w-full'>
              <div className='flex items-center gap-3'>
                <Image src="/review-4.jpg" alt='' height={32} width={32} className='rounded-full w-12 h-12 object-cover' />
                <div>
                  <p className='text-yellow-500 uppercase'>John doe</p>
                  <p className='text-xs'>Designer</p>
                </div>
              </div>
              <RiDoubleQuotesR size={28} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex flex-col gap-4 bg-green-900 rounded-md p-6'>
            <p className={lobsterFont.className}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique culpa ut amet voluptas asperiores alias sed consequatur.</p>
            <div className='flex items-center justify-between w-full'>
              <div className='flex items-center gap-3'>
                <Image src="/review-1.jpg" alt='' height={32} width={32} className='rounded-full w-12 h-12 object-cover' />
                <div>
                  <p className='text-yellow-500 uppercase'>John doe</p>
                  <p className='text-xs'>Designer</p>
                </div>
              </div>
              <RiDoubleQuotesR size={28} />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
