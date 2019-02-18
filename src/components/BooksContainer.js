import React from "react";
import Search from "../pages/Search";
import API from "../utils/API";

class BooksContainer extends React.Component {
    state = {
        result: {},
        search: ""
    };
    componentDidMount() {

    }

    searchBooks = query => {
        API.search(query)
        .then(res => this.setState({ result: res.data }))
        .catch(err => console.log(err));
    }

    handleInputChange = event => {

    }
    handleFormSubmit = event => {

    }
    
    render() {
        return(
            <div>

            </div>
        )
    }

}