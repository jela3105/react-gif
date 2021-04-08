import React, { useState, useEffect } from "react";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    getGifs();
  }, []);
  const getGifs = async () => {
    const url =
      "https://api.giphy.com/v1/gifs/search?q=twenty one pilots&limit=10&api_key=" +
      process.env.REACT_APP_API_KEY;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      };
    });
    setImages(gifs);
  };
  //  getGifs();
  return (
    <div>
      <h3>{category}</h3>
      {images.map((img) => (
        <GifGridItem {...img} />
      ))}
    </div>
  );
};
