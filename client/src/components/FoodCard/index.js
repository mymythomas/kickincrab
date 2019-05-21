import React from "react";

function FoodCard(props) {
    return (
        <div>
            <span className="menu-title">{props.name}</span>
            <span className="float-right">
                {props.price ? '$' : 'Market Price'}{props.price}
            </span> <br />
            <p>
                {props.description}
            </p> 
            <hr />
        </div>
    );
}

export default FoodCard;
