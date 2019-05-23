import React from 'react';
const axios = require("axios");

class Reservation extends React.Component {
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
        // This function will map over all available time to make a reservation and add a new key value to each one to show if the time slot is taken or not after grabbing what time slow has been taken from our database.
        const stateChanger = this;
        let availableTimeArr = ["12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM"];
        axios.get('/api/allreservations').then(function (results) {
            let data = results.data;
            let currentReservation = [];
            for (let i = 0; i < data.length; i++) {
                currentReservation.push(data[i].reservationTime);
            }
            const filteredArray = availableTimeArr.map(function (x) {
                if (currentReservation.includes(x)) {
                    return {
                        time: x,
                        taken: true
                    }
                }
                return {
                    time: x,
                    taken: false
                }
            });
            stateChanger.setState({
                availableTime: filteredArray
            })
        })
    }

    handleTakenReservation = event => {
        event.preventDefault();
        alert("Reservation Taken");
    }

    handleSubmit = event => {
        event.preventDefault();
        // Create a post method to pass this.state to our server which will process it and add the information to the database AND use req.body.email to send an email containing information about the reservation. Also checks to see if the party is 8 or greater and adds a snipbit at the bottom explaining SC and split checks.
        axios.post('/api/reservation', this.state).then(function (req, res) {
        })

        let availableTimeArr = this.state.availableTime;
        let currentReservation = this.state.reservationTime;
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
        window.location.reload();
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

        // Maps over the availableTime array and creates a button for each available time. With each button it checks to see in the database if the timeslot is taken and provide a class category accordingly. Also it will have a different onClick method to let the user know that the reservation is taken or not.
        const availableTime = this.state.availableTime.map(data => {
            return (<button
                className={data.taken === true ? "takenTime btn btn-danger" : (this.state.reservationTime === data.time ? "selectedTime btn btn-danger" : "btn btn-danger")}
                key={data.time}
                onClick={data.taken === false ? this.handleReservation(data.time) : this.handleTakenReservation}
            >
                {data.time}</button>)
        })

        return (
            <div className="container">
                <div>
                    <h1 style={{ textAlign: "center" }}><strong>Make A Reservation!</strong></h1>
                    <p>
                        Please fill out the information below to make a reservation. Please note that any parties with 8 or more people will have an automatic 18% service charge added to their bill. Please speak with your server for more information.
                    </p>
                </div>

                {/* Form to make reservation */}
                <div id="reservation">
                    <form id="reservationForm">
                        <div className="centering">
                            <strong>Name to hold Reservation: </strong> <br></br>
                            <input
                                value={this.state.name}
                                onChange={this.handleInputChange('name')}
                                className="name"
                                type="name"
                                name="name"
                            >
                            </input><br></br>
                        </div>

                        <div className="centering">
                            <div id="avail-time-btn">
                                <strong>Available Reservation Times:</strong> <br></br>
                                {availableTime}
                            </div>
                        </div>

                        <div className="centering">
                            <strong htmlFor="numInParty"># of people in your party.</strong> <br></br>
                            <input
                                type="text"
                                maxLength="2"
                                style={{ width: '25px' }}
                                value={this.state.numInParty}
                                onChange={this.handleInputChange('numInParty')}
                            >
                            </input> <br></br>
                        </div>

                        <div className="centering">
                            <strong htmlFor="phone">Phone #: </strong> <br></br>
                            <input
                                onChange={this.handleInputChange('phoneNum')}
                                className="phone"
                                value={this.state.phoneNum}
                                type="tel"
                                maxLength="10"
                                name="phone"
                            >
                            </input><br></br>
                        </div>

                        <div className="centering">
                            <strong htmlFor="email">Email: </strong> <br></br>
                            <input
                                onChange={this.handleInputChange('email')}
                                style={{ width: '200px' }}
                                className="email"
                                value={this.state.email}
                                type="email"
                                name="email"
                            >
                            </input><br></br>
                        </div>

                        <div className="centering">
                            <button onClick={this.handleSubmit} className="btn btn-danger">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Reservation;