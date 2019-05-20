import React from 'react';
import foods from '../../food.json';
import FoodCard from '../../components/FoodCard';

function SeafoodOnAPlate () {
    return (
        <div>
            <br /><br />
            <h1>Seafood On A Plate</h1>

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