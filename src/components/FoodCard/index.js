import React from "react";

function FoodCard(props) {
    return (
        <div className="card">
        {console.log(props)}
        <h2>{props.type}</h2>
            <h4>{props.name}</h4>
            {props.price} <br />
            {props.description} <br />
        </div>
    );
}

export default FoodCard;
