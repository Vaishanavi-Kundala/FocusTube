import React, { useState } from 'react';
import { Form } from 'react-bootstrap';


function SearchBar ({submit}){

    const [searchTerm, setSearchTerm] = useState ("");

    const handleChange = (event) => setSearchTerm(event.target.value);

    const onKeyPress = (event) => {
        if (event.key === "Enter") {
            submit(searchTerm);
            event.preventDefault();
        }
    }

    return(
        <Form>
            <Form.Group>
                <Form.Control 
                    size="lg" 
                    type="text" 
                    placeholder="Search"  
                    value={searchTerm} 
                    onChange = {handleChange} 
                    onKeyPress = {onKeyPress}
                    />
            </Form.Group>
        </Form>
    );

    
}

export default SearchBar;