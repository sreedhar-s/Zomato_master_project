import React from "react";
import { Link, useParams } from "react-router-dom";
import { RiArrowRightSFill } from "react-icons/ri";
import Slider from "react-slick";

//Components
import MenuCollections from "../../Components/Restaurant/MenuCollections";
import MenuSimilarRestaurantCard from "../../Components/Restaurant/MenuSimilarRestaurantCard";
import { NextArrow,PrevArrow } from "../../Components/CarousalArrow";

const Overview = () => {
  const { id } = useParams();
  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <>
      <div className="flex flex-col md:flex-row ">
        <div className="w-full">
          <h2 className="font-semibold text-lg md:text-xl my-4">
            About this place
          </h2>
          <div className="flex justify-between items-center">
            <h4 className="text-lg font-medium">Menu</h4>
            <Link to={`/restaurant/${id}/menu`}>
              <span className="flex items-center gap-1 text-zomato-400">
                See all menu <RiArrowRightSFill />
              </span>
            </Link>
          </div>
          <div className="flex flex-wrap gap-3 my-4">
            <MenuCollections
              menuTitle="Menu"
              pages="3"
              image="https://b.zmtcdn.com/data/menus/470/18356470/cbc627de0e75a600708623a8bcef9079.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"
            />
          </div>
          <h4 className="text-lg font-medium">Cusines</h4>
          <div className="flex flex-wrap gap-2">
            <span className="border border-gray-600 text-blue-600 px-2 py-1 rounded-full">
              Street Food
            </span>
            <span className="border border-gray-600 text-blue-600 px-2 py-1 rounded-full">
              Street Food
            </span>
            <span className="border border-gray-600 text-blue-600 px-2 py-1 rounded-full">
              Street Food
            </span>
          </div>
          <div className="my-4">
            <h4 className="text-lg font-medium">Average Cost</h4>
            <h6>₹300 for two people (approx.)</h6>
            <small className="text-gray-500">
              Exclusive of applicable taxes and charges, if any
            </small>
          </div>
          <div className="my-4">
            <h4 className="text-lg font-medium">Similar Restaurants</h4>
            <Slider {...settings}>
              <MenuSimilarRestaurantCard
                image="https://b.zmtcdn.com/data/pictures/4/19684494/01a18ba9c9cc7201b1c5c93cd2053e99.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*"
                title="1441 Pizzeria"
              />
            </Slider>
          </div>
        </div>
        <aside
          style={{ height: "fit-content" }}
          className="hidden md:block md:w-2/5 sticky top-2 bg-white p-3 shadow-xl "
        ></aside>
      </div>
    </>
  );
};

export default Overview;
