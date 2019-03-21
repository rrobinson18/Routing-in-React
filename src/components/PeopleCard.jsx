import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class PeopleCard extends Component {
    render() {
        return (
            <div className="row m-5">
                <div className="card bg-success md-5">
                    <div className="card-body">
                        <h5 className="card-header">{this.props.name}</h5>
                        <p className="card-text">Age: {this.props.age}</p>
                        <p className="card-text">Gender: {this.props.gender}</p>
                        <p className="card-text">Eye Color: {this.props.eye_color}</p>
                        <p className="card-text">Hair Color: {this.props.hair_color}</p>
                        <Link className="btn btn-primary mt-2" to={"/person/" + this.props.link}>See Person</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default PeopleCard;