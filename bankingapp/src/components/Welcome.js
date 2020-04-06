import React, { Component } from 'react'
import {Jumbotron} from 'react-bootstrap';

export default class Welcome extends Component {
	render () {
		return (
			<Jumbotron className="bg-dark text-white">
				  <h1>Welcome to Banking</h1>
				  <p>
				    Sample REST API based Banking Application
				  </p>
			</Jumbotron>
		)
	}
}