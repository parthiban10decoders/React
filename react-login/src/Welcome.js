import React, { Component } from 'react';
import Login from './Login';

export default class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Emails: "",
            Passwords: ""
        }

    }

    componentDidMount(){
        console.log('this.prop----->>>',this.props.location.state.hhh,this.props.location.state.kkk)

    }

    componentDidUpdate(){
        console.log('this.prop---33-->>>',this.props.state)


    }

    render() {
        return (
            <div>
                <h1>Login details</h1>
                <form>
                    <label>User Name:   {this.props.location.state.hhh}</label>
                    <br />
                    <label>Password:   {this.props.location.state.kkk}</label>

                </form>
            </div>


        )
    }
}