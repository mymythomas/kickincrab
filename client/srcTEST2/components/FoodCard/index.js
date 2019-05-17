import React from "react";

function FoodCard(props) {
    return (
        <div className="card">
            <h4>{props.name}</h4>
            {props.price ? '$' : 'Market Price'}{props.price} <br />
            {props.description} <br />
        </div>
    );
}

export default FoodCard;
