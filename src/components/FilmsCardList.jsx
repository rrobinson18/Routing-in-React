import React, { Component } from 'react';
import FilmCard from './FilmCard';



class FilmsCardList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            films: []
        }
    }

    componentDidMount() {
        fetch('https://ghibliapi.herokuapp.com/films')
            .then(response => response.json())
            .then(obj => {
                let films = obj.map((film) => {
                    return (
                        <FilmCard
                            key={film.id}
                            title={film.title}
                            description={film.description}
                            director={film.director}
                            producer={film.producer}
                            release_date={film.release_date}
                            rt_score={film.rt_score}
                            link={film.id} />
                    )
                })
                this.setState({ films })
            })
            
    }

    render() {
        return (
            <div className="row"> {this.state.films}</div>
        )
    }
}


export default FilmsCardList;