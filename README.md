# Basic Angular App

## Project Overview
The goal of this assignment is to cover up basic angular feature i.e. components, module, routing and so on.

## Key Requirements
1. Pages: Login, Home, Contact, About, Dashboard
2. Home, Contact, About pages will be public
3. Login page
	* consists of form with username and password 
	* allow login accepts any username and password
4. Dashboard page will be access after logged in.
5. A Navbar link for the pages [using router outlet]
6. Contact page
	* must be a form with fields name, address and phone number
	* on submitting form the details must be saved locally and shown in about page [can use localStorage]
	* Note: must use canDeactivate gaurd in contact page route, when user switches to different route without submitting the form then application must prevent navigation with an alert message
7. Add a api service for getting data(You can use any public apis)
8. Add a calculator service
	* two number input fields
	* button to perform add, subtract, multiply, divide