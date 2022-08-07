import React from 'react'

const SearchForm = ({ handleChange, fecthData }) => {

    return (
        <div className='container my-3'>
            <form className="form-inline"
                onSubmit={e => {
                    e.preventDefault(); // Allow enter key to submit the form
                    e.stopPropagation();
                }}>
                <div className="row">
                    <div className="col-10">
                        <div className="form-group mx-sm-3 mb-2">
                            <input onChange={(e) => handleChange(e)} type="text" name='title' className="form-control" placeholder="Search movie by title" />
                        </div>
                    </div>
                    <div className="col-2">
                        <button onClick={(e) => fecthData(e)} type="submit" className="btn btn-primary mb-2">Search</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SearchForm