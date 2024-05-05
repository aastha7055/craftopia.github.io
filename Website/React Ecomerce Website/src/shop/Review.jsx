import React, { useState } from "react";
import Ratting from "../component/Ratting";
const reviwtitle = "Add a Review";

let ReviewList = [
  {
    imgUrl: "/src/assets/images/instructor/16.jpg",
    imgAlt: "Client thumb",
    name: "Snehal Gawade",
    date: "Posted on Jan 10, 2022 at 6:57 am",
    desc: "This looks good but considering the price it's expensive.Otherwise the look is good.",
  },
  {
    imgUrl: "/src/assets/images/instructor/16.jpg",
    imgAlt: "Pranav",
    name: "Pranav",
    date: "Posted on Jun 10, 2023 at 9:57 pm",
    desc: "Really looks very good.",
  },
  {
    imgUrl: "/src/assets/images/instructor/16.jpg",
    imgAlt: "Client thumb",
    name: "Swati Pokh",
    date: "Posted on Jun 12, 2023 at 10:00 am",
    desc: "Hello friends, We have received this product in a safe package and the product is more than our expectation in the way that the tea light candle is battery operated. Most of such craft products will be lacking a neat....",
  },
  {
    imgUrl: "/src/assets/images/instructor/16.jpg",
    imgAlt: "Rupal Salvi",
    name: "Rupal Salvi",
    date: "Posted on April, 2024 at 12:00 am",
    desc: "These tealight holders are so cute! They are mini versions of the Rajasthani puppets. The price was so reasonable and they came with battery operated tealights, which I did not expect. Since the puppets are covered in cloth, it is better to use battery operated tealights, so this was much appreciated. They also came with a cute little painted bird key chain as a gift. I was surprised at how quickly they arrived. Very happy with my purchase.",
  },
];
const Review = () => {
  const [reviewShow, setReviewShow] = useState(true);
  return (
    <>
      <ul
        className={`review-nav lab-ul ${
          reviewShow ? "RevActive" : "DescActive"
        }`}
      >
        <li className="desc" onClick={() => setReviewShow(!reviewShow)}>
          Description
        </li>
        <li className="rev" onClick={() => setReviewShow(!reviewShow)}>
          Reviews 4
        </li>
      </ul>

      {/*desc and review content*/}
      <div
        className={`review-content ${
          reviewShow ? "review-content-show " : "description-show"
        }`}
      >
        <div className="review-showing">
          <ul className="content lab-ul">
            {ReviewList.map((review, i) => (
              <li key={i}>
                <div className="post-thumb">
                  <img src={review.imgUrl} alt="" />
                </div>
                <div className="post-content">
                  <div className="entry-meta">
                    <div className="posted-on">
                      <a href="#">{review.name}</a>
                      <p>{review.date}</p>
                    </div>
                  </div>
                  <div className="entry-content">
                    <p>{review.desc}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          {/* add review field */}
          <div className="client-review">
            <div className="review-form">
              <div className="review-title">
                <h5>{reviwtitle}</h5>
              </div>

              <form action="action" className="row">
                <div className="col-md-4 col-12">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Full Name"
                  />
                </div>
                <div className="col-md-4 col-12">
                  <input
                    type="email"
                    name="email"
                    id="name"
                    placeholder="Your Email"
                  />
                </div>
                <div className="col-md-4 col-12">
                  <div className="rating">
                    <span className="me-2">Your Rating</span>
                    <Ratting />
                  </div>
                </div>
                <div className="col-md-12 col-12">
                  <textarea
                    name="message"
                    id="message"
                    rows="8"
                    placeholder="Type Here Message"
                  ></textarea>
                </div>
                <div className="col-12">
                  <button type="submit" className="">
                    <span>Submit Review</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/*decription */}
        <div className="description">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
            quisquam! Rem suscipit ea dolorem impedit autem cumque placeat
            voluptatibus quae error possimus? Possimus nesciunt exercitationem
            ad aliquam cupiditate quasi natus quibusdam voluptates.
          </p>
          <div className="post-item">
            <div className="post-thumb">
                <img src="/src/assets/images/shop/01.jpg" alt="" />
            </div>
            <div className="post-content">
                <ul className="lab-ul">
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, odit.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, odit.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, odit.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, odit.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, odit.</li><li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, odit.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, odit.</li><li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, odit.</li>


                </ul>

            </div>

          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
            quisquam! Rem suscipit ea dolorem impedit autem cumque placeat
            voluptatibus quae error possimus? Possimus nesciunt exercitationem
            ad aliquam cupiditate quasi natus quibusdam voluptates.
          </p>
        </div>
      </div>
    </>
  );
};

export default Review;
