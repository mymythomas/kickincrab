import React from 'react';
import foods from '../../food.json';
import FoodCard from '../../components/FoodCard';

function SeafoodOnAPlate () {
    return (
        <div>
            <h1>Sides</h1>

            {foods[2].items.map((item, index) => (
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

export default SeafoodOnAPlate;