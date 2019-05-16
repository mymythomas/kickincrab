import React from 'react';

class Customer extends React.Component {
    state = {
        name: "",
        phoneNum: "",
        time: ""
    }

    handleInputChange = key => event => {
        event.preventDefault();
        this.setState({
            [key]: event.target.value
        });
        console.log(this.state);
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <h1>Customer</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque velit, lobortis ut magna
                    varius, blandit rhoncus sem. Morbi lacinia nisi ac dui fermentum, sed luctus urna tincidunt.
                    Etiam ut feugiat ex. Cras non risus mi. Curabitur mattis rutrum ipsum, ut aliquet urna
                    imperdiet ac. Sed nec nulla aliquam, bibendum odio eget, vestibulum tortor. Cras rutrum
                    ligula in tincidunt commodo. Morbi sit amet mollis orci, in tristique ex. Donec nec ornare
                    elit. Donec blandit est sed risus feugiat porttitor. Vestibulum molestie hendrerit massa non
                    consequat. Vestibulum vitae lorem tortor. In elementum ultricies tempus. Interdum et
                    malesuada fames ac ante ipsum primis in faucibus.
            </p>
                </div>
                <div id="reservation">
                    <form id="reservationForm">
                        <label htmlFor="name">Name to hold Reservation</label>
                        <input onChange={this.handleInputChange('name')} className="name" type="name" name="name" placeholder="Name"></input><br></br>

                        <label htmlFor="time">Time of Reservation</label>
                        <input onChange={this.handleInputChange('time')} className="time" type="time" placeholder="12:00" name="time" step="900"></input><br></br>

                        <label htmlFor="phone">Phone #</label>
                        <input onChange={this.handleInputChange('phoneNum')} className="phone" type="tel" maxLength="9" name="phone" min='12:00' max='21:00'></input><br></br>

                        <button className="submit-btn">Submit</button>
                    </form>
                </div>

                {/* {document.addEventListener('click', function (event) {
                    if (!event.target.matches('.submit-btn')) return;
                    event.preventDefault();
                    const reservation = {
                        name: this.getElementsByClassName('name')[0].value,
                        time: this.getElementsByClassName('time')[0].value,
                        phoneNum: this.getElementsByClassName('phone')[0].value
                    }
                    console.log(reservation);
                }, false)} */}
            </React.Fragment>
        )
    }
}

export default Customer;