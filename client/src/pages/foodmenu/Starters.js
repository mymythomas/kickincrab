import React from 'react';
import foods from '../../food.json';
import FoodCard from '../../components/FoodCard';

class Starters extends React.Component {
    render() {
        return (
            <div>
                <h1>Starters</h1>

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
}

export default Starters;