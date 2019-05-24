import React from 'react';
import Scroller from '../components/Scroller/index'

function Home() {
    return (
        <React.Fragment>
            <Scroller />
            <div class="container">
            <div className="row">
                <div className="col-8 aboutus">
                    <h2 class="titleHeader">About Us</h2>
                    <p>
                        We are a company that overcharges rice and corn. Our policy states that if you are a party of 8 or more we WILL add a service charge to your bill. Why? Cause we want to... If you have a complaint please file it to info@kickincrab.com.
                    </p>
                    <p>
                        It ain't working. Random words here. I like tacos. We charge for refills now.
                        
                        RANDOM TEXT RANDOM TEXT RANDOM TEXT RANDOM TEXT RANDOM TEXT RANDOM TEXT RANDOM TEXT RANDOM TEXT RANDOM TEXT RANDOM TEXT RANDOM TEXT RANDOM TEXT RANDOM TEXT RANDOM TEXT RANDOM TEXT RANDOM TEXT RANDOM TEXT RANDOM TEXT RANDOM TEXT RANDOM TEXT RANDOM TEXT RANDOM TEXT RANDOM TEXT RANDOM TEXT RANDOM TEXT RANDOM TEXT RANDOM TEXT RANDOM TEXT RANDOM TEXT RANDOM TEXT RANDOM TEXT RANDOM TEXT RANDOM TEXT RANDOM TEXT RANDOM TEXT RANDOM TEXT RANDOM TEXT RANDOM TEXT 
                    </p>
                </div>
                <div className="col-4 navigation">
                    <h2 class="titleHeader">Navigation</h2>
                    <a href="/home">
                        <div class="btn sideNavBtn"><i class="fas fa-home"></i> Home</div>
                    </a>
                    <a href="/menu">
                        <div class="btn sideNavBtn"><i class="fas fa-fish"></i> Menu</div>
                    </a>
                    <a href="/locations">
                        <div class="btn sideNavBtn"><i class="fas fa-location-arrow"></i> Locations</div>
                    </a>
                    <a href="/reservation">
                        <div class="btn sideNavBtn"><i class="fas fa-calendar"></i> Make a Reservation</div>
                    </a>
                </div>
            </div>
            </div>    
        </React.Fragment>
    )
}

export default Home;