This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Part 1: Getting Started
1. Remove all contents in 'public folder' except 'index.html'. Remove the 'manifest' code below inside 'index.html'.
```
<link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
```
2. Remove all contents in 'src folder' and create a new file 'index.js'.
3. Create a new file 'App.js' and a new folder 'components' in 'src folder'.
4. Create a new folder 'api' with a new file 'youtube.js'.
5. Add the ff code in 'youtube.js'.
```
// Use 'axios' to make a request to Youtube API.
import axios from 'axios';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',

});
```


## Part 2: Coding our App.js
1. Import the ff packages.
```
import React from 'react';

import {Grid} from '@material-ui/core';
import youtube from './api/youtube';
// import SearchBar, VideoList, VideoDetail from './components';
import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';
```
2. Add the ff class container.
```
class App extends React.Component {
    render () {
        return (
            // <h1>React Youtube Clone App</h1>
            <Grid justify="center" container spacing={16}>
                <Grid item xs={12}>
                    <Grid container spacing={16}>
                        <Grid item xs={12}>
                            <SearchBar />
                        </Grid>
                        <Grid item xs={8}>
                            <VideoDetail />
                        </Grid>
                        <Grid item xs={4}>
                            {/* {VIDEO LIST} */}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default App;

// Here we created a class of App that has render() and return() functions.
// Components in react can be defined to two different ways. 
// One is class-based component and the other is function-based(or arrow function-based) component.
``` 
3. Create 3 new files 'SearchBar.js', 'VideoDetail.js', 'VideoList.js' in the 'container folder'.


## Part 3: SearchBar.js
1. Add the ff code.
```
import React from 'react';

class SearchBar extends React.Component{
    state = {
        searchTerm: '',
    } // We created a state to initialize values for 'searchTerm' at the start. 
      //  Empty string in this case.
    
      
    render(){
        return(
            <h1>This is a search bar component.</h1>
        )    
    }
}

export default SearchBar;
```


## Part 4: VideoDetail.js
1. Add the ff dummy code.
```
import React from 'react';

const VideoDetail = () => {
    return (
        <h1>This is a Video Detail component.</h1>
    )
}

export default VideoDetail;
```
2. Run 'npm start' and check webpage.


## Part 5: index.js
1. Create a new file 'index.js' to contain all the components we need to import.
2. Add the ff code in 'index.js'.
```
export { default as SearchBar } from './SearchBar';
export { default as VideoDetail } from './VideoDetail';
```
3. Change import code in App.js to:
```
import React from 'react';

import {Grid} from '@material-ui/core';
import youtube from './api/youtube';
import {SearchBar, VideoDetail} from './components';
// import SearchBar from './components/SearchBar';
// import VideoDetail from './components/VideoDetail';
```


## Part 6: Adding a Search Bar is SearchBar.js
1. Update the ff import code in 'SearchBar.js':
```
import React from 'react';

import { Paper, TextField } from '@material-ui/core'
```
2. Add the ff code in the body.
```
class SearchBar extends React.Component{
    state = {
        searchTerm: '',
    } // We created a state to initialize values for 'searchTerm' at the start. 
      //  Empty string in this case.
    
    handleChange = (event) => {
        console.log(event.target.value);
        // this.setState({ searchTerm: })
    }
      
    render(){
        return(
            <Paper elevation = {6} style = {{ padding: '25px' }}>
                <form onSubmit = { this.handleSubmit }> 
                    <TextField fullWidth label="Search..." onChange = { this.handleChange } /> 
                </form>
            </Paper>
        )    
    }
}

export default SearchBar;
```
3. Run 'npm start' to test.
4. See screenshot.
![image](https://user-images.githubusercontent.com/42177018/84520829-b7021f00-ad06-11ea-8e32-766b5e629ab5.png)
5. Type any word in the search bar and check it if it runs in the console.
6. Create functions 'handleChange' and 'handleSubmit'.


# Part 7: Passing the 'searchTerm' from the Search Bar into App.js
1. Open App.js. Add a new property in '<SearchBar />' tag called onFormSubmit.
```
class App extends React.Component {
    render () {
        return (
            // <h1>React Youtube Clone App</h1>
            <Grid justify="center" container spacing={16}>
                <Grid item xs={12}>
                    <Grid container spacing={16}>
                        <Grid item xs={12}>
                            <SearchBar onFormSubmit = {this.handleSubmit} />
                        </Grid>
                        <Grid item xs={8}>
                            <VideoDetail />
                        </Grid>
                        <Grid item xs={4}>
                            {/* {VIDEO LIST} */}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}
```
2. Go to 'SearchBar.js' and add a new variable 'onFormSubmit'.
```
class SearchBar extends React.Component{
    state = {
        searchTerm: '',
    } // We created a state to initialize values for 'searchTerm' at the start. 
      //  Empty string in this case.
    
    handleChange = (event) => {
        // console.log(event.target.value);

        //This function will update our 'searchTerm' in this state above.
        this.setState({ searchTerm: event.target.value });        
    }

    handleSubmit = (event) => {
        //This line here takes in the 'searchTerm' from this 'this.state'.
        const { searchTerm } = this.state;     

        // Now inside of our search bar through this 'props' we will be providing data to our 'onFormSubmit'.
        const{ onFormSubmit } = this.props;
        onFormSubmit(searchTerm);

        // This prevents a full-page refresh and only does a specific component refresh (only the search bar).
        event.preventDefault();
    }
      
    render(){
        return(
            <Paper elevation = {6} style = {{ padding: '25px' }}>
                <form onSubmit = { this.handleSubmit }> 
                    <TextField fullWidth label="Search..." onChange = { this.handleChange } /> 
                </form>
            </Paper>
        )    
    }
}
```
3. Go to App.js and create a new function 'handleSubmit' with a 'searchTerm' parameter which will handle our 'onFormSubmit'. Change also container spacing from '16' to '10' as it will produce an error when we get data from Youtube API.
4. Get a Youtube-v3 API key from 'console.developers.google.com' and put it inside the 'response' variable inside the 'handleSubmit' function. Update 'class App' with the ff code.
```
class App extends React.Component {

    // We used 'async' since we are fetching data from Youtube API.
    // Asynchronity are used for fetching real data.
    // Basically it stops code execution until the data is fetched.
    handleSubmit = async (searchTerm) => {
        const response = await youtube.get('search', { 
            params: {
                part: 'snippet', // For cleaner syntax.
                maxResults: 5, // Fetch 5 Youtube videos.
                key: 'AIzaSyBpozuKFvYCeOy8sleZOb9xpiuWnAhHcMs' // Youtube API key.
            }
        });


        console.log(response);
    }

    render () {
        return (
            // <h1>React Youtube Clone App</h1>
            <Grid justify="center" container spacing={10}>
                <Grid item xs={12}>
                    <Grid container spacing={10}>
                        <Grid item xs={12}>
                            <SearchBar onFormSubmit = {this.handleSubmit} />
                        </Grid>
                        <Grid item xs={8}>
                            <VideoDetail />
                        </Grid>
                        <Grid item xs={4}>
                            {/* {VIDEO LIST} */}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}
```

4. Inspect in the browser console to test.
e.g. Type 'panda' in the search bar and check console if it will retrive data.
```

```



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
