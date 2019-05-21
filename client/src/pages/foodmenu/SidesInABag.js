import React from 'react';
import foods from '../../food.json';
import FoodCard from '../../components/FoodCard';

function SidesInABag() {
    return (
        <div>
            <h1 className="menu-header">{foods[6].type}</h1>
            {foods[6].items.map((item, index) => (
                <div key={index}>
                    <FoodCard
                        name={item.name}
                        price={item.price}
                    />
                </div>
            ))}
        </div>
    );
}

export default SidesInABag;