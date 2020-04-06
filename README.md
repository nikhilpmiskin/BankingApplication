Banking Application

It is a REST API based application developed using JAVA springboot ReactJS for the front end. 

The following APIs are implemented:

- To display all the users using GET request: http://localhost:8080/users 

- To display all the accounts using GET request: http://localhost:8080/accounts

- To display all the loans using GET request: http://localhost:8080/loans

- To add a new user with name = "First Last": http://localhost:8080/adduser?name=First+Last

- To add a new account with userId "1" and balance 1000: http://localhost:8080/addaccount?userId=1&balance=1000

- To add a new Loan with userId "1" and sanction amount 100: http://localhost:8080/addloan?userId=1&sanctionAmount=100

- To deposit money (amount = 1000) in account with account id "1": http://localhost:8080/depositmoney?accountId=1&amount=1000

- To withdraw money (amount = 1000) from account with account id "1": http://localhost:8080/withdrawmoney?accountId=1&amount=1000

The application is also deployed on AWS, and the above operations can be performed with similar api calls:

- To display all the users using GET request: http://bankingapplication-env-1.eba-pra3wmvz.us-east-2.elasticbeanstalk.com/users

- To display all the accounts using GET request: http://bankingapplication-env-1.eba-pra3wmvz.us-east-2.elasticbeanstalk.com/accounts

- To display all the loans using GET request: http://bankingapplication-env-1.eba-pra3wmvz.us-east-2.elasticbeanstalk.com/loans

- To add a new user with name = "First Last": http://bankingapplication-env-1.eba-pra3wmvz.us-east-2.elasticbeanstalk.com/adduser?name=First+Last

- To add a new account with userId "3" and balance 1000: http://bankingapplication-env-1.eba-pra3wmvz.us-east-2.elasticbeanstalk.com/addaccount?userId=3&balance=1000

- To add a new Loan with userId "3" and sanction amount 100: http://bankingapplication-env-1.eba-pra3wmvz.us-east-2.elasticbeanstalk.com/addloan?userId=3&sanctionAmount=100

- To deposit money (amount = 1000) in account with account id "1": http://bankingapplication-env-1.eba-pra3wmvz.us-east-2.elasticbeanstalk.com/depositmoney?accountId=1&amount=1000

- To withdraw money (amount = 1000) from account with account id "1": http://bankingapplication-env-1.eba-pra3wmvz.us-east-2.elasticbeanstalk.com/withdrawmoney?accountId=1&amount=1000

In order to use the full stack application,
1) Start the server by running the BankingApiApp.java. Ensure that the none of the maven profiles are checked. 
2) Navigate to bankingapp directory and execute command "npm start"
3) Open browser, and visit "http://localhost:3000/", and the application should be up and running!

Extra:
The maven profiles are developed to easily switch between the properties for localhost or AWS. 
For example, we can check "demo-compile-java8" profile to build the jar and deploy on AWS.
