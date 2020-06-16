import React from 'react';

import { Paper, TextField } from '@material-ui/core';

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

export default SearchBar;