# Swapi Gatsby App

### About

This application simply allows users to search Star Wars movies actors and to be able to read more information about related movies.

The application has been developed with [Gatsby](https://gatsbyjs.org). There has been used couple of libraries for the application:

Production:

- [ChakraUI](https://chakra-ui.com/). (UI Components & Desing)
- [Framer Motion](https://www.framer.com/motion/) (Animations)
- [Apollo Graphql](https://www.apollographql.com/) (Graphql in client side)

Development:

- [Jest](https://jestjs.io/) (Unit tests)
- [Cypress](https://www.cypress.io/) (e2e tests)
- [Eslint](https://eslint.org/) (Fixing/Linting)
- [Prettier](https://prettier.io/) (Formatting)

The directory structure of the application is:

- components
- gatsby-plugin-chakra-ui
- gatsby-theme-apollo
- images
- pages
- queries
- templates
- utils

**Components** All common _stateles_, functional and styled components. i.e. _Image_ component is a reusable component which can render images dynamically. _People_ and _Person_ components are stateless components which are used in index page. Subfolder _tests_ contains testing components.

**gatsby-plugin-chakra-ui** folder contains central theme configuration of the application. This folder is necessary for chakra-ui library.

**gatsby-theme-apollo** folder contains ApolloClient configuration. It's necessary for using graphql actions in client side.

**images** folder contains static images like the images of movies.

**pages** folder contains static pages of the application. i.e. index and 404 pages.

**queries** folder contains graphql queries.

**templates** folder contains dynamic page template for movies. Gatsby generates html pages for each movie by using film template.

**utils** folder contains some helper functions.

## Installation

For installation of the project dependencies run the command below:

```bash
npm install
```

## Launching

For launching the application run:

```bash
npm run develop
```

## e2e tests

For testing fetching process visually, run:

```bash
npm run cy:open
```

## Unit tests

For testing some components, run:

```bash
npm run test
```

The application will be running at `http://localhost:8000`
