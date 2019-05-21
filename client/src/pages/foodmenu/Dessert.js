import React from 'react';
import foods from '../../food.json';
import FoodCard from '../../components/FoodCard';

function Dessert () {
    return (
        <div>
            <h2 className="menu-header">Dessert</h2>
            {foods[4].items.map((item, index) => (
                <div key={index}>
                    <FoodCard
                        name={item.name}
                        price={item.price}
                        // description={item.description}
                    />
                </div>
            ))}
        </div>
    );
}

export default Dessert;