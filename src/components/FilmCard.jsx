import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class FilmCard extends Component {
    render() {
        return (
            <div className="row m-5">
                <div className="card bg-success md-5">
                    <div className="card-body">
                        <h5 className="card-title">{this.props.title}</h5>
                        <h6 className="card-text">Director: {this.props.director}</h6>
                        <p className="card-text">Producer: {this.props.producer}</p>
                        <p className="card-text">Release Date: {this.props.release_date}</p>
                        <p className="card-text">Description: {this.props.description}</p>
                        <Link className="btn btn-primary mt-2" to={"/film/" + this.props.link}>See Film</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default FilmCard;