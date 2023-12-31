import React, { Component } from 'react'
import './Form.css'

export default class Form extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            phone: '',
            guests: ''
        }
    }

    usernameHandler(event) {
        this.setState({
            username: event.target.value
        });
    }

    numberHandler(event) {
        this.setState({
            phone: event.target.value
        });
    }

    countGuestsHandler(event) {
        this.setState({
            guests: event.target.value
        });
    }

    submitHandler(event) {
        event.preventDefault()
        if (this.state.username.length == 0) {
            alert('Enter Your UserName');

        } else if (this.state.phone.length == 0 || this.state.phone.length != 11) {
            alert('Enter Your Phone Number');

        } else if (this.state.guests.length == 0) {
            alert('Enter Your Guests Number');

        } else {
            alert('Your request has been registered');
        }
    }

    render() {
        return (
            <div className='form-box'>
                <h4 className='form-title'>Book A Table</h4>
                <form className='form' action="" onSubmit={(event) => this.submitHandler(event)}>
                    <input type="text" value={this.state.username} onChange={(event) => this.usernameHandler(event)} name="username" id="username" className='input' placeholder='Enter Your Name' />
                    <input type="text" value={this.state.phone} onChange={(event) => this.numberHandler(event)} name="phone" id="phone" className='input' placeholder='Enter Your Number' />
                    <input type="number" value={this.state.guests} onChange={(event) => this.countGuestsHandler(event)} name="guests" id="guests" className='input' placeholder='How Many Guests' />
                    <input type="submit" value={'submit'} className='submit' />
                </form>
            </div>
        )
    }
}
