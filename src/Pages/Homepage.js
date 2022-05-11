import React from "react";
import MovieSearch from "../Components/MovieSearch";

const Homepage = () => {

    return(
        <section>

        <div className="text-center border-bottom pb-4">
    <h1 className="display-4">Welcome to Watchflix</h1>
    <h4>Helping you find info on some of your favorite movies!</h4>
</div>


<div className="container py-4">
    <MovieSearch />
</div>
        </section>
    )
}

export default Homepage;