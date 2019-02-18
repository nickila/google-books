import React from "react";

function BooksContainer(props) {
    return (

        <div className="card" key={props.id}>
            <div className="card-body">
                <h3 className="card-title">{props.title}</h3>
                <h5 className="card-subtitle mb-2 text-muted">by {props.author}</h5>
                <hr />
                <p className="card-text">{props.synopsis}</p>
                <button className="card-link" onClick={() => props.saveBook(props.id)}>Save</button>
            </div>
        </div>
        
    )
}

export default BooksContainer;