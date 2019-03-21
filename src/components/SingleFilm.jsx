import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SingleFilm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            films: []
        }
    }

    componentDidMount() {
        fetch(`https://ghibliapi.herokuapp.com/films/${this.props.match.params.id}`)
            .then(response => response.json())
            .then(films => {
                this.setState({ films })
            })
            .catch(error => console.log(error))
    }

    render() {
        return (

            <div className="card bg-info">
                <div className="card-body">
                    <h5 className="card-title">{this.state.films.title}</h5>
                    <h6 className="card-text">Director: {this.state.films.director}</h6>
                    <p className="card-text">Description: {this.state.films.description}</p>
                    <p className="card-text">Producer: {this.state.films.producer}</p>
                    <p className="card-text">Release Date: {this.state.films.release_date}</p>
                    <Link className="btn btn-primary mt-2" to={"/films"}>Go Back to All Films</Link>
                </div>
            </div>
        )
    }
}


export default SingleFilm;