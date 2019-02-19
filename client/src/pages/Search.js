import React from "react";
import API from "../utils/API";
import BooksContainer from "../components/BooksContainer";

class Search extends React.Component {

    state = {
        search: "",
        books: [],
        title: "",
        author: "",
        synopsis: "",
        error: ""

    };

    componentDidMount() {

    }

    searchBooks = query => {
        API.search(query)
            .then(res => this.setState({ result: res.data }))
            .catch(err => console.log(err));
    }

    handleInputChange = event => {
        this.setState({ search: event.target.value });
        console.log(this.state.search);
    }

    saveBook = data => {
        // This data is being passed in from BooksContainer.js props (all props) when the save button is clicked.
        console.log(data)
        API.save({
            title: data.title,
            author: data.author,
            synopsis: data.synopsis
        })
            .then(console.log("way to go!"))
            .catch(err => console.log(err));
    }

    handleFormSubmit = event => {
        event.preventDefault();
        API.search(this.state.search)
            .then(res => {
                if (res.data.status === "error") {
                    throw new Error(res.data.message);
                }
                console.log(this.state.search);
                this.setState({ books: res.data.items });
                console.log(this.state.books)
                console.log(res.data.items[0].volumeInfo.authors[0]);
            })
            .catch(err => this.setState({ error: err.message }));
    };

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-8 mx-auto">
                        <form>
                            <div className="form-group">
                                <label>Search Books by Title</label>
                                <input type="text" className="form-control" id="titleSearch" placeholder="Title" onChange={this.handleInputChange} />
                            </div>
                            <button type="submit" className="btn btn-primary" onClick={this.handleFormSubmit}>Submit</button>
                        </form>
                    </div>
                </div>
                {this.state.books.map(books => (
                    <div className="row" key={books.id}>
                        <div className="col-md-6 mx-auto">
                            <br />
                            <BooksContainer
                                title={books.volumeInfo.title}
                                author={books.volumeInfo.authors[0]}
                                key={books.id}
                                id={books.id}
                                synopsis={books.volumeInfo.description}
                                saveBook={this.saveBook}
                            />
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default Search;