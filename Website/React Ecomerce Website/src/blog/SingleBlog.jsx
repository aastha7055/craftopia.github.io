/* eslint-disable react/jsx-no-target-blank */
import React, { useState } from "react";
import blogList from "../utilis/blogdata";
import { useParams } from "react-router-dom";
import PageHeader from "../component/PageHeader";
import Tags from "../shop/Tags";
import PopularPost from "../shop/PopularPost";

const socialList = [
    {
    link: "#",
    iconName: "icofont-facebook",
    className: "facebook",
    },
    {
    link: "#",
    iconName: "icofont-twitter",
    className: "twitter",
    },
    {
    link: "#",
    iconName: "icofont-linkedin",
    className: "linkedin",
    },
    {
    link: "#",
    iconName: "icofont-instagram",
    className: "instagram",
    },
    {
    link: "#",
    iconName: "icofont-pinterest",
    className: "pinterest",
    },
    ];
const SingleBlog = () => {
  const [blog, setBlog] = useState(blogList);
  const { id } = useParams();

  const result = blog.filter((b) => b.id === Number(id));
  console.log(result[0]);
  return (
    <div>
      <PageHeader title={"Single Blog Pages"} curPage={"Blog / Blog Details"} />
      <div className="blog-section blog-single padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                <div className="section-wrapper">
                  <div className="row row-cols-1 justify-content-center g-4">
                    <div className="col">
                      <div className="post-item style-2">
                        <div className="post-inner">
                          {result.map((item) => (
                            <div key={item.id}>
                              <div className="post-thumb">
                                <img
                                  src={item.imgUrl}
                                  alt=""
                                  className="w-100"
                                />
                              </div>
                              <div className="post-content">
                                <h3>{item.title}</h3>
                                <div className="meta-post">
                                  <ul className="lab-ul">
                                    {item.metaList.map((val, i) => (
                                      <li key={i}>
                                        <i className={val.iconName}></i>
                                        {val.text}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <p>
                                  Lorem ipsum dolor sit, amet consectetur
                                  adipisicing elit. Nobis modi autem animi, sed
                                  accusantium, explicabo ad saepe quo quia
                                  deleniti, fugiat veritatis? Eaque.
                                </p>
                                <blockquote>
                                  <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Commodi, aperiam voluptate
                                    necessitatibus quos
                                  </p>

                                  <cite>
                                    <a href="#">...Melissa Hunter</a>
                                  </cite>
                                </blockquote>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit. Incidunt sint temporibus,
                                  modi aperiam cum, aliquam adipisci voluptatum
                                  maiores voluptate reiciendis molestiae iure
                                  voluptates molestias. Eveniet, inventore!
                                  Fugiat repudiandae rem non inventore minus
                                  beatae cupiditate!
                                </p>
                                <img
                                  src="/src/assets/images/blog/single/01.jpg"
                                  alt=""
                                />
                                <p>
                                  Lorem ipsum dolor sit amet consectetur
                                  adipisicing elit. Explicabo sapiente nam
                                  corporis dolores laudantium quam quasi sint,
                                  quod, eum pariatur facilis temporibus
                                  repellendus quo! Temporibus voluptatibus
                                  doloremque tempore facilis, perspiciatis
                                  blanditiis sapiente corporis est explicabo nam
                                  sunt consequuntur. Ex inventore, ipsam facilis
                                  reprehenderit quos a?
                                </p>
                                <div className="video-thumb">
                                  <img
                                    src="/src/assets/images/blog/single/02.jpg"
                                    alt=""
                                  />
                                  <a
                                    href="https://www.youtube.com/watch?v=FPu9Uld7W-E "
                                    className="video-button popup"
                                    target="_blank"
                                  >
                                    <i className="icofont-ui-play"></i>
                                  </a>
                                </div>
                                <p>
                                  Lorem ipsum dolor sit amet consectetur
                                  adipisicing elit. Id unde nihil est cumque
                                  perspiciatis recusandae aperiam, cupiditate
                                  dolorem provident ea atque dolorum officiis
                                  eius nam eveniet ipsum laudantium laboriosam
                                  vitae dolores aspernatur distinctio sunt.
                                </p>

                                <div className="tags-section">
                                    <ul className="tags lab-ul">
                                        <li>
                                            <a href="#">Agency</a>
                                        </li>
                                        <li>
                                            <a href="#">Business</a>
                                        </li>
                                        <li>
                                            <a href="#">Personal</a>
                                        </li>

                                    </ul>
                                    <ul className="lab-ul social-icons">
                                        {
                                            socialList.map((val,i)=>(
                                                <li key={i}>
                                                    <a href="#" className={val.className}>
                                                        <i className={val.iconName}></i>
                                                    </a>
                                                </li>
                                            ))

                                        }          
                                    </ul>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="navigations-part">
                        <div className="left">
                            <a href="#" className="prev"><i className="icofont-double-left"></i> Previous Blog
                            </a>
                            <a href="#" className="title">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni perferendis quo odio?
                            </a>
                        </div>
                        <div className="right">
                            <a href="#" className="prev"><i className="icofont-double-left"></i> Previous Blog
                            </a>
                            <a href="#" className="title">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni perferendis quo odio?
                            </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-12">
                <aside>
                    <Tags/>
                    <PopularPost/>
                </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
