import React from 'react'
import PageHeader from '../component/PageHeader';
const subTitle = "About Our Brand";
const title = "Good Qualification Services And Better Experiences";
const desc = "We pride ourselves on providing top-notch services and unforgettable experiences. Our transparent processes incentivize efficient functionality, prioritizing seamless communication and leveraged services across platforms.";

const year = "5+";
const expareance = "Years Of Experiences";

const aboutList = [
{
imgUrl: '/src/assets/images/about/icon/01.jpg',
imgAlt: 'about icon rajibraj91 rajibraj',
title: 'Skilled Instructors',
desc: 'Experience top-notch instruction from our skilled instructors, dedicated to delivering exceptional learning experiences.',
},
{
imgUrl: '/src/assets/images/about/icon/02.jpg',
imgAlt: 'about icon rajibraj91 rajibraj',
title: 'Get Certificate',
desc: 'Earn valuable certificates upon completing our courses, validating your expertise and commitment to professional growth.',
},
{
imgUrl: '/src/assets/images/about/icon/03.jpg',
imgAlt: 'about icon rajibraj91 rajibraj',
title: 'Online Classes',
desc: 'Access our comprehensive online classes from anywhere, at any time, and unlock your potential with flexible learning options.',
},
]


const About = () => {
  return (
    <div>
        <PageHeader title={"At Craftopia, we're more than just a label – we're a celebration of craftsmanship, creativity, and community."} curPage={"Learn more about the heart and soul of Craftopia "}/>
        <div className="about-section style-3 padding-tb section-bg">
            <div className="container">
                <div className="row justify-content-center row-cols-xl-2 row-cols-1 align-items-center">
                   <div className="col">
                    <div className="about-left">
                        <div className="about-thumb">
                        <img src="/src/assets/images/productjson/c1.jpg" alt="" />
                        </div>
                    <div className="abs-thumb">
                        <img src="/src/assets/images/about/02.jpg" alt="" />
                        </div>  
                        <div className="about-left-content">
                            <h3>{year}</h3>
                            <p>{expareance}</p>
                    
                        </div>
                </div>
            </div>

            {/* 2nd col */}
            <div className="col">
                <div className="about-right">
                    <div className="section-header">
                        <span className='subtitle'>{subTitle}</span>
                        <h2 className='title'>{title}</h2>
                        <p>{desc}</p>
                    </div>
                    <div className="section-wrapper">
                        <ul className='lab-ul'>
                                   {
                                    aboutList.map((val,i) =>(
                                        <li key={i}>
                                            <div className="sr-left">
                                                <img src={val.imgUrl} alt="" />
                                            </div>
                                            <div className="sr-right">
                                                <img src={val.title} alt="" />
                                                <p>{val.desc}</p>
                                            </div>


                                        </li>
                                    ))
                                   }
                        </ul>
                    </div>


                </div>
            </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default About