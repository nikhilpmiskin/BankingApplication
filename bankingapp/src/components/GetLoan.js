import React, { Component } from 'react'
import {Card, Form, Button, Col} from 'react-bootstrap'
import axios from 'axios';

export default class GetLoan extends Component {

	constructor(props){
		super(props);
		this.state={userId:'', sanctionAmount:''};
		this.loanChange = this.loanChange.bind(this);
		this.submitLoan = this.submitLoan.bind(this);
	}

	submitLoan(event) {
		event.preventDefault();

		const loan = {
			userId: this.state.userId,
			sanctionAmount: this.state.sanctionAmount
		};

		axios.get("http://localhost:8080/addloan", {params: loan}, { headers: {
        'Access-Control-Allow-Origin': '*', 
        'Access-Control-Allow-Methods': 'POST, PATCH, PUT, DELETE, OPTIONS',
    	'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
    	'Access-Control-Allow-Credentials': true}},
    	{withCredentials: true},
    	{crossorigin: true})
    	.then(response => {
    		console.log(response);
    		if (response.data === ""){
    			alert("Loan amount requested exceeds limit!");
    		}
    	});
	}

	loanChange(event){
		this.setState({
			[event.target.name]:event.target.value
		});
	}

	render () {
		return (
			<Card className={"border border-dark bg-dark text-white"}>
				<Card.Header>Get Loan</Card.Header>
					<Form onSubmit={this.submitLoan} id="accountFormId">
						<Card.Body>
							  <Form.Row>
							  	<Form.Group as={Col} controlId="formGridTitle">
							  	  <Form.Label>User Id</Form.Label>
							  	  <Form.Control required
							  	  	type="text" name="userId"
							  	  	value={this.state.userId}
							  	  	onChange={this.loanChange}
							  	  	className={"bg-dark text-white"}
							  	  	placeholder="Enter User Id" />
							  	  <Form.Label>Sanction Amount</Form.Label>
							  	  <Form.Control required
							  	  	type="number" name="sanctionAmount"
							  	  	value={this.state.sanctionAmount}
							  	  	onChange={this.loanChange}
							  	  	className={"bg-dark text-white"}
							  	  	placeholder="Enter Sanction Amount" />
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