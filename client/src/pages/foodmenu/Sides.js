import React from 'react';
import foods from '../../food.json';
import FoodCard from '../../components/FoodCard';

function Sides () {
    return (
        <div>
                        <br /><br />
            <h1>Sides</h1>

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