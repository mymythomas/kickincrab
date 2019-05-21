import React from 'react';
import foods from '../../food.json';
import FoodCard from '../../components/FoodCard';

function Soups () {
    return (
        <div>
            <h2 className="menu-header">{foods[1].type}</h2>

            {foods[1].items.map((item, index) => (
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

export default Soups;