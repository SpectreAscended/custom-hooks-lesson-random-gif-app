import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;

const Random = () => {
  const [tag, setTag] = useState('dogs');
  const [gif, setGif] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const fetchGif = async tag => {
    setIsLoading(true);
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    const { data } = await axios.get(url); // promise

    const imageSrc = data.data.images.downsized_large.url;

    setGif(imageSrc);
    setIsLoading(false);
  };

  // COMPONENT DID MOUNT ... first render
  useEffect(() => {
    fetchGif('dogs');
  }, []);

  const handleClick = () => {
    fetchGif(tag);
  };

  return (
    <div className="container">
      <h1>Random {tag} Gif</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <img width="500" src={gif} alt="Random Gif" />
      )}
      <input
        value={tag}
        onChange={e => {
          setTag(e.target.value);
        }}
      />
      <button onClick={handleClick}>Click for new</button>
    </div>
  );
};

export default Random;

// import React from 'react';

// const Tag = () => {
//   return (
//     <>
//       <h1>Tag</h1>
//     </>
//   );
// };

// export default Tag;
