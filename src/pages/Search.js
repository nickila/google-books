import React from "react";
import API from "../utils/API";

class Search extends React.Component {

    state = {
        books: [],
        title: "guy",
        author: "dsfasd",
        synopsis: "asdfasdf",

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

        return (
            <div className="row">
                <div className="col-md-8 mx-auto">
                    <h1>Search</h1>
                    <div class="input-group input-group-lg">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroup-sizing-lg">Title</span>
                        </div>
                        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        {/* <ul>
                            <li>{this.name.title}</li>
                            <li>{this.name.author}</li>
                            <li>{this.name.synopsis}</li>
                        </ul> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;