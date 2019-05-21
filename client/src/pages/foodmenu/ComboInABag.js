import React from 'react';
import foods from '../../food.json';
import FoodCard from '../../components/FoodCard/combo';

function ComboInABag () {
    return (
        <div>
            {foods[8].items.map((item, index) => (
                <div key={index}>
                    <FoodCard
                        name={item.name}
                        premium={item.premium}
                        seafood={item.seafood}
                        includes={item.includes}
                    />
                </div>
            ))}

        </div>
    )
}

export default ComboInABag;