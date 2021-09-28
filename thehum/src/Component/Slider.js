import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Slider = () => {
    return (
        <Carousel>
            <div>
                <img src="img\slider2.jpg" />
                <div className="sliter_about">
                    <p className="wordprss">The Ham is<span> Wordpress theme</span> </p>
                    <h1 className="slider_heading">we are creative</h1>
                    <p className="slider_paragraph">Just Buy And Enjoy These Awesome Features</p>
                    <div className="btn_one">
                        <button>EXPLORE NOW</button>
                        <button>PURCHASE NOW </button>
                    </div>
                </div>
            </div>
            <div>
                <img src="img\slider3.jpg" />
                <div className="sliter_about">
                    <p className="wordprss">The Ham is<span> Wordpress theme</span> </p>
                    <h1 className="slider_heading">we are creative</h1>
                    <p className="slider_paragraph">Just Buy And Enjoy These Awesome Features</p>
                    <div className="btn_one">
                        <button>EXPLORE NOW</button>
                        <button>PURCHASE NOW </button>
                    </div>
                </div>
            </div>
            <div>
                <img src="img\slider.jpg" />
                <div className="sliter_about">
                    <p className="wordprss">The Ham is<span> Wordpress theme</span> </p>
                    <h1 className="slider_heading">we are creative</h1>
                    <p className="slider_paragraph">Just Buy And Enjoy These Awesome Features</p>
                    <div className="btn_one">
                        <button>EXPLORE NOW</button>
                        <button>PURCHASE NOW </button>
                    </div>
                </div>
            </div>
        </Carousel>
    );
}
export default Slider;