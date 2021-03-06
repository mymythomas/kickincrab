import React from 'react';
import Starters from "./foodmenu/Starters";
import Soups from "./foodmenu/Soups";
import Dessert from "./foodmenu/Dessert";
import SeafoodOnAPlate from "./foodmenu/SeafoodOnAPlate";
import SeafoodInABag from "./foodmenu/SeafoodInABag";
// import SidesInABag from "./foodmenu/SidesInABag";
// import SauceInABag from "./foodmenu/SauceInABag";
import ComboInABag from "./foodmenu/ComboInABag";
import Sides from "./foodmenu/Sides";
import "./style.css";

function Menu() {
    return (
        <div style={{padding: "20px"}}>
            <div className="row">
                <Starters />
                <div className="col-6">
                    <Soups /> < br />< br />
                    <SeafoodOnAPlate /> < br />< br />
                    <Sides /> < br />< br />
                    <Dessert />
                </div> 
            </div> < br />< br />
            <hr />
            <h1 className="menu-header text-center">Seafood In A Bag</h1> <br />
            <SeafoodInABag />
            <h1 className="menu-header text-center">Combo In A Bag</h1> <br />
            <ComboInABag />
        </div>
    )
}

export default Menu;