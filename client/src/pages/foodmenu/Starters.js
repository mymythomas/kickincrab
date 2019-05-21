import React from 'react';
import foods from '../../food.json';
import FoodCard from '../../components/FoodCard';

function Starters () {
    return (
        <div className="col-6">
            <h2 className="menu-header">{foods[0].type}</h2>

            {foods[0].items.map((item, index) => (
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

export default Starters;