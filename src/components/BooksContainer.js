import React from "react";
import Search from "../pages/Search";
import API from "../utils/API";

function BooksContainer(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.author}</h2>
            <p>{props.synopsis}</p>
        </div>
    )
}

export default BooksContainer;