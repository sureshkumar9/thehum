import React from "react";
import '../index.css';
import Tab from './Tabs';

const Service = () => {
    const data = [
        {
            id: '1',
            tabTitle: "Web Design",
            tabContent: <div className="wrapper web">
                <img src="\img\service.jpg" alt="logo" />
                <p className="tab_para">Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development rather than software development. Web design used to be focused on designing websites for desktop browsers; however, since the mid-2010s, design for mobile and tablet browsers has become ever-increasingly important.Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development rather than software development. Web design used to be focused on designing websites for desktop browsers; however, since the mid-2010s, design for mobile and tablet browsers has become ever-increasingly important.</p>
            </div>
        },
        {
            id: '2',
            tabTitle: "Graphic Design",
            tabContent: 'Graphic design is a craft where professionals create visual content to communicate messages. By applying visual hierarchy and page layout techniques, designers use typography and pictures to meet users specific needs and focus on the logic of displaying elements in interactive designs, to optimize the user experience.'
        },
        {
            id: '3',
            tabTitle: "Online Support",
            tabContent: 'Online help is the help file accessible for software applications or operating systems. It provides information relating to general operation of the program as well as troubleshooting. Online help can help customers resolve their issues without having to contact a customer service representative, saving time and effort.'
        },
        {
            id: '4',
            tabTitle: "App Design",
            tabContent: 'App design combines the user interface (UI) and user experience (UX). While UI lends itself to the overall style of the app (including the colors, fonts, and general look and feel), UX focuses on the actual functionality and usability. A large number of users abandon an app after using it for the first time. Since users are picky about which apps they use and so quick to abandon those they don’t enjoy, it’s essential to invest time and effort in creating a great user experience. The better the design, the better the chance that a user will engage with it and thus keep using it.'
        },
        {
            id: '5',
            tabTitle: "Online Marketing",
            tabContent: 'Online marketing is the practice of leveraging web-based channels to spread a message about a companys brand, products, or services to its potential customers. The methods and techniques used for online marketing include email, social media, display advertising, search engine optimization, '
        },
        {
            id: '6',
            tabTitle: "Seo Service",
            tabContent: 'Search engine optimization (SEO) is the process of improving the quality and quantity of website traffic to a website or a web page from search engines. SEO targets unpaid traffic (known as "natural" or "organic" results) rather than direct traffic or paid traffic.'
        }
    ]
    return (
        <div className="service space">
            <div className="container">
                <h2 className="main_heading">Our Service</h2>
                <Tab data={data} />
            </div>
        </div>
    )
}
export default Service;