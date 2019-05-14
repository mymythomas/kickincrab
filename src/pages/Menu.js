import React from 'react';
import { Link, Route } from "react-router-dom";
import { Nav } from 'react-bootstrap';
import Starters from "./foodmenu/Starters";
import Soups from "./foodmenu/Soups";
import SeafoodOnAPlate from "./foodmenu/SeafoodOnAPlate";
import SeafoodInABag from "./foodmenu/SeafoodInABag";
import ComboDeals from "./foodmenu/ComboDeals";
import Sides from "./foodmenu/Sides";
import "./style.css";

function Menu(props) {
    return (
        <div>
            <h1 className="text-center">Menu</h1>

            <Nav className="justify-content-center">
                <Nav.Item>
                    <Link className="food-menu" to={`${props.match.url}/starters`}>Starters</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link className="food-menu" to={`${props.match.url}/soups`}>Soups</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link className="food-menu" to={`${props.match.url}/sides`}>Sides</Link>
                </Nav.Item>
            </Nav>
            <Nav className="justify-content-center">
                <Nav.Item>
                    <Link className="food-menu" to={`${props.match.url}/seafoodonaplate`}>Seafood on the Plate</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link className="food-menu" to={`${props.match.url}/seafoodinabag`}>Seafood in a Bag</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link className="food-menu" to={`${props.match.url}/combodeals`}>Combo Deals</Link>
                </Nav.Item>
            </Nav>
            <Route exact path={`${props.match.url}/starters`} component={Starters} />
            <Route exact path={`${props.match.url}/soups`} component={Soups} />
            <Route exact path={`${props.match.url}/seafoodonaplate`} component={SeafoodOnAPlate} />
            <Route exact path={`${props.match.url}/seafoodinabag`} component={SeafoodInABag} />
            <Route exact path={`${props.match.url}/combodeals`} component={ComboDeals} />
            <Route exact path={`${props.match.url}/sides`} component={Sides} />
        </div>
    )
}

export default Menu;