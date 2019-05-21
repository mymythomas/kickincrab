import React from "react";

function FoodCardCombo(props) {
    return (
        <div className="text-center">

            <div>
                <h2 className="menu-title">{props.name} #1</h2>
                Pick 3: {props.seafood} <br />
                Includes: {props.includes} <br />
            </div>

<hr />
            <div>
            <h2 className="menu-title">{props.name} #2</h2>
                Pick 1: {props.premium} <br />
                Pick 2: {props.seafood} <br />
                Includes: {props.includes} <br />
            </div>
            <hr />
            <div>
            <h2 className="menu-title">{props.name} #3</h2>
                Pick 1: {props.premium} <br />
                Pick 3: {props.seafood} <br />
                Includes: {props.includes} <br />
            </div>

        </div>

    );
}

export default FoodCardCombo;
