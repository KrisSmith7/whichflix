import React, { useState, useEffect } from "react";
import { IsFirstRender } from "./FirstRender";

const posterImg = "https://image.tmdb.org/t/p/original"
const apiKeyValue = "7c43300088957ad0d9d525c14b76cf01"

const MovieSearch = () => {
    const [query, setQuery] = useState(" ");
    const [url, setUrl] = useState(" ")
    const [error, setError] = useState(null);
    const [items, setItems] = useState();
    const firstRender = IsFirstRender();

    const fetchData = () => {
        fetch(url)
            .then(res => res.json())
            .then(
                (results) => {
                    setItems(results);
                    console.log(items)
                },
                (error) => {
                    // setIsLoaded(true);
                    setError(error);
                }
            )
            .catch(console.error)
    };

    const handleInput = (evt) => {
        const queryText = evt.target.value;
        setQuery(queryText);
        setUrl(`https://api.themoviedb.org/3/search/movie?api_key=${apiKeyValue}&language=en-US&query=${query}&include_adult=false`);
        console.log(query);
        console.log(url);
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        // setUrl(`https://api.themoviedb.org/3/search/movie?api_key=${apiKeyValue}&language=en-US&query=${query}&include_adult=false`);
        // console.log(url);
        setTimeout(() => {fetchData(url) } , 2000)
        // setQuery(queryText);
        console.log(items);
        
    };
    

    useEffect(() => {
        if (firstRender) {
            console.log("first");
        } else {
            console.log("other");
        }
    }, []
    )


    if (error) {
        return (<div>Error: {error.message}</div>)
    }

    return (
        <>
            <div className="text-center">
                <h1 className="display-4">Welcome</h1>
            </div>

            {firstRender ? <h2>What are we looking for? Let's get started!</h2> : <h2>Search a movie title here.</h2>}
            <div>
                <form onSubmit={(evt) => handleSubmit(evt)}>
                    <input id="queryTextbox" onChange={handleInput} />
                    <button id="querySubmit" type="submit" onClick={(evt) => handleSubmit(evt)}>Submit</button>
                </form>
            </div>

            {!items ? <h3>No movies found.</h3> :

            <table className="table table-striped">
                <thead className="thead-dark">
                    <tr className="text-center">
                        <th></th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Release Date</th>
                    </tr>
                </thead>
                <tbody>
                        {items.results.map(item => {
                            return (
                                <tr>
                                    <td>
                                        <img className="img-thumbnail" src={`${posterImg}${item.poster_path}`} alt="poster image not available" />
                                    </td>
                                    <td>{item.title}</td>
                                    <td>{item.overview}</td>
                                    <td>{item.release_date}</td>
                                </tr>
                            )
                        }
                        )}
                </tbody>
            </table>
            }
        </>
    );
}

export default MovieSearch;