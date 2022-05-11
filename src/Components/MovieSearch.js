import React, {useState}  from "react";


const posterImg = "https://image.tmdb.org/t/p/original"
const apiKeyValue = "7c43300088957ad0d9d525c14b76cf01"

const MovieSearch = () => {
    const [query, setQuery] = useState(" ");
    const [url, setUrl] = useState(" ")
    const [error, setError] = useState(null);
    const [items, setItems] = useState();


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
        console.log(query);
        setUrl(`https://api.themoviedb.org/3/search/movie?api_key=${apiKeyValue}&language=en-US&query=${query}&include_adult=false`);
        console.log(url);
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        setTimeout(() => { fetchData(url)}, 1000);
        console.log(items);

    };

    if (error) {
        return (<div>Error: {error.message}</div>)
    }

    return (
        <>
        <div className="py-4 text-center">
            <h4>What are we looking for? Let's get started!</h4>
            <p>Search a movie title or keyword below.</p>
        </div>
            <div>
                <form onSubmit={(evt) => handleSubmit(evt)}>
                    <input id="queryTextbox" onChange={handleInput} />
                    <button id="querySubmit" type="submit" onClick={(evt) => handleSubmit(evt)}>Submit</button>
                </form>
            </div>

            <section className="container">

                {!items ?
               <>
               <div>
                <p className="d-none">Sorry, We couldn't find anything matching that title. Try again?</p>
                </div> 
                
                <div className="d-none"></div> 
               </>
               
            :
                    <div className="mt-4">
                        <table className="table table-striped table-sm table-responsive-small">
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
                                        <tr key={item.title}>
                                            <td>
                                                <img className="img-thumbnail rounded float-left" src={`${posterImg}${item.poster_path}`} alt="poster image not available" />
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
                    </div>
            }
            </section>
        </>
    );
}

export default MovieSearch;