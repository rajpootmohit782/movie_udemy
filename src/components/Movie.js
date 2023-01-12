import React from "react";

import classes from "./Movie.module.css";

const Movie = (props) => {
  console.log(props);
  const clicked = async (id) => {
    //  props.delbutton(props.id);
    console.log("ckicked", id);
    const response = await fetch(
      `https://movielist-98885-default-rtdb.firebaseio.com/movies/${id}.json`,
      {
        method: "DELETE"
      }
    );
    const data = await response.json();
    console.log(data);
    props.fetchpro();
  };
  return (
    <li className={classes.movie}>
      <h2>{props.id}</h2>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.openingText}</p>
      <button onClick={() => clicked(props.id)}> Delet</button>
    </li>
  );
};

export default Movie;
