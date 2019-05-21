import React from 'react';
import Scroller from '../components/Scroller/index'


function Home() {
    return (
        <div>
            <Scroller />
            <div className="row">
                <div className="col-8 aboutus">
                    <h2>About Us</h2>
                    <p>
                        We are a company that overcharges rice and corn. Our policy states that if you are a party of 8 or more we WILL add a service charge to your bill. Why? Cause we want to... If you have a complaint please file it to info@kickincrab.com.
                    </p>
                    <p>
                        It ain't working. Random words here. I like tacos. We charge for refills now.
                    </p>
                </div>
                <div className="col-4 navigation">
                    <h2>Navigation</h2>
                    <a href="/menu">
                        <div style={{padding: "5px 5px 5px 5px", backgroundColor: "blue", margin: "auto"}}>Menu</div>
                    </a>
                </div>
            </div>    
        </div>
    )
}

export default Home;