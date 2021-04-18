import React from "react";
import Product from "../Product/Product.component"
import {default as UUID} from "node-uuid";

const productWithCategory = [
  {
    title: "Banana Almond Pastrie",
    imgUrl:
      "https://img1.mashed.com/img/gallery/the-best-bakery-in-every-state/intro-1601499029.jpg",
    category: "baked"
  },
  {
    title: "Choco Walnut Pastrie",
    imgUrl:
      "https://wrightsdairyfarm.com/assets/img/dessertcakes/dessertcakebanner2.jpg",
    category: "baked"
  },
  {
    title: "Cherry Cake",
    imgUrl: "https://wrightsdairyfarm.com/assets/img/bakery/bakery-banner.jpg",
    category: "cakes"
  },
  {
    title: "BB Vanilla Cake",
    imgUrl: "https://wrightsdairyfarm.com/assets/img/bakery/blueberry.jpg",
    category: "cakes"
  },
   {
    title: "Mapple Spice Cookies",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Maple_spice_cookies_and_thumbprint_cookies.jpg/175px-Maple_spice_cookies_and_thumbprint_cookies.jpg",
    category: "cookies"
  },
  {
    title: "Hearts shaped Cookies",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Heart_shaped_cookies.jpg/175px-Heart_shaped_cookies.jpg",
    category: "cookies"
  },
  {
    title: "Fortune Cookies",
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Fortune_cookie.png/175px-Fortune_cookie.png",
    category: "cookies"
  },
  {
    title: "Chocolate Cookies",
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Chocolate_chip_cookies.jpg/175px-Chocolate_chip_cookies.jpg",
    category: "cookies"
  },
  {
    title: "Oreo Cookies",
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Oreo-Two-Cookies.jpg/175px-Oreo-Two-Cookies.jpg",
    category: "cookies"
  },
  {
    title: "BAKED BROWNIE",
    imgUrl:
      "https://www.browneyedbaker.com/wp-content/uploads/2010/10/baked-brownie-5-600.jpg",
    category: "brownies"
  },
  {
    title: "BETTER_THAN_BOX_MIX BROWNIES",
    imgUrl:
      "https://www.browneyedbaker.com/wp-content/uploads/2010/03/chewy-brownies-18-600.jpg",
    category: "brownies"
  },
  {
    title: "BUCKEYE BROWNIES",
    imgUrl: "https://www.browneyedbaker.com/wp-content/uploads/2011/06/buckeye-brownies-45-600.jpg",
    category: "brownies"
  },
  {
    title: "CREAM CHEESE BROWNIES",
    imgUrl: "https://www.browneyedbaker.com/wp-content/uploads/2011/06/cream-cheese-brownies-1-550.jpg",
    category: "brownies"
  },
  {
    title: "FROZEN BROWNIE SUNDAE",
    imgUrl: "https://www.browneyedbaker.com/wp-content/uploads/2011/06/frozen-brownie-sundae-33-600.jpg",
    category: "brownies"
  },
   {
    title: "Coconut Cupcakes with Toasted Coconut Frosting",
    imgUrl:
      "https://www.browneyedbaker.com/wp-content/uploads/2011/05/coconut-cupcakes-48-600FW.jpg",
    category: "cupcakes"
  },
  {
    title: "Dark Chocolate Cupcakes with Peanut Butter Frosting",
    imgUrl:
      "https://www.browneyedbaker.com/wp-content/uploads/2011/05/chocolate-pb-cupcakes-1-5251.jpg",
    category: "cupcakes"
  },
  {
    title: "Guinness, Whiskey and Irish Cream Cupcakes",
    imgUrl: "https://www.browneyedbaker.com/wp-content/uploads/2011/05/irish-car-bomb-cupcakes-2-5501.jpg",
    category: "cupcakes"
  },
  {
    title: "Homemade Funfetti Cupcakes",
    imgUrl: "https://www.browneyedbaker.com/wp-content/uploads/2011/05/funfetti-cupcakes-28-600FW.jpg",
    category: "cupcakes"
  },
  {
    title: "Margarita Cupcakes",
    imgUrl: "https://www.browneyedbaker.com/wp-content/uploads/2011/05/margarita-cupcakes-4-5502.jpg",
    category: "cupcakes"
  }
];
const ProductList = ({type}) => {
  const productWithCategorygroup = groupBy(productWithCategory, 'category')
  return (
    <div>
      {type===undefined && Object.keys(productWithCategorygroup).map((head) => 
      {
        return <><h2>{head.toUpperCase()}</h2>
          <ul>{productWithCategorygroup[head].map(element => {
            return <Product key={ UUID.v4()}
              imgUrl={element.imgUrl}
              title={element.title}  
            />
          })}</ul>
        </>
      }
      )}
      {type !== undefined && productWithCategorygroup[type].map(element => {
        return <Product key={ UUID.v4()}
          imgUrl={element.imgUrl}
          title = {element.title}/>
      })}
      <h2>Done</h2>
    </div>
  );
};
const groupBy = (array, key) => {
  // Return the end result
  return array.reduce((result, currentValue) => {
    // If an array already present for key, push it to the array. Else create an array and push the object
    (result[currentValue[key]] = result[currentValue[key]] || []).push(
      currentValue
    );
    // Return the current iteration `result` value, this will be taken as next iteration `result` value and accumulate
    return result;
  }, {}); // empty object is the initial value for result object
};

export default ProductList;
