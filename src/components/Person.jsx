import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Person extends Component {
    constructor(props) {
        super(props);
        this.state = {
            person: []
        }
    }

    componentDidMount() {
        fetch(`https://ghibliapi.herokuapp.com/people/${this.props.match.params.id}`)
            .then(response => response.json())
            .then(person => {
                 this.setState({ person })
            })
            .catch(error => console.log(error))
    }

    render() {
        return (
            <div className="col-sm-12">
                <div className="card mb-5">
                    <div className="card-body">
                        <h5 className="card-title">{this.state.person.name}</h5>
                        <h6 className="card-text">Age: {this.state.person.age}</h6>
                        <p className="card-text">Gender: {this.state.person.gender}</p>
                        <p className="card-text">Eye Color: {this.state.person.eye_color}</p>
                        <p className="card-text">Hair Color: {this.state.person.hair_color}</p>
                        <Link className="btn btn-primary mt-2" to={"/people"}>Go Back to the People</Link>
                    </div>
                </div>
            </div>
        )
    }
}


export default Person;