import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;

const Random = () => {
  const fetchGif = async () => {
    setIsLoading(true);
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const { data } = await axios.get(url); // promise

    const imageSrc = data.data.images.downsized_large.url;

    setGif(imageSrc);
    setIsLoading(false);
  };

  const [gif, setGif] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // COMPONENT DID MOUNT ... first render
  useEffect(() => {
    fetchGif();
  }, []);

  const handleClick = () => {
    fetchGif();
  };

  return (
    <div className="container">
      <h1>Random Gif</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <img width="500" src={gif} alt="Random Gif" />
      )}
      <button onClick={handleClick}>Click for new</button>
    </div>
  );
};

export default Random;
