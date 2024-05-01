import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
const style = {
    margin: 15,
    marginLeft: 600
};
export default class Register extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(e) {
        e.preventDefault();
        var self = this;
        var data = new FormData();
        const payload = {
            id: 111,
            studentName: 'param',
            age: 24,
            emailId: 2
        };
        data.append("myjsonkey", JSON.stringify(payload));

        axios('http://localhost:8083/students', {
            method: 'POST',
            body: data,
            headers: {
                // 'Authorization': `bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
            .then(function (response) {
                return response.json()
            }).then(function (body) {
                console.log(body);
            });
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div style={style}>
                    <TextField ref='id'
                        hintText="Enter Student id"
                        floatingLabelText="id"
                    />
                    <br />
                    <TextField ref='sname'
                        hintText="Enter your Last Name"
                        floatingLabelText="StudentName"
                    />
                    <br />
                    <TextField ref='age'
                        hintText="Enter your Age"
                        floatingLabelText="age"
                    />
                    <br />

                    <TextField ref='emailId'
                        hintText="Enter your Email"
                        floatingLabelText="emailId"
                    />
                    <br />
                    <br />
                    <input type="submit" />


                </div>
            </form>


        );
    }


}