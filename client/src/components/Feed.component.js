import React, { useState, useEffect } from "react";

const Feed = () => {
  const [feedData, setfeedData] = useState([]);
  useEffect(() => {
    fetch("/feed", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setfeedData(result.posts);
      });
  }, []);
  return (
    <div className="feed input-field">
      {feedData.map((item) => {
        return (
          <div className="card feed-card" key={item._id}>
            <h5>{item.author.name}</h5>
            <div className="card-image">
              <img src={item.image} />
            </div>
            <div className="card-content">
              <h6>{item.caption}'</h6>
              <i className="material-icons left">favorite</i>
              <input type="text" placeholder="Add a comment..."></input>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Feed;
