# Mind Challenge 

This project presents a cucumber java automation challenge

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

```
Get the code Git:

git clone https://github.com/jcsmor/qa-mind.git

Go to subdirectory qa-sortable-challenge

npm install -g parcel

npm install

npm start

Now you must be able to see the web app on http://localhost:3000

Go back to main Folder qa-mind and install Gradle and Gradle dependencies with:

./gradlew clean build

./gradlew run

```

## Running the tests

To run the Selenium tests open a command window and run:

./gradlew run  or  gradle run


## Running the tests with Docker

The plan was create a docker-compose file with :

services:
  node:
    build: qa-sortable-challenge/
    image: nodeserver
    ports:
      - "3000:3000"
    expose:
      - 3000
      
Here we launch a docker with the web server working on port 3000

Then launch the gradle code inside docker and same network to build and run the tests.

  gradle:
    build: .
    expose:
      - 3000

Using Dockerfile defined in qa-sortable-challenge/ folder for node services    
Using Dockerfile defined in root folder for gradle to run automated task using cucumber gradle.

Docker-compose is in root folder and to run it just open root folder and on comand line write
``` docker-compose build ```

The objective was write docker-compose build and create all the necessary images and run the tests.
This goal was not reached in time because i had problems running cucumber gradle tests inside docker and did not found
a suitable solution in time.





### And coding style tests

Selenium tests use Cucumber and Java and the latest version of chromedriver

Api tests use cucumber and Java with rest assured libraries and Hamcrest Matchers

## Built With

* [IntelliJ IDEA](https://www.jetbrains.com/idea/) - The IDE used
* [GRADLE](https://gradle.org/) - Dependency Management
* [Selenium](https://www.seleniumhq.org/) - Core Driver
* [Junit](https://junit.org/) - Core Runner
* [Selenium](https://cucumber.io/) - Keyword-Driven Engine
* [REST Assured](http://rest-assured.io/) - Testing and validating REST services in Java

## Authors

* **Joao Moreira** - (https://github.com/jcsmor)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details


