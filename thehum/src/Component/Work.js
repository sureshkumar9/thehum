import React from "react";
import '../index.css';
import Tab from './Tabs'

const Work = () => {
    const data = [
        {
            id: '1',
            tabTitle: "All",
            tabContent: <div className="wrapper">
                <div className="graphicsdesign">
                    <img src="\img\ac.jpg" className="main-img" alt="web" />
                    <div className="viewimg">
                        <img src="\img\link.png" className="icon" alt="icon" />
                        <img src="\img\searchh.png" className="icon" alt="icon" />
                        <h4 className="about-image">Creative Design <span>Web Design</span></h4>
                    </div>
                </div>
                <div className="graphicsdesign">
                    <img src="\img\aa.jpg" className="main-img" alt="web" />
                    <div className="viewimg">
                        <img src="\img\link.png" className="icon" alt="icon" />
                        <img src="\img\searchh.png" className="icon" alt="icon" />
                        <h4 className="about-image">Creative Design <span>Web Design</span></h4>
                    </div>
                </div>
                <div className="graphicsdesign">
                    <img src="\img\aaa.jpg" className="main-img" alt="web" />
                    <div className="viewimg">
                        <img src="\img\link.png" className="icon" alt="icon" />
                        <img src="\img\searchh.png" className="icon" alt="icon" />
                        <h4 className="about-image">Creative Design <span>Web Design</span></h4>
                    </div>
                </div>
                <div className="graphicsdesign">
                    <img src="\img\aa.jpg" className="main-img" alt="web" />
                    <div className="viewimg">
                        <img src="\img\link.png" className="icon" alt="icon" />
                        <img src="\img\searchh.png" className="icon" alt="icon" />
                        <h4 className="about-image">Creative Design <span>Web Design</span></h4>
                    </div>
                </div>
                <div className="graphicsdesign">
                    <img src="\img\ac.jpg" className="main-img" alt="web" />
                    <div className="viewimg">
                        <img src="\img\link.png" className="icon" alt="icon" />
                        <img src="\img\searchh.png" className="icon" alt="icon" />
                        <h4 className="about-image">Creative Design <span>Web Design</span></h4>
                    </div>
                </div>
                <div className="graphicsdesign">
                    <img src="\img\aws.jpg" className="main-img" alt="web" />
                    <div className="viewimg">
                        <img src="\img\link.png" className="icon" alt="icon" />
                        <img src="\img\searchh.png" className="icon" alt="icon" />
                        <h4 className="about-image">Creative Design <span>Web Design</span></h4>
                    </div>
                </div>
                <div className="graphicsdesign">
                    <img src="\img\about.jpg" className="main-img" alt="web" />
                    <div className="viewimg">
                        <img src="\img\link.png" className="icon" alt="icon" />
                        <img src="\img\searchh.png" className="icon" alt="icon" />
                        <h4 className="about-image">Creative Design <span>Web Design</span></h4>
                    </div>
                </div>
                <div className="graphicsdesign">
                    <img src="\img\ad.jpg" className="main-img" alt="web" />
                    <div className="viewimg">
                        <img src="\img\link.png" className="icon" alt="icon" />
                        <img src="\img\searchh.png" className="icon" alt="icon" />
                        <h4 className="about-image">Creative Design <span>Web Design</span></h4>
                    </div>
                </div>
                <div className="graphicsdesign">
                    <img src="\img\ae.jpg" className="main-img" alt="web" />
                    <div className="viewimg">
                        <img src="\img\link.png" className="icon" alt="icon" />
                        <img src="\img\searchh.png" className="icon" alt="icon" />
                        <h4 className="about-image">Creative Design <span>Web Design</span></h4>
                    </div>
                </div>
                <div className="graphicsdesign">
                    <img src="\img\af.jpg" className="main-img" alt="web" />
                    <div className="viewimg">
                        <img src="\img\link.png" className="icon" alt="icon" />
                        <img src="\img\searchh.png" className="icon" alt="icon" />
                        <h4 className="about-image">Creative Design <span>Web Design</span></h4>
                    </div>
                </div>
                <div className="graphicsdesign">
                    <img src="\img\ah.jpg" className="main-img" alt="web" />
                    <div className="viewimg">
                        <img src="\img\link.png" className="icon" alt="icon" />
                        <img src="\img\searchh.png" className="icon" alt="icon" />
                        <h4 className="about-image">Creative Design <span>Web Design</span></h4>
                    </div>
                </div>
                <div className="graphicsdesign">
                    <img src="\img\ag.jpg" className="main-img" alt="web" />
                    <div className="viewimg">
                        <img src="\img\link.png" className="icon" alt="icon" />
                        <img src="\img\searchh.png" className="icon" alt="icon" />
                        <h4 className="about-image">Creative Design <span>Web Design</span></h4>
                    </div>
                </div>
            </div>
        },
        {
            id: '2',
            tabTitle: "Graphics Design",
            tabContent: <div className="wrapper">
                <div className="graphicsdesign">
                    <img src="\img\ac.jpg" className="main-img" alt="web" />
                    <div className="viewimg">
                        <img src="\img\link.png" className="icon" alt="icon" />
                        <img src="\img\searchh.png" className="icon" alt="icon" />
                        <h4 className="about-image">Creative Design <span>Web Design</span></h4>
                    </div>
                </div>
                <div className="graphicsdesign">
                    <img src="\img\aaa.jpg" className="main-img" alt="web" />
                    <div className="viewimg">
                        <img src="\img\link.png" className="icon" alt="icon" />
                        <img src="\img\searchh.png" className="icon" alt="icon" />
                        <h4 className="about-image">Creative Design <span>Web Design</span></h4>
                    </div>
                </div>
                <div className="graphicsdesign">
                    <img src="\img\aaaa.jpg" className="main-img" alt="web" />
                    <div className="viewimg">
                        <img src="\img\link.png" className="icon" alt="icon" />
                        <img src="\img\searchh.png" className="icon" alt="icon" />
                        <h4 className="about-image">Creative Design <span>Web Design</span></h4>
                    </div>
                </div>
                <div className="graphicsdesign">
                    <img src="\img\ac.jpg" className="main-img" alt="web" />
                    <div className="viewimg">
                        <img src="\img\link.png" className="icon" alt="icon" />
                        <img src="\img\searchh.png" className="icon" alt="icon" />
                        <h4 className="about-image">Creative Design <span>Web Design</span></h4>
                    </div>
                </div>
                <div className="graphicsdesign">
                    <img src="\img\aws.jpg" className="main-img" alt="web" />
                    <div className="viewimg">
                        <img src="\img\link.png" className="icon" alt="icon" />
                        <img src="\img\searchh.png" className="icon" alt="icon" />
                        <h4 className="about-image">Creative Design <span>Web Design</span></h4>
                    </div>
                </div>
                <div className="graphicsdesign">
                    <img src="\img\about.jpg" className="main-img" alt="web" />
                    <div className="viewimg">
                        <img src="\img\link.png" className="icon" alt="icon" />
                        <img src="\img\searchh.png" className="icon" alt="icon" />
                        <h4 className="about-image">Creative Design <span>Web Design</span></h4>
                    </div>
                </div>
                <div className="graphicsdesign">
                    <img src="\img\ad.jpg" className="main-img" alt="web" />
                    <div className="viewimg">
                        <img src="\img\link.png" className="icon" alt="icon" />
                        <img src="\img\searchh.png" className="icon" alt="icon" />
                        <h4 className="about-image">Creative Design <span>Web Design</span></h4>
                    </div>
                </div>
                <div className="graphicsdesign">
                    <img src="\img\ah.jpg" className="main-img" alt="web" />
                    <div className="viewimg">
                        <img src="\img\link.png" className="icon" alt="icon" />
                        <img src="\img\searchh.png" className="icon" alt="icon" />
                        <h4 className="about-image">Creative Design <span>Web Design</span></h4>
                    </div>
                </div>
                <div className="graphicsdesign">
                    <img src="\img\ag.jpg" className="main-img" alt="web" />
                    <div className="viewimg">
                        <img src="\img\link.png" className="icon" alt="icon" />
                        <img src="\img\searchh.png" className="icon" alt="icon" />
                        <h4 className="about-image">Creative Design <span>Web Design</span></h4>
                    </div>
                </div>
            </div>
        },
        {
            id: '3',
            tabTitle: "Web Design",
            tabContent: <div className="wrapper">
                <div className="graphicsdesign">
                    <img src="\img\aaa.jpg" className="main-img" alt="web" />
                    <div className="viewimg">
                        <img src="\img\link.png" className="icon" alt="icon" />
                        <img src="\img\searchh.png" className="icon" alt="icon" />
                        <h4 className="about-image">Creative Design <span>Web Design</span></h4>
                    </div>
                </div>
                <div className="graphicsdesign">
                    <img src="\img\ac.jpg" className="main-img" alt="web" />
                    <div className="viewimg">
                        <img src="\img\link.png" className="icon" alt="icon" />
                        <img src="\img\searchh.png" className="icon" alt="icon" />
                        <h4 className="about-image">Creative Design <span>Web Design</span></h4>
                    </div>
                </div>
                <div className="graphicsdesign">
                    <img src="\img\aws.jpg" className="main-img" alt="web" />
                    <div className="viewimg">
                        <img src="\img\link.png" className="icon" alt="icon" />
                        <img src="\img\searchh.png" className="icon" alt="icon" />
                        <h4 className="about-image">Creative Design <span>Web Design</span></h4>
                    </div>
                </div>
                <div className="graphicsdesign">
                    <img src="\img\about.jpg" className="main-img" alt="web" />
                    <div className="viewimg">
                        <img src="\img\link.png" className="icon" alt="icon" />
                        <img src="\img\searchh.png" className="icon" alt="icon" />
                        <h4 className="about-image">Creative Design <span>Web Design</span></h4>
                    </div>
                </div>
                <div className="graphicsdesign">
                    <img src="\img\ad.jpg" className="main-img" alt="web" />
                    <div className="viewimg">
                        <img src="\img\link.png" className="icon" alt="icon" />
                        <img src="\img\searchh.png" className="icon" alt="icon" />
                        <h4 className="about-image">Creative Design <span>Web Design</span></h4>
                    </div>
                </div>
                <div className="graphicsdesign">
                    <img src="\img\ae.jpg" className="main-img" alt="web" />
                    <div className="viewimg">
                        <img src="\img\link.png" className="icon" alt="icon" />
                        <img src="\img\searchh.png" className="icon" alt="icon" />
                        <h4 className="about-image">Creative Design <span>Web Design</span></h4>
                    </div>
                </div>
                <div className="graphicsdesign">
                    <img src="\img\af.jpg" className="main-img" alt="web" />
                    <div className="viewimg">
                        <img src="\img\link.png" className="icon" alt="icon" />
                        <img src="\img\searchh.png" className="icon" alt="icon" />
                        <h4 className="about-image">Creative Design <span>Web Design</span></h4>
                    </div>
                </div>
                <div className="graphicsdesign">
                    <img src="\img\ah.jpg" className="main-img" alt="web" />
                    <div className="viewimg">
                        <img src="\img\link.png" className="icon" alt="icon" />
                        <img src="\img\searchh.png" className="icon" alt="icon" />
                        <h4 className="about-image">Creative Design <span>Web Design</span></h4>
                    </div>
                </div>
                <div className="graphicsdesign">
                    <img src="\img\ag.jpg" className="main-img" alt="web" />
                    <div className="viewimg">
                        <img src="\img\link.png" className="icon" alt="icon" />
                        <img src="\img\searchh.png" className="icon" alt="icon" />
                        <h4 className="about-image">Creative Design <span>Web Design</span></h4>
                    </div>
                </div>
            </div>
        },
        {
            id: '4',
            tabTitle: "Landing Pages",
            tabContent: <div className="wrapper">
                <div className="graphicsdesign">
                    <img src="\img\ac.jpg" className="main-img" alt="web" />
                    <div className="viewimg">
                        <img src="\img\link.png" className="icon" alt="icon" />
                        <img src="\img\searchh.png" className="icon" alt="icon" />
                        <h4 className="about-image">Creative Design <span>Web Design</span></h4>
                    </div>
                </div>
                <div className="graphicsdesign">
                    <img src="\img\ac.jpg" className="main-img" alt="web" />
                    <div className="viewimg">
                        <img src="\img\link.png" className="icon" alt="icon" />
                        <img src="\img\searchh.png" className="icon" alt="icon" />
                        <h4 className="about-image">Creative Design <span>Web Design</span></h4>
                    </div>
                </div>
                <div className="graphicsdesign">
                    <img src="\img\ac.jpg" className="main-img" alt="web" />
                    <div className="viewimg">
                        <img src="\img\link.png" className="icon" alt="icon" />
                        <img src="\img\searchh.png" className="icon" alt="icon" />
                        <h4 className="about-image">Creative Design <span>Web Design</span></h4>
                    </div>
                </div>
                <div className="graphicsdesign">
                    <img src="\img\ac.jpg" className="main-img" alt="web" />
                    <div className="viewimg">
                        <img src="\img\link.png" className="icon" alt="icon" />
                        <img src="\img\searchh.png" className="icon" alt="icon" />
                        <h4 className="about-image">Creative Design <span>Web Design</span></h4>
                    </div>
                </div>
                <div className="graphicsdesign">
                    <img src="\img\ac.jpg" className="main-img" alt="web" />
                    <div className="viewimg">
                        <img src="\img\link.png" className="icon" alt="icon" />
                        <img src="\img\searchh.png" className="icon" alt="icon" />
                        <h4 className="about-image">Creative Design <span>Web Design</span></h4>
                    </div>
                </div>
                <div className="graphicsdesign">
                    <img src="\img\ac.jpg" className="main-img" alt="web" />
                    <div className="viewimg">
                        <img src="\img\link.png" className="icon" alt="icon" />
                        <img src="\img\searchh.png" className="icon" alt="icon" />
                        <h4 className="about-image">Creative Design <span>Web Design</span></h4>
                    </div>
                </div>
                <div className="graphicsdesign">
                    <img src="\img\ac.jpg" className="main-img" alt="web" />
                    <div className="viewimg">
                        <img src="\img\link.png" className="icon" alt="icon" />
                        <img src="\img\searchh.png" className="icon" alt="icon" />
                        <h4 className="about-image">Creative Design <span>Web Design</span></h4>
                    </div>
                </div>
                <div className="graphicsdesign">
                    <img src="\img\ac.jpg" className="main-img" alt="web" />
                    <div className="viewimg">
                        <img src="\img\link.png" className="icon" alt="icon" />
                        <img src="\img\searchh.png" className="icon" alt="icon" />
                        <h4 className="about-image">Creative Design <span>Web Design</span></h4>
                    </div>
                </div>
                <div className="graphicsdesign">
                    <img src="\img\ac.jpg" className="main-img" alt="web" />
                    <div className="viewimg">
                        <img src="\img\link.png" className="icon" alt="icon" />
                        <img src="\img\searchh.png" className="icon" alt="icon" />
                        <h4 className="about-image">Creative Design <span>Web Design</span></h4>
                    </div>
                </div>
            </div>
        },
        {
            id: '5',
            tabTitle: "Wordpress",
            tabContent: <div className="wrapper">
                <div className="graphicsdesign">
                    <img src="\img\ac.jpg" className="main-img" alt="web" />
                    <div className="viewimg">
                        <img src="\img\link.png" className="icon" alt="icon" />
                        <img src="\img\searchh.png" className="icon" alt="icon" />
                        <h4 className="about-image">Creative Design <span>Web Design</span></h4>
                    </div>
                </div>
                <div className="graphicsdesign">
                    <img src="\img\ac.jpg" className="main-img" alt="web" />
                    <div className="viewimg">
                        <img src="\img\link.png" className="icon" alt="icon" />
                        <img src="\img\searchh.png" className="icon" alt="icon" />
                        <h4 className="about-image">Creative Design <span>Web Design</span></h4>
                    </div>
                </div>
                <div className="graphicsdesign">
                    <img src="\img\ac.jpg" className="main-img" alt="web" />
                    <div className="viewimg">
                        <img src="\img\link.png" className="icon" alt="icon" />
                        <img src="\img\searchh.png" className="icon" alt="icon" />
                        <h4 className="about-image">Creative Design <span>Web Design</span></h4>
                    </div>
                </div>
                <div className="graphicsdesign">
                    <img src="\img\ac.jpg" className="main-img" alt="web" />
                    <div className="viewimg">
                        <img src="\img\link.png" className="icon" alt="icon" />
                        <img src="\img\searchh.png" className="icon" alt="icon" />
                        <h4 className="about-image">Creative Design <span>Web Design</span></h4>
                    </div>
                </div>
                <div className="graphicsdesign">
                    <img src="\img\ac.jpg" className="main-img" alt="web" />
                    <div className="viewimg">
                        <img src="\img\link.png" className="icon" alt="icon" />
                        <img src="\img\searchh.png" className="icon" alt="icon" />
                        <h4 className="about-image">Creative Design <span>Web Design</span></h4>
                    </div>
                </div>
                <div className="graphicsdesign">
                    <img src="\img\ac.jpg" className="main-img" alt="web" />
                    <div className="viewimg">
                        <img src="\img\link.png" className="icon" alt="icon" />
                        <img src="\img\searchh.png" className="icon" alt="icon" />
                        <h4 className="about-image">Creative Design <span>Web Design</span></h4>
                    </div>
                </div>
                <div className="graphicsdesign">
                    <img src="\img\ac.jpg" className="main-img" alt="web" />
                    <div className="viewimg">
                        <img src="\img\link.png" className="icon" alt="icon" />
                        <img src="\img\searchh.png" className="icon" alt="icon" />
                        <h4 className="about-image">Creative Design <span>Web Design</span></h4>
                    </div>
                </div>
                <div className="graphicsdesign">
                    <img src="\img\ac.jpg" className="main-img" alt="web" />
                    <div className="viewimg">
                        <img src="\img\link.png" className="icon" alt="icon" />
                        <img src="\img\searchh.png" className="icon" alt="icon" />
                        <h4 className="about-image">Creative Design <span>Web Design</span></h4>
                    </div>
                </div>
                <div className="graphicsdesign">
                    <img src="\img\ac.jpg" className="main-img" alt="web" />
                    <div className="viewimg">
                        <img src="\img\link.png" className="icon" alt="icon" />
                        <img src="\img\searchh.png" className="icon" alt="icon" />
                        <h4 className="about-image">Creative Design <span>Web Design</span></h4>
                    </div>
                </div>
                <div className="graphicsdesign">
                    <img src="\img\ac.jpg" className="main-img" alt="web" />
                    <div className="viewimg">
                        <img src="\img\link.png" className="icon" alt="icon" />
                        <img src="\img\searchh.png" className="icon" alt="icon" />
                        <h4 className="about-image">Creative Design <span>Web Design</span></h4>
                    </div>
                </div>
                <div className="graphicsdesign">
                    <img src="\img\ac.jpg" className="main-img" alt="web" />
                    <div className="viewimg">
                        <img src="\img\link.png" className="icon" alt="icon" />
                        <img src="\img\searchh.png" className="icon" alt="icon" />
                        <h4 className="about-image">Creative Design <span>Web Design</span></h4>
                    </div>
                </div>
                <div className="graphicsdesign">
                    <img src="\img\ac.jpg" className="main-img" alt="web" />
                    <div className="viewimg">
                        <img src="\img\link.png" className="icon" alt="icon" />
                        <img src="\img\searchh.png" className="icon" alt="icon" />
                        <h4 className="about-image">Creative Design <span>Web Design</span></h4>
                    </div>
                </div>
            </div>
        }
    ]
    return (
        <div className="work space">
            <div className="container">
                <h2 className="main_heading">Our Amazing Work</h2>
                <Tab data={data} />
                <button><img src="\img\pluss.png" className="plus-icon" alt="icon" />Load More</button>
            </div>
        </div>
    );
}
export default Work;

