import React from "react";
import '../index.css';

const Cardone = () => {
    return (
        <div className="wrapper">
            <div className="card">
                <img src="img\Forma 1.png" alt="Different theme option" />
                <p className="card_txt">Different theme option</p>
            </div>
            <div className="card">
                <img src="img\Forma 1 (1).png" alt="fully customizable " />
                <p className="card_txt">fully customizable </p>
            </div>
            <div className="card">
                <img src="img\Forma 1 (2).png" alt="unlimited support" />
                <p className="card_txt">unlimited support</p>
            </div>
            <div className="card">
                <img src="img\Forma 1@2x.png" alt="responsive all device " />
                <p className="card_txt">responsive all device </p>
            </div>
        </div>
    );
}
export default Cardone;

