import React, { Component } from 'react'
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default class NavigationBar extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
            	<Link to={""} className="navbar-brand">
            		<img
				        alt=""
				        src="/bankLogo.svg"
				        width="30"
				        height="30"
				        className="d-inline-block align-top"
			        />{' '}
            	</Link>
			    <Nav className="mr-auto">
				    <Link to={"Adduser"} className="nav-link">Add User</Link>
				    <Link to={"Addaccount"} className="nav-link">Add Account</Link>
				    <Link to={"Deposit"} className="nav-link">Deposit</Link>
				    <Link to={"Withdraw"} className="nav-link">Withdraw</Link>
				    <Link to={"GetLoan"} className="nav-link">Get Loan</Link>
				    <Link to={"Userslist"} className="nav-link">Show Users</Link>
				    <Link to={"Accountslist"} className="nav-link">Show Accounts</Link>
				    <Link to={"Loanslist"} className="nav-link">Show Loans</Link>
			    </Nav>
		  	</Navbar>
    	);
    }

}