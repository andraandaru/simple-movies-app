# Simple Movies App

A Simple Movies App that consume data from [https://www.omdbapi.com](https://www.omdbapi.com)

If you doesn't have API Key, please follow the steps below.

1. Clik link [https://www.omdbapi.com/apikey.aspx](https://www.omdbapi.com/apikey.aspx) and enter the required data
2. Choose Account type FREE
3. Check your email from The OMDb API <donotreply@omdbapi.com>

## Features

1. Display List Of Movies
2. Infinite Scroll without plugin
3. Search Movies by Keyword
4. Single Page for Single Movie Detail
5. Show Movie Poster in a popup modal window when image from the list is clicked
6. Autocomplete searchbox when search movies keyword
7. Test Cases for some components and Reducers
8. Responsive Web Design

## The Project Use

1. ReactJS (Create React App) [https://create-react-app.dev/](https://create-react-app.dev/)
2. UI Framework: MUI [https://mui.com/](https://mui.com/)
3. Redux Toolkit [https://redux-toolkit.js.org/](https://redux-toolkit.js.org/)
4. Axios [https://axios-http.com/](https://axios-http.com/)
5. React Router DOM [https://reactrouter.com/](https://reactrouter.com/)

# Getting Started

To get started running the project locally, please follow the steps below.

First, clone the repository.

```bash
git clone https://github.com/andraandaru/simple-movies-app.git
```

Then, install dependencies and fetch data to your local machine. **Note that the project use Yarn, not npm.**

```bash
cd simple-movies-app
yarn install
```

Then, create environment variable by create a **.env.local** file in the root of project and insert the following format

```env
REACT_APP_API_KEY=YOUR_KEY
```

Notes: Change YOUR_KEY with apikey that you got from [https://www.omdbapi.com](https://www.omdbapi.com)

Finally, run the development server.

```bash
yarn start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Testing Guidelines

Run the code below

```bash
yarn test
```
