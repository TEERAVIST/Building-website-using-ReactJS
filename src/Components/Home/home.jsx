import React from "react";
import './home.css';
import video from '../Assets/Videobay.mp4';             // video from pixabay
import { CiLocationOn } from "react-icons/ci"; 
import { HiFilter } from "react-icons/hi";

const Home = () => {
    return (
        <section className="Home">
            <div className="overlay"></div>
            <video src={video} muted autoPlay loop type="video/mp4" ></video>
          
            <div className="homeContent">
                <div className="textDiv">
                    <span className="smallText">
                        Our Packages
                    </span>
                    <h1 className="homeTitle">
                        Search Your <br /> Holiday
                    </h1>
                </div>
                
                    <div className="cardDiv-grid">
                        <div className="destinationInput">
                            <label htmlFor="city" className="city">Search your destination:</label>
                            <div className="input-flex">
                                <input type="text" placeholder="Enter name here..."/><CiLocationOn className="icon" />
                            </div>
                        </div>
                   
                        <div className="dateInput">
                            <label htmlFor="date" className="date">Select your date:</label>
                            <div className="input-flex">
                                <input type="date" />
                            </div>
                        </div>

                        <div className="priceInput">
                            <div className="label-total-flex">
                                <label  htmlFor="price">Max price:</label>
                                 <h4  className="total">฿100,000</h4>
                            </div>
                            <div className="input-flex">
                                <input className="rangedesign" type="range" max='100000' min='1000' />
                            </div>
                      
                        
                            <div className="searchOption-flex">
                              <HiFilter className="icon"/>
                              <span>MORE FILTERS</span>
                            </div>
                        </div>
                 </div>
            </div>
       
       
    </section>
    )
}

export default Home