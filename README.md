# Hatchways Front-End Assessment

This is the front-end project I built using React. The data is fetched from the Hatchways API.

## DISCLAIMER:

Unfortunately, I could not get the search students by tag functionality to work. I decided to leave in the search bar for design purposes, but it lacks the working functionality.

## Design Choices

Most of my state management was done from higher-level components. The App.js components manages the state of the data fetched, the inputs in the search bars, and the search results. These states, along with handler functions for different events, are passed down to child components to abstract the functionality to a higher-level. This way, if functionality changes need to be made, they can be localized to the app.

The API service was included in its own file and imported. In the future, if other API calls or endpoints are added, all fetch functions can be written in this one file and exported together to improve readability and ease of use.
