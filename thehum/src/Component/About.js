import React from "react";
import '../index.css';
import Tab from './Tabs';

const About = () => {
    const data = [
        {id : '1',
         tabTitle: "OOUR HISTORY",
         tabContent:
         <div>
             <div className="process">
           <div className="content">
               USER INTERFAACE
           </div>
         </div>
         <div className="process">
           <div className="content">
               USER INTERFAACE
           </div>
         </div>
         <div className="process">
           <div className="content">
               USER INTERFAACE
           </div>
         </div>
         <div className="process">
           <div className="content">
               USER INTERFAACE
           </div>
         </div>
         <div className="process">
           <div className="content">
               USER INTERFAACE
           </div>
         </div>
         </div>
         
         
        },
        {id : '2',
         tabTitle: "OUR BOIGRAPHY",
         tabContent: '"This was the perfect way to equip our team with tools to overcome challenges of organizing in a decentralised and value-driven way. Rich and Nati guided the journey with commitment and positivity at every step and supported us with their vast experience and knowledge. The atmosphere of safety and trust they created was inspiring and set the tone for our follow-up plans.'
        },
        {id : '3',
         tabTitle: "OUR SKILLS",
         tabContent:<ul>
             <li>HTML</li>
             <li>CSS</li>
             <li>JS</li>
             <li>JAVA</li>
             <li>REACT</li>
         </ul>
        }
        
      ]
    return (
        <div className="about space">
        <div className="container">
            <div className="wrapper">
                <div className="left">
                    <img src="\img\about.jpg" alt="about" />
                </div>
                <div className="right">
                    <h2 className="main_heading">About Our Company</h2>
                    <Tab data={data}/>
                </div>
            </div>
        </div>
        </div>
    )
}
export default About;