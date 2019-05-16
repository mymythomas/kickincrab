import React from 'react';
const axios = require("axios");

class Customer extends React.Component {
    state = {
        numInParty: "",
        email: "",
        name: "",
        phoneNum: "",
        reservationTime: "",
        availableTime: ["12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM"]
    }

    handleSubmit = event => {
        event.preventDefault();
        axios.post('/api/reservation', this.state).then(function (req, res) {
        })
        this.setState({
            name: "",
            phoneNum:"",
            reservationTime: "",
            numInParty: "",
            email: ""
        });
    }

    handleReservation = data => event => {
        event.preventDefault();
        console.log(data);
        this.setState({reservationTime: data});

    }

    handleInputChange = key => event => {
        if (key === "phoneNum" && event.target.value <= 1) {
            return this.setState({
                [key]: event.target.value
            });
        };
        if (key === "phoneNum" && !/^\d+$/.test(event.target.value)) return;
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
                        <label htmlFor="name">Name to hold Reservation: </label>
                        <input value={this.state.name} onChange={this.handleInputChange('name')} className="name" type="name" name="name" placeholder="Name"></input><br></br>

                        <div id="avail-time-btn">
                            <p>Available Reservation Times: </p>
                            {availableTime}
                        </div>
                        <label htmlFor="numInParty"># of people in your party. (Please include children and babies as they ALSO FUCKINGG TAKE SPACE)</label>
                        <input type="text" maxLength="2" style={{width: '27px'}} value={this.state.numInParty} onChange={this.handleInputChange('numInParty')}></input> <br></br>

                        <label htmlFor="phone">Phone #: </label>
                        <input onChange={this.handleInputChange('phoneNum')} className="phone" value={this.state.phoneNum} type="tel" maxLength="10" name="phone"></input><br></br>

                        <label htmlFor="email">Email: </label>
                        <input onChange={this.handleInputChange('email')} style={{width: '200px'}} className="email" value={this.state.email} type="email" name="email"></input><br></br>

                        <button onClick={this.handleSubmit} className="submit-btn">Submit</button>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}

export default Customer;