import React from "react";
import { useForm } from "react-hook-form";

const Footer = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="footer space">
            <div className="container">
                <div className="wrapper">
                    <div className="footer-one">
                        <div className="logo">
                            <a href=""><img src="\img\Logo.png" alt="logo" /></a>
                        </div>
                        <p className="footer-about">Lorem ipsum dolor sit amet, con is sectetur adipiscing elit. Duis ut lob ortis nulla. Vestibulum ante ipsum primis itrices posuere cubilia.</p>
                        <address className="footer-address">Office :<br />
                            795 Folsom Ave, Suite 600
                            San Francisco, CA 94107ī</address>
                        <ul>
                            <li>Phone:<a href=""> (91) 8547 632521</a></li>
                            <li>Fax:<a href=""> (91) 11 4752 1433</a></li>
                            <li>Email:<a href=""> info@canvas.com</a></li>
                        </ul>
                    </div>
                    <div className="footer-two">
                        <div className="top-footer">
                            <h3 className="footer-heading">recent post</h3>
                        </div>
                        <div className="footer-body">
                            <div className="wrapper footer-post">
                                <div className="ft-img">
                                    <img src="\img\aaa.jpg" alt="image" />
                                </div>
                                <div className="ft-content">
                                    <h3>A STANDARD IMAGE POST</h3>
                                    <p>Lorem ipsum dolor sit amet, con   sectetur adip is lisicing elit, sed do.</p>
                                    <p className="publish-date">10 March, 2015</p>
                                </div>
                            </div>
                            <div className="wrapper footer-post">
                                <div className="ft-img">
                                    <img src="\img\aaa.jpg" alt="image" />
                                </div>
                                <div className="ft-content">
                                    <h3>multi author POST</h3>
                                    <p>Lorem ipsum dolor sit amet, con   sectetur adip is lisicing elit, sed do.</p>
                                    <p className="publish-date">10 March, 2015</p>
                                </div>
                            </div>
                            <div className="wrapper footer-post">
                                <div className="ft-img">
                                    <img src="\img\aa.jpg" alt="image" />
                                </div>
                                <div className="ft-content">
                                    <h3>multi author POST</h3>
                                    <p>Lorem ipsum dolor sit amet, con   sectetur adip is lisicing elit, sed do.</p>
                                    <p className="publish-date">10 March, 2015</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-two">
                        <div className="top-footer">
                            <h3 className="footer-heading">tag</h3>
                        </div>
                        <div className="footer-body">
                            <div className="d-flex">
                                <button className="l-btn">audio</button>
                                <button className="l-btn">gallery</button>
                                <button className="l-btn">image</button>
                                <button className="l-btn">audio</button>
                                <button className="l-btn">gallery</button>
                                <button className="l-btn">image</button>
                                <button className="l-btn">audio</button>
                                <button className="l-btn">gallery</button>
                                <button className="l-btn">image</button>
                                <button className="l-btn">audio</button>
                                <button className="l-btn">gallery</button>
                                <button className="l-btn">image</button>
                            </div>
                        </div>
                        <div className="top-footer">
                            <h3 className="footer-heading">NEWSLETTER </h3>
                        </div>
                        <p className="subcribe">Subscribe to Our Newsletter to get Important News,  Amazing Offers.</p>
                        <form onSubmit={handleSubmit(onSubmit)} className="footer-form">
                            <input {...register("email", { required: true })} placeholder="Eenter email" />
                            <input type="submit" value="GO" />
                            <p className='errormsg'>{errors.email?.type === 'required' && "Please enter your email"}</p>
                        </form>
                    </div>
                    <div className="footer-one">
                        <div className="top-footer">
                            <h3 className="footer-heading">tag</h3>
                        </div>
                        <div className="footer-body">
                            <div className="d-flex">
                                <img src="\img\ab.jpg" className="l-img" alt="image" />
                                <img src="\img\ac.jpg" className="l-img" alt="image" />
                                <img src="\img\ad.jpg" className="l-img" alt="image" />
                                <img src="\img\ah.jpg" className="l-img" alt="image" />
                                <img src="\img\af.jpg" className="l-img" alt="image" />
                                <img src="\img\ag.jpg" className="l-img" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;