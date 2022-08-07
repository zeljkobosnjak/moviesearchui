import React, { useEffect, useState } from 'react'
import TicketService from '../service/MovieService';
import MovieItem from './MovieItem'

const MoviesList = () => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fecthData = async (e) => {
    
            await TicketService.getAllMovies()
                .then((respone) => {
                    setMovies(respone.data);
                    console.log(respone.data)
                }).catch((error) => {
                    console.log(error);
                })
        }
        fecthData()
    }, []);


    return (
        <div className='container my-3'>
            <h2 className='text-center'>Movies List</h2>
            <div className="row">
                {movies.map((element) => {
                    return <div className="col-md-4" key={element.id} >
                        <MovieItem movie={element} />
                    </div>
                })}
            </div>
        </div>
    )
}

export default MoviesList