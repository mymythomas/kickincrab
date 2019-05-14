import React from 'react';
import foods from '../../food.json';
import FoodCard from '../../components/FoodCard';

class Starters extends React.Component {
    state = {
        foods
    };

    // render() {
    //     return (
    //         <div>
    //             <h1>Starters</h1>
    //             {console.log(foods[0].starters)}
    //             {this.state.foods.map(starter => (
    //                 <FoodCard
    //                     // key={food.starters.id}
    //                     name={starter.name}
    //                     price={starter.price}
    //                     description={starter.description}
    //                 />
    //             ))}
    //         </div>

    //     );
    // }

    render() {
        return (
            <div>
                <h1>Starters</h1>
                
                {this.state.foods.map((food, index) => (
                    <div key={index}>
                        {food.items.map((item, i) => (
                            <div key={i}>
                                <FoodCard
                                    name={item.name}
                                    price={item.price}
                                    description={item.description}
                                />
                            </div>
                        ))}
                    </div>
                ))}
            </div>

        );
    }

    // render() {
    //     const starters = Object.keys(this.state.foods).filter(function(key) {
    //         return this.state.foods[key] === "starters";
    //     }).map(function (key) {
    //         return this.state.foods[key];
    //     })
    //     console.log(starters)
    //     return (
    //         <div>
    //             <h1>Starters</h1>
                
    //         </div>

    //     );
    // }


}

export default Starters;