import React from 'react';
import Starters from "./foodmenu/Starters";
import Soups from "./foodmenu/Soups";
import SeafoodOnAPlate from "./foodmenu/SeafoodOnAPlate";
import SeafoodInABag from "./foodmenu/SeafoodInABag";
import ComboDeals from "./foodmenu/ComboDeals";
import Sides from "./foodmenu/Sides";
import "./style.css";

function Menu() {
    return (
        <div>
            <h1 className="text-center">Menu</h1>
            <div className="row">
                <Starters />
                <div className="col-6">
                    <Soups />
                    <SeafoodOnAPlate />
                    <Sides />
                </div>
            </div>

            <SeafoodInABag />
            <ComboDeals />
        </div>
    )
}

export default Menu;