import React, { useEffect, useState, useCallback } from 'react';

const Joke = () => {

  const [jokeData, setJokeData] = useState();  
  
  const getJokeData = useCallback(() =>
    fetch('https://api.jokes.one/jod')
    .then(res => res.json())
    .then(json => setJokeData(json))
    .catch(err => console.log(err)))
  
  useEffect(() => {
      if (!jokeData) getJokeData();
  }, [jokeData, getJokeData])
  
  console.log(jokeData);

  return <div>
      <p>{jokeData ? jokeData.contents.jokes[0].joke.text : "error"}</p>
  </div>
};

export default Joke;