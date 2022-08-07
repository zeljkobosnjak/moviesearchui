import React, { useEffect, useState } from 'react'
import TicketService from '../service/MovieService';
import MovieItem from './MovieItem'
import SearchForm from './SearchForm';

const Search = () => {

    const [movies, setMovies] = useState([]);
    const [flag, setFlag] = useState(false);

    const [inputParameters, setInputParameters] = useState({
        title: ""
    });

    const handleChange = (e) => {
        const value = e.target.value;
        setInputParameters({ ...inputParameters, [e.target.name]: value });
    }

    const fecthData = async (e) => {
        e.preventDefault();

        await TicketService.getMovie(inputParameters)
            .then((respone) => {
                setFlag(false);
                setMovies(respone.data);
                console.log(respone.data)
            }).catch((error) => {
                console.log(error.response.data.message);
                if (error.response.status === 404) {
                    setFlag(true);
                }
            })
    }


    return (
        <div className='container my-3'>
            <h2 className='text-center'>Search Movie</h2>
            <SearchForm handleChange={handleChange} fecthData={fecthData} />
            <div className="row">
                {movies.map((element) => {
                    return <div className="col-md-4" key={element.id} >
                        <MovieItem movie={element} />
                    </div>
                })}
            </div>
            { flag &&
                <div className="alert alert-danger text-center" role="alert">
                    Movie not found
                </div>
            }
        </div>
    )
}

export default Search