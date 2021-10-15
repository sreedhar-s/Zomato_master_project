import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { TiStarOutline } from "react-icons/ti";
import { RiContactsBookLine, RiDirectionLine } from "react-icons/ri";
import { BiBookmarkPlus } from "react-icons/bi";
import { IoMdShareAlt } from "react-icons/io";

//components
import RestaurantNavbar from "../Components/Navbar/RestaurantNavbar";
import ImageGrid from "../Components/Restaurant/ImageGrid";
import RestaurantInfo from "../Components/Restaurant/RestaurantInfo";
import InfoButtons from "../Components/Restaurant/InfoButtons";
import TabContainer from "../Components/Restaurant/Tabs";
import CartContainer from "../Components/Cart/CartContainer";

//Redux actions
import { getSpecificRestaurant } from "../Redux/Reducer/restaurant/restaurant.action";
import { getImage } from "../Redux/Reducer/Image/Image.action";

const RestaurantLayout = (props) => {
  const [restaurant, setRestaurant] = useState({
    images: [],
    name: "",
    cuisine: "",
    address: "",
  });
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSpecificRestaurant(id)).then((data) => {
      setRestaurant((prev) => ({

        ...prev,
        ...data.payload.restaurants,
      }));
      dispatch(getImage(data.payload.restaurants?.photos)).then(data => setRestaurant(prev => ({...prev, ...data.payload.image })));
    });
  },[]);
  return (
    <>
      {" "}
      <RestaurantNavbar />
      <div className="container mx-auto px-4 lg:px-20 pb-10 ">
        <ImageGrid images={restaurant.images} />
        <RestaurantInfo
          name={restaurant?.name}
          restaurantRating={restaurant?.rating || 0}
          deliveryRating={restaurant?.rating || 0}
          cuisine={restaurant?.cuisine}
          address={restaurant?.address}
        />
        <div className="my-4 flex flex-wrap gap-3">
          <InfoButtons isActive> 
            <TiStarOutline /> Add Review
          </InfoButtons>
          <InfoButtons>
            <RiDirectionLine /> Direction
          </InfoButtons>
          <InfoButtons>
            <BiBookmarkPlus /> Bookmark
          </InfoButtons>
          <InfoButtons>
            <IoMdShareAlt /> Share
          </InfoButtons>
        </div>
        <div className="my-10">
          <TabContainer></TabContainer>
        </div>
        <div className="relative">{props.children}</div>
      </div>
      <CartContainer />
    </>
  );
};

export default RestaurantLayout;
