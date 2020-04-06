import React, { Component } from 'react'
import {Card, Form, Button, Col} from 'react-bootstrap'
import axios from 'axios';

export default class Adduser extends Component {

	constructor(props){
		super(props);
		this.state={username:''};
		this.userChange = this.userChange.bind(this);
		this.submitUser = this.submitUser.bind(this);
	}

	submitUser(event) {
		alert(this.state.username);
		event.preventDefault();

		const user = {
			name: this.state.username
		};

		axios.get("http://localhost:8080/adduser", {params: user}, { headers: {
        'Access-Control-Allow-Origin': '*', 
        'Access-Control-Allow-Methods': 'POST, PATCH, PUT, DELETE, OPTIONS',
    	'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
    	'Access-Control-Allow-Credentials': true}},
    	{withCredentials: true},
    	{crossorigin: true})
    	.then(response => {
    		console.log(response);
    	});
	}

	userChange(event){
		this.setState({
			[event.target.name]:event.target.value
		});
	}

	render () {
		return (
			<Card className={"border border-dark bg-dark text-white"}>
				<Card.Header>Add User</Card.Header>
					<Form onSubmit={this.submitUser} id="bookFormId">
						<Card.Body>
							  <Form.Row>
							  	<Form.Group as={Col} controlId="formGridTitle">
							  	  <Form.Label>User Name</Form.Label>
							  	  <Form.Control required
							  	  	type="text" name="username"
							  	  	value={this.state.name}
							  	  	onChange={this.userChange}
							  	  	className={"bg-dark text-white"}
							  	  	placeholder="Enter User Name" />
							  	</Form.Group>
							  </Form.Row>
						
						</Card.Body>
						<Card.Footer style={{"textAlign":"right"}}>
							<Button size="sm" variant="success" type="submit">
							  Submit
							</Button>
						</Card.Footer>
					</Form>
			</Card>
		);
	}
}