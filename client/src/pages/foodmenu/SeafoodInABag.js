import React from 'react';
import foods from '../../food.json';
import FoodCard from '../../components/FoodCard';
import FoodCardSauce from '../../components/FoodCard/sauce';

function SeafoodInABag() {
    return (
        <div className="row">

            <div className="col-6">
                <h3 className="menu-header">{foods[5].type}</h3>
                {foods[5].items.map((item, index) => (
                    <div key={index}>
                        <FoodCard
                            name={item.name}
                            price={item.price}
                        // description={item.description}
                        />
                    </div>
                ))}
            </div>

            <div className="col-6">
                <h3 className="menu-header">{foods[7].type}</h3>
                {foods[7].flavors.map((flavor, index) => (
                    <div key={index}>
                        <FoodCardSauce
                            name={flavor.name}
                            description={flavor.description}
                        />
                    </div>
                ))}

                <br /><br />

                <h3 className="menu-header">{foods[6].type}</h3>
                {foods[6].items.map((item, index) => (
                    <div key={index}>
                        <FoodCard
                            name={item.name}
                            price={item.price}
                        />
                        </div>
                ))}
            </div>
        </div>
    );
}

export default SeafoodInABag;