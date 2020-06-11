// Use 'axios' to make a request to Youtube API.
import axios from 'axios';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet', // For cleaner syntax.
        maxResults: 5, // Fetch 5 Youtube videos.
        key: 'AIzaSyBpozuKFvYCeOy8sleZOb9xpiuWnAhHcMs' // Youtube API key.
    }
})


