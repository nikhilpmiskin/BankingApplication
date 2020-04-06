import React, { Component } from 'react'
import {Card, Form, Button, Col} from 'react-bootstrap'
import axios from 'axios';

export default class Deposit extends Component {

	constructor(props){
		super(props);
		this.state={accountId:'', amount:''};
		this.depositChange = this.depositChange.bind(this);
		this.submitDeposit = this.submitDeposit.bind(this);
	}

	submitDeposit(event) {
		event.preventDefault();

		const deposit = {
			accountId: this.state.accountId,
			amount: this.state.amount
		};

		axios.get("http://localhost:8080/depositmoney", {params: deposit}, { headers: {
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

	depositChange(event){
		this.setState({
			[event.target.name]:event.target.value
		});
	}

	render () {
		return (
			<Card className={"border border-dark bg-dark text-white"}>
				<Card.Header>Deposit Form</Card.Header>
					<Form onSubmit={this.submitDeposit} id="depositFormId">
						<Card.Body>
							  <Form.Row>
							  	<Form.Group as={Col} controlId="formGridTitle">
							  	  <Form.Label>Account Id</Form.Label>
							  	  <Form.Control required
							  	  	type="text" name="accountId"
							  	  	value={this.state.accountId}
							  	  	onChange={this.depositChange}
							  	  	className={"bg-dark text-white"}
							  	  	placeholder="Enter Account Id" />
							  	  <Form.Label>Amount</Form.Label>
							  	  <Form.Control required
							  	  	type="number" name="amount"
							  	  	value={this.state.amount}
							  	  	onChange={this.depositChange}
							  	  	className={"bg-dark text-white"}
							  	  	placeholder="Enter Amount" />
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