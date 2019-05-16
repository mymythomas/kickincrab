import React from 'react';
const axios = require("axios");

class Customer extends React.Component {
    state = {
        name: "",
        phoneNum: "",
        reservationTime: "",
        availableTime: ["12:00", "12:30", "1:00", "1:30", "2:00", "2:30", "3:00", "3:30", "4:00", "4:30", "5:00", "5:30", "6:00", "6:30", "7:00", "7:30", "8:00", "8:30", "9:00"]
    }

    handleSubmit = event => {
        event.preventDefault();
        axios.post('/api/reservation', this.state).then(function (req, res) {
            console.log(req);
            console.log(res);
        })
    }

    handleReservation = data => event => {
        event.preventDefault();
        console.log(data);
        this.setState({reservationTime: data});

    }

    handleInputChange = key => event => {
        console.log(/\d/.test(event.target.value))
        if (key === "phoneNum" && event.target.value === isNaN) return;
        this.setState({
            [key]: event.target.value
        });
    }

    render() {

        const availableTime = this.state.availableTime.map(data => {
            return (<button key={data} style={this.state.reservationTime === data ? {backgroundColor: 'green'}:{backgroundColor: 'pink'}} data-time={data} onClick={this.handleReservation(data)}>{data}</button>)
        })

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

                        <div id="avail-time-btn">
                            {availableTime}
                        </div>

                        <label htmlFor="phone">Phone #</label>
                        <input onChange={this.handleInputChange('phoneNum')} className="phone" value={this.state.phoneNum} type="tel" maxLength="9" name="phone"></input><br></br>

                        <button onClick={this.handleSubmit} className="submit-btn">Submit</button>
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