import React, { Component } from 'react'

import {Card, Table} from 'react-bootstrap'
import axios from 'axios';

export default class Loanslist extends Component {

	constructor(props){
		super(props);
		this.state = {
			loans: []
		};
	}

	componentDidMount(){
		axios.get("http://localhost:8080/loans", { headers: {
        'Access-Control-Allow-Origin': '*', 
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
    	'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'}},
    	{withCredentials: true},
    	{crossorigin: true})
    	.then(response => response.data)
		.then((data) => {
			this.setState({loans: data});
		});
	}

	render () {
		return (
			<Card className={"border border-dark bg-dark text-white"}>
				<Card.Header>Loans List</Card.Header>
				<Card.Body>
					<Table bordered hover striped variant="dark">
				    	<thead>
						    <tr>
						      <th>Loan ID</th>
						      <th>User ID</th>
						      <th>Sanction Amount</th>
						    </tr>
					  	</thead>
					  	<tbody>
						  {
						  	this.state.loans.length === 0 ?
						  	<tr align="center">
						    	<td colSpan="6">No Accounts Present.</td>
						    </tr> : 
						    this.state.loans.map((loan) => (
						    <tr key={loan.id}>
					    		<td>{loan.id}</td>
					    		<td>{loan.userId}</td>
					    		<td>{loan.sanctionAmount}</td>
					    	</tr>
						    ))
						    
						  }
					  	</tbody>
					</Table>
				</Card.Body>
			</Card>
		);
	}
}