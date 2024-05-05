import React from 'react'
import { Link } from "react-router-dom";
const title ="Join our community of passionate shoppers!";

const desc = "Download our app to browse and shop conveniently from your device. Start exploring unique handmade products and discover your next favorite item.";

const clientsList = [
{
imgUrl: '/src/assets/images/clients/avater.jpg',
imgAlt: 'education thumb rajibraj91 rajibraj',
text: 'Join with Us',
},
{
imgUrl: '/src/assets/images/clients/avater.jpg',
imgAlt: 'education thumb rajibraj91 rajibraj',
text: 'Join with Us',
},
{
imgUrl: '/src/assets/images/clients/avater.jpg',
imgAlt: 'education thumb rajibraj91 rajibraj',
text: 'Join with Us',
},
{
imgUrl: '/src/assets/images/clients/avater.jpg',
imgAlt: 'education thumb rajibraj91 rajibraj',
text: 'Join with Us',
},
{
imgUrl: '/src/assets/images/clients/avater.jpg',
imgAlt: 'education thumb rajibraj91 rajibraj',
text: 'Join with Us',
},
{
imgUrl: '/src/assets/images/clients/avater.jpg',
imgAlt: 'education thumb rajibraj91 rajibraj',
text: 'Join with Us',
},
{
imgUrl: '/src/assets/images/clients/avater.jpg',
imgAlt: 'education thumb rajibraj91 rajibraj',
text: 'Join with Us',
},
]
const LocationSprade = () => {
  return (
    <div className='clients-section style-2 padding-tb'>
           <div className='conatiner'>
            <div className='section-header text-center'>
                <h2 className='title'>{title}</h2>
                <p>{desc}</p>              
            </div>
             
             {/* main content*/}
             <div className='section-wrapper'>
                <div className='clients'>
                    {
                        clientsList.map((val,i)=>(
                            <div key={i} className='client-list'>
                                <Link to="/sign-up" className="client-content">
                                    <span>{val.text}</span>
                                </Link>
                                <div className='client-thumb'>
                                    <img src={val.imgUrl} alt="" />
                                </div>
                            </div>
                        ))
                    }

                </div>

             </div>
           </div>
    </div>
  )
}

export default LocationSprade