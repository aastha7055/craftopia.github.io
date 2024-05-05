import React from "react";
import { Link } from "react-router-dom";

const subTitle = "Choose Any Products";
const title = "Buy Everything with Us";
const btnText = "Get Started Now";

const categoryList = [
  {
    imgUrl: "src/assets/images/category/01(3).jpg",
    imgAlt: "Bracelets",
    iconName: "icofont-brand-windows",
    title: "Bracelets",
  },
  {
    imgUrl: "src/assets/images/category/02(3).jpg",
    imgAlt: "Earings",
    iconName: "icofont-brand-windows",
    title: "Earings",
  },
  {
    imgUrl: "src/assets/images/category/03(3).jpg",
    imgAlt: "Miniature Pottery",
    iconName: "icofont-brand-windows",
    title: "Miniature Pottery",
  },
  {
    imgUrl: "src/assets/images/category/04(3).jpg",
    imgAlt: "Stone Painting",
    iconName: "icofont-brand-windows",
    title: "Stone Painting",
  },
  {
    imgUrl: "src/assets/images/category/05(3).jpg",
    imgAlt: "Hair Clips",
    iconName: "icofont-brand-windows",
    title: "Hair Clips",
  },
  {
    imgUrl: "src/assets/images/category/06(3).jpg",
    imgAlt: "Engraved Frame",
    iconName: "icofont-brand-windows",
    title: "Engraved Frame",
  },
];
const HomeCategory = () => {
  return <div className="category-section style-4 padding-tb">
    <div className="conatiner">
        {/*section header*/}
      <div className="section-header text-center">
        <span className="subtitle">{subTitle}</span>
        <h2 className="title">{title}</h2>
      </div>
      
        {/*section card*/}
        <div className="section-wrapper">
            <div className="row g-4 justify-content-center row-cols-md-3 row-cols-sm-2 row-cols-1">
                {
                    categoryList.map((val,i) => (<div key={i} className="col">
                        <Link to="/shop" className="category-item">
                            <div className="category-inner">
                                {/* image thumbnail*/}
                                <div className="category-thumb">
                                    <img src={val.imgUrl} alt="" />
                                </div>

                                {/*content*/}
                                <div className="category-content">
                                   <div className="cate-icon">
                                    <i className={val.iconName}></i>
                                   </div>
                                   <Link to="/shop"><h6>{val.title}</h6></Link>
                                </div>
                            </div>
                        </Link>
                        </div>))
                }
            </div>
            {/*btn get started*/}
           <div className="text-center mt-5">
            <Link to="/shop" className="lab-btn"><span>{btnText}</span></Link>
           </div>
        </div>
    </div>

  </div>;
};

export default HomeCategory;
