'use client';

import { CSSProperties, FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import { mergeClassNames } from '@/utils';
import { AutoplayOptions } from 'swiper/types';

interface ImageGalleryProps {
  className?: string;
  loop?: boolean;
  delay?: boolean | AutoplayOptions | undefined;
  children: JSX.Element[];
  swiperStyle?: CSSProperties;
  paginationButtons?: JSX.Element;
}

export type CustomStyle = {
  [key: string]: string;
};

export const SwiperComponent: FC<ImageGalleryProps> = ({
  children,
  className,
  swiperStyle,
  paginationButtons,
  delay,
  loop = false,
}) => {
  return (
    <div className={mergeClassNames('w-full', className)}>
      <Swiper
        style={{
          maxWidth: 'inherit',
          paddingLeft: 0,
          ...swiperStyle,
        }}
        loop={loop}
        autoplay={delay}
        pagination={{
          el: '.custom-swiper-pagination',
          clickable: true,
        }}
        navigation={{
          nextEl: '.image-swiper-button-next',
          prevEl: '.image-swiper-button-prev',
        }}
        modules={[Autoplay, Navigation, Pagination]}
      >
        {children.map((element, index) => (
          <SwiperSlide
            key={`${element.key}_slide-${index}`}
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {element}
          </SwiperSlide>
        ))}
      </Swiper>
      {paginationButtons}
    </div>
  );
};
