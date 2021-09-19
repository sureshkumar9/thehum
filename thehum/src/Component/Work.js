import React from "react";
import '../index.css';
import Tab from './Tabs'

const Work = () => {
    const data = [
        {
            id: '1',
            tabTitle: "All",
            tabchangContent: <div className="wrapper">
                <div className="graphicsdesign">
                    <img src="\img\ac.jpg" alt="web" />
                    <div className="viewimg">
                        <img src="\img\link.png" alt="icon" />
                        <img src="\img\searchh.jpg" alt="icon" />
                        <h4 className="about-image">Creative Design<span>Web Design</span></h4>
                    </div>
                </div>
            </div>
        },
        {
            id: '2',
            tabTitle: "Graphics Design",
            tabContent: 'Tab Content 2'
        },
        {
            id: '3',
            tabTitle: "Web Design",
            tabContent: 'Tab Content 3'
        },
        {
            id: '4',
            tabTitle: "Landing Pages",
            tabContent: 'NEWvc'
        },
        {
            id: '5',
            tabTitle: "Wordpress",
            tabContent: 'Tab Content 2'
        }
    ]
    return (
        <div className="work space">
            <div className="container">
                <h2 className="main_heading">Our Amazing Work</h2>
                <Tab data={data} />
            </div>
        </div>
    );
}
export default Work;

