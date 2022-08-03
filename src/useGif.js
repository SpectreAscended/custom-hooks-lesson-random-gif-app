import { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = tag => {
  const [gif, setGif] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const fetchGif = async tag => {
    setIsLoading(true);
    const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url);

    const imageSrc = data.data.images.downsized_large.url;

    setGif(imageSrc);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchGif(tag);
  }, [tag]);

  return { gif, fetchGif, isLoading };
};

export default useGif;
