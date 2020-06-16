import React from 'react';

import {Grid} from '@material-ui/core';
import youtube from './api/youtube';
import {SearchBar, VideoDetail} from './components';
// import SearchBar from './components/SearchBar';
// import VideoDetail from './components/VideoDetail';

class App extends React.Component {

    // We used 'async' since we are fetching data from Youtube API.
    // Asynchronity are used for fetching real data.
    // Basically it stops code execution until the data is fetched.
    handleSubmit = async (searchTerm) => {
        const response = await youtube.get('search', { 
            params: {
                part: 'snippet', // For cleaner syntax.
                maxResults: 5, // Fetch 5 Youtube videos.
                key: 'AIzaSyBpozuKFvYCeOy8sleZOb9xpiuWnAhHcMs', // Youtube API key.
                q: searchTerm,
            }
        });

        
        //console.log(response.data.items);
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

export default App;

// Here we created a class of App that has render() and return() functions.
// Components in react can be defined to two different ways. 
// One is class-based component and the other is function-based(or arrow function-based) component.