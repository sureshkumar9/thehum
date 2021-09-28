import React from 'react';
import Slider from 'infinite-react-carousel';

const Slidertwo = () => {
    return (
        <div className="slider-img">
            <div className="slider-bg space">
                <div className="container">
                <h2 className="main_heading">What People Say About Thehum</h2>
                    <Slider dots autoplay="true" pauseOnHover="true">
                        <div className="center space">
                           <img src="/img/Quotation-Mark-PNG-Free-Download.png" className="qouts" alt="quts"/>
                           <p className="sliderparagraph">Essentially a review is an opportunity to have a discussion with a team member about their work, their personal development and their future career. ... Review meetings provide an opportunity for the team member to have time with their reviewer: To discuss their performance and development.</p>
                           <h3 className="name">HASAN ALI</h3>
                           <p className="position-client">UX Designer</p>
                           <div className="auth-name">
                               <img src="/img/client1.jpeg" className="author-img" alt="name"/>
                           </div>
                        </div>
                        <div className="center space">
                           <img src="/img/Quotation-Mark-PNG-Free-Download.png" className="qouts" alt="quts"/>
                           <p className="sliderparagraph">Essentially a review is an opportunity to have a discussion with a team member about their work, their personal development and their future career. ... Review meetings provide an opportunity for the team member to have time with their reviewer: To discuss their performance and development.</p>
                           <h3 className="name">HASAN ALI</h3>
                           <p className="position-client">UX Designer</p>
                           <div className="auth-name">
                               <img src="/img/client1.jpeg" className="author-img" alt="name"/>
                           </div>
                        </div>
                        <div className="center space">
                           <img src="/img/Quotation-Mark-PNG-Free-Download.png" className="qouts" alt="quts"/>
                           <p className="sliderparagraph">Essentially a review is an opportunity to have a discussion with a team member about their work, their personal development and their future career. ... Review meetings provide an opportunity for the team member to have time with their reviewer: To discuss their performance and development.</p>
                           <h3 className="name">HASAN ALI</h3>
                           <p className="position-client">UX Designer</p>
                           <div className="auth-name">
                               <img src="/img/client1.jpeg" className="author-img" alt="name"/>
                           </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
}
export default Slidertwo;