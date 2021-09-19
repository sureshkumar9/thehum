import React from "react";
import '../index.css';

const data = []
  function Tab(props){
    
    const [visibleTab, setVisibleTab] = React.useState(props.data[0].id)
  
    const listTitles = props.data.map((item) => 
        <li onClick={() => setVisibleTab(item.id)} className={visibleTab === item.id ? "tab-title tab-title--active" : "tab-title"}>{item.tabTitle}</li>
    )       
                                     
    const listContent = props.data.map((item) => 
        <p style={visibleTab === item.id ? {} : {display: 'none'}}>{item.tabContent}</p>
    )
    
    return(
        <div className="tabs spaceone">
          <ul className="tabs-titles">
            {listTitles}
          </ul>
          <div className="tab-content">
             {listContent}
          </div>
        </div>
      )
  }
  export default Tab;