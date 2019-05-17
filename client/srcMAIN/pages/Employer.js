import React, { Component } from 'react';
import EmployerPage from '../components/EmployerPage';
import { getProfile } from '../components/UserFunction'

// encoding the base 64 token that we saved inside the localStorage
import jwt_decode from 'jwt-decode';


class Employer extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
        }
    }

    // getting the value of the localStorage user token
    // we then decode it and then assign it to the state
    componentDidMount() {
        const token = localStorage.usertoken
        console.log(JSON.stringify(token));
        getProfile(token).then(res => {
          this.setState({
            username: res.username
          })
        })
      }

    render() {
        return (
            <div>
                <h1>Reservation Information</h1>
                <h4>Welcome back {this.state.username}</h4>
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
        )
    }
}

export default Employer;