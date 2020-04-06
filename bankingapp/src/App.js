import React from 'react';
import logo from './logo.svg';
import './App.css';

import {Container, Row, Jumbotron, Col} from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import NavigationBar from './components/NavigationBar';
import Welcome from './components/Welcome';
import Userslist from './components/Userslist';
import Accountslist from './components/Accountslist';
import Loanslist from './components/Loanslist';
import Adduser from './components/Adduser';
import Addaccount from './components/Addaccount';
import Deposit from './components/Deposit';
import Withdraw from './components/Withdraw';
import GetLoan from './components/GetLoan';

function App() {
  const marginTop = {
  	marginTop:"20px"
  }
  return (
    <Router className="App">
    	<NavigationBar/>
    	<Container>
    		<Row>
    		<Col lg={12} style={marginTop}>
    			<Switch>
    				<Route path="/" exact component={Welcome}/>
    				<Route path="/Userslist" exact component={Userslist}/>
    				<Route path="/Adduser" exact component={Adduser}/>
    				<Route path="/Accountslist" exact component={Accountslist}/>
    				<Route path="/Addaccount" exact component={Addaccount}/>
    				<Route path="/Loanslist" exact component={Loanslist}/>
    				<Route path="/Deposit" exact component={Deposit}/>
    				<Route path="/Withdraw" exact component={Withdraw}/>
    				<Route path="/GetLoan" exact component={GetLoan}/>
    			</Switch>
			</Col>
    		</Row>
    	</Container>
      	<p>
          Welcome to Banking Application
       	</p>
    </Router>
  );
}

export default App;
