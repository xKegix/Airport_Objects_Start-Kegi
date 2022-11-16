![logo](https://user-images.githubusercontent.com/44912347/202273653-1c259f67-7b01-46fc-8e4d-ccb804649e27.jpg)

# Airport Objects
Create a `Bag`, `Person`, and `Airport` class according to the provided specificiations.

## Part 1: The `Bag` Class
**GOAL**: Complete all the required components for the Bag class so that all the test are passed when you run `npm run test Bag.test.js`

Complete the following steps to complete your `Bag` class:
- Add constructor method to the `Bag` class
- Include an argument that adds `weight` on the constructor method
- Handle the exception in case a user initializes a Bag object with no weight that throws a new error message saying `“bag needs weight”`.
- Assign the `weight` argument to become the weight of the instance of the class
- Export the module
- Run the command npm run test Bag.test.js you should receive the following output: 

![Part 1 Tests](https://user-images.githubusercontent.com/44912347/202293535-73bacaba-fca1-4cb5-9013-e68ac6b8e8a4.png)

## Part 2: The `Person` Class
**GOAL**: Complete all the required components for the `Person` class so that all the test are passed when you run `npm run test Person.test.js`

Complete the following steps to complete your `Person` class:
- Include a constructor Mmthod for the following properties: `name` and `bags`
  - `bags` should contain a reference to a data type that can contain a list of Bags.
- Fill out the `addBag` method. Make sure you use the appropriate keywords and methods to add bag objects to the property `bags`
- Export the module
- Run the command `npm run test Person.test.js`. If you have successfully completed this class, you should have a result as follows:

![Part 2 Tests](https://user-images.githubusercontent.com/44912347/202294091-02d94879-e058-4e68-850a-871efc4eb781.png)

## Part 3: The `Airport` Class
**GOAL**: Create an `Airport` class that takes the `name` of the airport and has an `addPlane` method.

Use the following UML Class Diagram to help guide your assignment: 

![UML Diagram](https://user-images.githubusercontent.com/44912347/202294334-9050cb44-b493-4a11-9ab9-eb38f2a301e1.png)

Complete the following steps to complete your `Airport` class:
- Fill out the `Airport` constructor method. Use the appropriate data type or structure to contain a list of planes. 
- Fill out the `addPlane` method. Make sure you use the appropriate keywords and methods to add plane objects to planes property.
- Run the command `npm run test Airport.test.js`. If you have successfully completed this class, you should have a result as follows:

![Part 3 Tests)](https://user-images.githubusercontent.com/44912347/202294637-03bc54af-82ee-4c2a-bd4e-7aea7b0f156f.png)

## Part 4: Validation
**GOAL:** Verify that you have passed all the required tests for this activity.
- Run the command npm run test. If you have successfully completed this class, you should have a result as follows:

![Part 4 Tests](https://user-images.githubusercontent.com/44912347/202294809-71f797d1-784d-4ead-bc00-091b8a4fa43f.png)
