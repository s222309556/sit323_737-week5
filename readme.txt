Arithmetic Express API Documentation
------------------------------------

The Arithmetic Express API provides endpoints for performing basic arithmetic operations: addition, subtraction, multiplication, and division. These operations can be executed by sending HTTP requests to specific endpoints.

Base URL
--------
http://localhost:3000

Replace "localhost" with the IP address or hostname of the server, and "3000" with the port that it is listening on.

Endpoints
---------

Addition
--------
Endpoint: GET /add

Parameters:
- num1: The first number (required).
- num2: The second number (required).

Example:
Request: GET /add?num1=10&num2=5
Response:
{
  "result": 15
}

Subtraction
-----------
Endpoint: GET /sub

Parameters:
- num1: The first number (required).
- num2: The second number (required).

Example:
Request: GET /sub?num1=10&num2=5
Response:
{
  "result": 5
}

Multiplication
--------------
Endpoint: GET /multi

Parameters:
- num1: The first number (required).
- num2: The second number (required).

Example:
Request: GET /multi?num1=10&num2=5
Response:
{
  "result": 50
}

Division
--------
Endpoint: GET /divide

Parameters:
- num1: The first number (required).
- num2: The second number (required).

Example:
Request: GET /divide?num1=10&num2=5
Response:
{
  "result": 2
}

Error Handling
--------------
- The API returns a 400 Bad Request error along with a JSON response detailing the error if the input parameters contain invalid numbers.
- The API returns a 400 Bad Request error along with a JSON response that details the error if you try to divide by zero.
