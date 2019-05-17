import React from 'react';
const axios = require("axios");

class Customer extends React.Component {
    state = {
        numInParty: "",
        email: "",
        name: "",
        phoneNum: "",
        reservationTime: "",
        // Sets a default array of all available times to make reservation. Later will have another array in the state that compares itself to this array below and render according to what is missing.
        currentReservation: [],
        availableTime: []
    }

    componentDidMount() {
        const stateChanger = this;
        let availableTimeArr = ["12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM"];
        axios.get('/api/allreservations').then(function (results) {
            let data = results.data;
            let currentReservation = [];
            for (let i = 0; i < data.length; i++) {
                currentReservation.push(data[i].reservationTime);
            }
            const filteredArray = availableTimeArr.filter(function (x) {
                return currentReservation.indexOf(x) < 0;
            });
            stateChanger.setState({
                availableTime: filteredArray
            })
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        // Create a post method to pass this.state to our server which will process it and add the information to the database AND use req.body.email to send an email containing information about the reservation. Also checks to see if the party is 8 or greater and adds a snipbit at the bottom explaining SC and split checks.
        axios.post('/api/reservation', this.state).then(function (req, res) {
        })

        let availableTimeArr = this.state.availableTime;
        let currentReservation = this.state.reservationTime
        console.log(currentReservation)
        console.log(availableTimeArr)
        for (var i = availableTimeArr.length - 1; i >= 0; i--) {
            if (availableTimeArr[i] === currentReservation) {
                availableTimeArr.splice(i, 1);
            }
        }

        this.setState({
            name: "",
            phoneNum: "",
            reservationTime: "",
            numInParty: "",
            email: "",
            availableTime: availableTimeArr
        });
        console.log(this.state.availableTime);
    }

    handleReservation = data => event => {
        event.preventDefault();
        this.setState({ reservationTime: data });
    }

    // Handles all input change. Depending on the input it will validate accordingly. Key is the parameter passed when the function is called and is linked to the key of the state.
    handleInputChange = key => event => {
        if (key === "phoneNum" && event.target.value <= 1) {
            return this.setState({
                [key]: event.target.value
            });
        };
        // The RegEx checks if ANY non number is inputed and stops the rest of the function from executing thus preventing the user from inputing anything but a number for phone number
        if (key === "phoneNum" && !/^\d+$/.test(event.target.value)) return;
        this.setState({
            [key]: event.target.value
        });
    }

    render() {

        // Maps over array of available reservation time and return an array of buttons that will set state to the desired reservation time. Currently active reservation time will render green when clicked on
        const availableTime = this.state.availableTime.map(data => {
            return (<button
                key={data}
                style={this.state.reservationTime === data ? { backgroundColor: 'green' } : { backgroundColor: 'pink' }}
                data-time={data}
                onClick={this.handleReservation(data)}
            >
                {data}</button>)
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

                {/* Form to make reservation */}
                <div id="reservation">
                    <form id="reservationForm">
                        <label htmlFor="name">Name to hold Reservation: </label>
                        <input
                            value={this.state.name}
                            onChange={this.handleInputChange('name')}
                            className="name"
                            type="name"
                            name="name"
                            placeholder="Name"
                        >
                        </input><br></br>

                        <div id="avail-time-btn">
                            <p>Available Reservation Times: </p>
                            {availableTime}
                        </div>

                        <label htmlFor="numInParty"># of people in your party. (Please include children and babies as they ALSO FUCKING TAKE SPACE)</label>
                        <input
                            type="text"
                            maxLength="2"
                            style={{ width: '25px' }}
                            value={this.state.numInParty}
                            onChange={this.handleInputChange('numInParty')}
                        >
                        </input> <br></br>

                        <label htmlFor="phone">Phone #: </label>
                        <input
                            onChange={this.handleInputChange('phoneNum')}
                            className="phone"
                            value={this.state.phoneNum}
                            type="tel"
                            maxLength="10"
                            name="phone"
                        >
                        </input><br></br>

                        <label htmlFor="email">Email: </label>
                        <input
                            onChange={this.handleInputChange('email')}
                            style={{ width: '200px' }}
                            className="email"
                            value={this.state.email}
                            type="email"
                            name="email"
                        >
                        </input><br></br>

                        <button onClick={this.handleSubmit} className="submit-btn">Submit</button>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}

export default Customer;