import React, { Component } from 'react';
import PeopleCard from './PeopleCard';
import 'isomorphic-fetch';


class PeopleCardList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            people: []
        }
    }

    componentDidMount() {
        fetch('https://ghibliapi.herokuapp.com/people')
            .then(res => res.json())
            .then(obj => {
                let people = obj.map((people, id) => {
                    return (
                        <PeopleCard
                            key={id}
                            name={people.name}
                            age={people.age}
                            gender={people.gender}
                            eye_color={people.eye_color}
                            hair_color={people.hair_color}
                            link={people.id} />
                    )
                })
                this.setState({ peoples: people })
            })
    }

    render() {
        return (
            <div className="row"> {this.state.peoples}</div>
        );
    }
}


export default PeopleCardList;