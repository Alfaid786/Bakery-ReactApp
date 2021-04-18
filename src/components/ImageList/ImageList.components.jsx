import React from "react";
import ImageBox from "../ImageBox/ImageBox.components";
import "./ImageList.styles.css";
import {default as UUID} from "node-uuid";
const productList = [
  {
    title: "Baked",
    imgUrl:
      "https://img1.mashed.com/img/gallery/the-best-bakery-in-every-state/intro-1601499029.jpg",
    routeUrl: "/baked"
  },
  {
    title: "Cakes",
    imgUrl:
      "https://wrightsdairyfarm.com/assets/img/dessertcakes/dessertcakebanner2.jpg",
    routeUrl: "/cakes"
  },
  {
    title: "Cookies",
    imgUrl: "https://wrightsdairyfarm.com/assets/img/bakery/bakery-banner.jpg",
    routeUrl: "/cookies"
  },
  {
    title: "Brownie",
    imgUrl: "https://wrightsdairyfarm.com/assets/img/bakery/blueberry.jpg",
    routeUrl: "/brownies"
  },
  {
    title: "Cup Cakes",
    imgUrl:
      "https://wrightsdairyfarm.com/assets/img/cupcakes/cupcakebanner.jpg",
    routeUrl: "/cupcakes"
  }
];
const ImageList = () => {
  return (
    <div className="menu-directory">
      {productList.map((product) => (
        <ImageBox
          key={ UUID.v4()} 
          title={product.title}
          imgUrl={product.imgUrl}
          routeUrl={product.routeUrl}
        />
      ))}
    </div>
  );
};

export default ImageList;
