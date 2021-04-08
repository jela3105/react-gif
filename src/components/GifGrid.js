import React, { useState, useEffect } from "react";

export const GifGrid = ({ category }) => {
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
        img: img.images?.downsized_medium.url,
      };
    });
    console.log(gifs);
  };
  //  getGifs();
  return (
    <div>
      <h3>{category}</h3>
    </div>
  );
};
