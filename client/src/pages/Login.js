import React from 'react';
import { Card, Badge, InputGroup } from 'react-bootstrap';
import { userService } from '../components/_services';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        userService.logout();

        this.state = {
            username: '',
            password: '',
            submitted: false,
            error: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({
            submitted: true
        });

        // stop here if form is invalid
        if (!(this.state.username && this.state.password)) {
            return;
        }


        userService.login(this.state.username, this.state.password)
            .then(
                user => {
                    const { from } = this.props.location.state || { from: { pathname: "/employer" } };
                    this.props.history.push(from);
                },
                error => this.setState({
                    error,
                    loading: false
                })
            );
    }

    render() {
        return (
            <div style={{ padding: "20px" }}>
                <div className="row">
                    <div className="col-5">
                        <Card bg="light" style={{ width: '25rem' }}>
                            <h1 style={{ position: "relative", left: "10px", top: "-25px" }}><Badge variant="dark"><i class="fas fa-user-lock"></i> Login</Badge></h1>
                            <Card.Body>

                                <form name="form" onSubmit={this.handleSubmit}>


                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <h2><i className="far fa-envelope">: </i></h2>
                                        </InputGroup.Prepend>

                                        <input
                                            type="text"
                                            className="form-control"
                                            name="username"
                                            placeholder="Enter Username Here"
                                            value={this.state.username}
                                            onChange={this.handleChange}
                                        />
                                    </InputGroup> <br />

                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <h2><i class="fas fa-lock"> </i></h2>
                                        </InputGroup.Prepend>

                                        <input
                                            type="password"
                                            className="form-control"
                                            name="password"
                                            placeholder="Enter Password Here"
                                            value={this.state.password}
                                            onChange={this.handleChange}
                                        />
                                    </InputGroup> <br />

                                    <InputGroup>
                                        <button className="btn btn-dark loginbtn">Login</button>
                                    </InputGroup>

                                </form>

                            </Card.Body>
                        </Card>

                    </div>

                    <div className="col-7">

                        <div className="alerts" style={{ padding: "20px" }}>
                            {this.state.submitted && !this.state.username &&
                                <div className={'alert alert-danger'}>Username is required</div>
                            }
                            {this.state.submitted && !this.state.password &&
                                <div className={'alert alert-danger'}>Password is required</div>
                            }

                            {this.state.error &&
                                <div className={'alert alert-danger'}>{this.state.error}</div>
                            }

                        </div>


                    </div>



                </div>

            </div>
        );
    }
}

export default LoginPage;