import React from 'react'

const MovieItem = ({ movie }) => {
    return (
        <div className='my-3'>
            <div className="card">
                <img src={movie.image == null ? "https://images.creativemarket.com/0.1.0/ps/5776855/1820/1214/m1/fpnw/wm1/eps2019012723462212019012ivlxv_thumb-.jpg?1548666412&s=128d46599f95901a1c34007f456c9966" : movie.image.medium} className="card-img-top" alt="Card image cap" 
                style={{height: "250px"}} />
                <div className="card-body">
                    <h5 className="card-title">{movie.name.slice(0, 30)}{movie.name.length > 30 ? "..." : ""}</h5>
                    <p className="card-text">{movie.summary.replace("<p>", '').replace("</p>", '').replace("<i>", '').replace("</i>", '').slice(0, 80)}...</p>
                    <a rel='noreferrer' href={movie.url} target="_blank" className="btn btn-sm btn-primary">Read More</a>
                    <p className="card-text"><small className="text-muted">{movie.premiered}</small></p>
                </div>
            </div>
        </div>
    )
}

export default MovieItem