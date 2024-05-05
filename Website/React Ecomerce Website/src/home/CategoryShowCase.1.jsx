import React, { useState } from "react";
import Ratting from "../component/Ratting";
import { Link } from "react-router-dom";
const title = "Our Products";
const ProductData = [
  {
    imgUrl: "src/assets/images/categoryTab/01(2).jpg",
    cate: "Bracelets",
    title:"Aquarius Bracelet",
    author:"assets/images/course/author/01(3).jpg",
    brand:"Clefairyjewels",
    price:"₹199.00",
    id: 1,
  },
  {
    imgUrl: "src/assets/images/categoryTab/02(2).jpg",
    cate: "Earings",
    title: "Handmade Earings",
    author: "assets/images/course/author/02(3).jpg",
    brand: "flawless_fashionss",
    price: "₹99.00",
    id: 2,
  },
  {
    imgUrl: "src/assets/images/categoryTab/03(2).jpg",
    cate: "Painting",
    title: "Stone Painting",
    author: "assets/images/course/author/04(3).jpg",
    brand: "stone.arte",
    price: "₹259.00",
    id: 3,
  },
  {
    imgUrl: "src/assets/images/categoryTab/04(2).jpg",
    cate: " Painting",
    title: "Stone Painting",
    author: "assets/images/course/author/04(3).jpg",
    brand: "stone.arte",
    price: "₹259.00",
    id: 4,
  },
  {
    imgUrl: "src/assets/images/categoryTab/05(2).jpg",
    cate: " Painting",
    title: "Mini Paiting",
    author: "assets/images/course/author/05(3).jpg",
    brand: "isalylaart",
    price: "₹399.00",
    id: 5,
  },
  {
    imgUrl: "src/assets/images/categoryTab/06(2).jpg",
    cate: "Frame",
    title: "3D Engraved Photo Frame",
    author: "assets/images/course/author/06(3).jpg",
    brand: "lovingcratfs9697",
    price: "₹699.00",
  },
  {
    imgUrl: "src/assets/images/categoryTab/07(2).jpg",
    cate: "Bracelets",
    title: "Bracelet Set ",
    author: "assets/images/course/author/01(3).jpg",
    brand: "cleflairjewels",
    price: "₹199.00",
    id: 7,
  },
  {
    imgUrl: "src/assets/images/categoryTab/08(2).jpg",
    cate: "Shoes",
    title: "Yellow Earings",
    author: "assets/images/course/author/02(3).jpg",
    brand: "Flawless_fashions",
    price: "$199.00",
    id: 8,
  },
];

const CategoryShowCase = () => {
  const [items, setItems] = useState(ProductData);

  //category based filtering
  const filterItem = (categItem) => {
    const updateItems=ProductData.filter((curElem)=>{
      return curElem.cate===categItem;

    });
         setItems(updateItems)
  };
  return (
    <div className="course-section style-3 padding-tb">
      {/*shapes*/}
      <div className="course-shape one">
        <img src="/src/assets/images/shape-img/icon/01.png" alt="" />
      </div>
      <div className="course-shape two">
        <img src="/src/assets/images/shape-img/icon/02.png" alt="" />
      </div>
      {/*main section*/}
      <div className="container">
        {/*section header*/}
        <div className="section-header">
          <h2 className="title">{title}</h2>
          <div className="course-filter-group">
            <ul className="lab-ul">
              <li onClick={() => setItems(ProductData)}>All</li>
              <li onClick={() => filterItem("Bracelets")}>Bracelets</li>
              <li onClick={() => filterItem("Earings")}>Earings</li>
              <li onClick={() => filterItem("Painting")}>Painting</li>
              <li onClick={() => filterItem("Frame")}>Frame</li>
            </ul>
          </div>
        </div>
        {/* section body*/}
        <div className="section-wrapper">
          <div
            className="row g-4 justify-content-center row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1
          course-filter"
          >
            {items.map((product) => (
              <div key={product.id} className="col">
                <div className="course-item style-4">
                  <div className="course-inner">
                    <div className="course-thubm">
                      <img src={product.imgUrl} alt="" />
                      <div className="course-category">
                        <div className="course-cate">
                          <a href="#">{product.cate}</a>
                        </div>
                        <div className="course-reiew">
                          <Ratting />
                        </div>
                      </div>
                    </div>

                    {/*content */}
                    <div className="course-content">
                      <Link to={`/shop/${product.id}`}>
                        <h6>{product.title}</h6>
                      </Link>
                      <div className="course-footer">
                        <div className="course-author">
                          <Link to="/" className="ca-name">
                            {product.brand}
                          </Link>
                        </div>
                        <div className="course-price">{product.price}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryShowCase;
