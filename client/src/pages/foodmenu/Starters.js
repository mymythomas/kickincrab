import React from 'react';
import foods from '../../food.json';
import FoodCard from '../../components/FoodCard';

<<<<<<< HEAD
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
=======
function Starters () {
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
>>>>>>> 72c70ca6b0008b07f269d689b5d2e298b3b46b06
}

export default Starters;