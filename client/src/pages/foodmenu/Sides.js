import React from 'react';
import foods from '../../food.json';
import FoodCard from '../../components/FoodCard';

function Sides () {
    return (
        <div>
            <h2 className="menu-header">Sides</h2>

            {foods[3].items.map((item, index) => (
                <div key={index}>
                    <FoodCard
                        name={item.name}
                        price={item.price}
                        description={item.description}
                    />
                </div>
            ))}
        </div>
    );
}

export default Sides;