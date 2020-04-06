import React, { Component } from 'react'

import {Card, Table} from 'react-bootstrap'
import axios from 'axios';

export default class Accountslist extends Component {

	constructor(props){
		super(props);
		this.state = {
			accounts: []
		};
	}

	componentDidMount(){
		axios.get("http://localhost:8080/accounts", { headers: {
        'Access-Control-Allow-Origin': '*', 
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
    	'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'}},
    	{withCredentials: true},
    	{crossorigin: true})
    	.then(response => response.data)
		.then((data) => {
			this.setState({accounts: data});
		});
	}

	render () {
		return (
			<Card className={"border border-dark bg-dark text-white"}>
				<Card.Header>Accounts List</Card.Header>
				<Card.Body>
					<Table bordered hover striped variant="dark">
				    	<thead>
						    <tr>
						      <th>Account ID</th>
						      <th>User ID</th>
						      <th>Balance</th>
						    </tr>
					  	</thead>
					  	<tbody>
						  {
						  	this.state.accounts.length === 0 ?
						  	<tr align="center">
						    	<td colSpan="6">No Accounts Present.</td>
						    </tr> : 
						    this.state.accounts.map((account) => (
						    <tr key={account.id}>
					    		<td>{account.id}</td>
					    		<td>{account.userId}</td>
					    		<td>{account.balance}</td>
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