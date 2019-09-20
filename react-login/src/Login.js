import React, { Component } from 'react';
import Welcome from './Welcome';
export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''

        }
    }
    handleSubmit = () => {
        const { email, password } = this.state;

        if (email === "parthi" && password === "12345") {
            this.props.history.push("/dashboard",{hhh:email,kkk:password});
        }
        else {
            alert("Invalid username or password");
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
        console.log([event.target.name], event.target.value)
    };

    // handleChange = event => {
    //     this.setState({
    //       [event.target.name] : event.target.value
    //     });
    //   };
    // onClick = () => {
    //     if()
    //     this.props.history.push("/dashboard");
    // };
    render() {
        // const { username, password } = this.state;
        // return (
        //     <div className="col-lg-12">
        //         <div className="col-lg-4"></div>
        //         <div className="col-lg-4" >
        //             <form>
        //                 <label>User Name:</label>
        //                 <input type="text" value={username}  onChange={this.handleChange} name="user" placeholder="User Name" />
        //                 <br />
        //                 <label>Password:</label>
        //                 <input type="password" value={password} onChange={this.handleChange} name="password" placeholder="Password" />
        //                 <br />
        //                 <button onClick={this.validateLogin}>
        //                     Login
        //                 </button>
        //             </form>
        //         </div>
        //         <div className="col-lg-4"></div>
        //     </div>
        // )
        const { email, password } = this.state;
        
        return (
            <div>

                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input
                        name="email"
                        type="text"
                        placeholder="Enter your email"
                        value={email}
                        onChange={this.handleChange}
                    />
                    <label htmlFor="email">Password</label>
                    <input
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={this.handleChange}
                    />
                    <button type="submit">Login</button>
                </form>
                {/* <div>
                    <Welcome Emails={Email}/>

                </div>     */}
            </div>
        );
    }
}