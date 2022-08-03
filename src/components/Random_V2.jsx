import React from 'react';

import useGif from '../useGif';

const Tag = () => {
  const { gif, fetchGif, isLoading } = useGif();

  return (
    <div className="container">
      <h1>Random Gif</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <img width="500" src={gif} alt="Random Gif" />
      )}

      <button onClick={() => fetchGif()}>Click for new</button>
    </div>
  );
};

export default Tag;
