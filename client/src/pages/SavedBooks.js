import React from "react";
// import API from "../utils/API";



class SavedBooks extends React.Component {

    state = {
        books: [],
        title: "",
        author: "",
        synopsis: "",

    };

    // componentDidMount() {
    //     this.loadBooks();
    // }

    // loadBooks = () => {
    //     API.getBooks()
    //     .then(res => 
    //         this.setState({ books: res.data, title: "", author: "", synopsis: "" }))
    //         .catch(err => console.log(err));
    // };
    render() {
        return (
            <div className="row">
                <div className="col-md-9 mx-auto">
                    <h1>Saved Books</h1>
                    
                    <ul>
                        <li>{this.state.title}</li>
                        <li>{this.state.author}</li>
                        <li>{this.state.synopsis}</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default SavedBooks;