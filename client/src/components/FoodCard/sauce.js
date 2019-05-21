import React from "react";

function FoodCardSauce(props) {
    return (
        <div>
            <span className="menu-title">{props.name}</span>
            <span className="float-right">
                {props.description}
            </span> <br />
        </div >
    );
}

export default FoodCardSauce;
