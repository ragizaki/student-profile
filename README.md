# Hatchways Front-End Assessment

This is the front-end project I built using React, fetching a static list of students from the Hatchways API. The site is now live at zaki-hatchways-frontend-challenge.netfliy.app

## Running the Project
```git
git clone https://github.com/ragizaki/student-profile.git
npm install
npm start
```

## Design Choices

Most of my state management was done from higher-level components. The App.js components manages the state of the data fetched, the inputs in the search bars, and the search results. These states, along with handler functions for different events, are passed down to child components to abstract the functionality to a higher-level. This way, if functionality changes need to be made, they can be localized to the app.

The API service was included in its own file and imported. In the future, if other API calls or endpoints are added, all fetch functions can be written in this one file and exported together to improve readability and ease of use.

## Modern Functions and ES6

The app uses functional components and modern ES6 functionality such as:

<ul>
    <li>Arrow functions</li>
    <li>Destructuring</li>
    <li>Spread operator</li>
    <li>.filter, .map, .find, etc.<li>
</ul>
