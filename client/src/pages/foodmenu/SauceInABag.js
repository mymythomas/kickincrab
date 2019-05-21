import React from 'react';
import foods from '../../food.json';
import FoodCard from '../../components/FoodCard/sauce';

function SauceInABag() {
    return (
        <div>
            <h1>Sauce In A Bag</h1>
            {foods[7].flavors.map((flavor, index) => (
                <div key={index}>
                    <FoodCard
                        name={flavor.name}
                        description={flavor.description}
                    />
                </div>
            ))}
        </div>
    );
}

export default SauceInABag;