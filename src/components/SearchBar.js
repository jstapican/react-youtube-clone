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
        this.setState({ searchTerm: event.target.value })        
    }

    handleSubmit = () => {
        //This line here takes in the 'searchTerm' from this 'this.state'.
        const { searchTerm } = this.state;
        
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