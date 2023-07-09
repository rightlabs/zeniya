import React from "react";

import Slider from "react-slick";

const clients = () => {
  const data = [
    {
      imgSrc: "/assets/carousel/airbnb.svg",
    },
    {
      imgSrc: "/assets/carousel/fedex.svg",
    },
    {
      imgSrc: "/assets/carousel/google.svg",
    },
    {
      imgSrc: "/assets/carousel/hubspot.svg",
    },
    {
      imgSrc: "/assets/carousel/microsoft.svg",
    },
    {
      imgSrc: "/assets/carousel/walmart.svg",
    },
    {
      imgSrc: "/assets/carousel/airbnb.svg",
    },
    {
      imgSrc: "/assets/carousel/fedex.svg",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };
  return (
    <div>
      clients
      <Slider {...settings}>
        {data.map((item, i) => (
          <div key={i}>
            <Image
              src={item.imgSrc}
              alt={item.imgSrc}
              width={116}
              height={36}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default clients;
