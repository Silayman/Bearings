import React, { useState, useEffect } from "react";
import M from "materialize-css";
import { useHistory } from "react-router-dom";

const CreatePost = () => {
  const history = useHistory();
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState("");
  const [imageURL, setImageURL] = useState("");
  useEffect(() => {
    if (imageURL) {
      fetch("/post", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem("jwt") //prettier-ignore
        },
        body: JSON.stringify({
          caption,
          image: imageURL,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.error) {
            M.toast({ html: data.error, classes: "red darken" });
          } else {
            M.toast({ html: "Posted!", classes: "green darken" });
            history.push("/");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [imageURL]);

  const PostImage = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "bearings");
    data.append("cloud_name", "bearings");
    fetch("https://api.cloudinary.com/v1_1/bearings/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setImageURL(data.url);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div
      className="card input-field"
      style={{
        margin: "30px auto",
        maxWidth: "500px",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <input
        type="text"
        placeholder="Write a caption..."
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
      />
      <div className="file-field input-field">
        <div className="btn waves-effect waves-light #000000 grey">
          <span>File</span>
          <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        </div>
        <div className="file-path-wrapper">
          <input className="file-path validate" type="text" />
        </div>
      </div>
      <button
        className="btn waves-effect waves-light #000000 black"
        onClick={() => PostImage()}
      >
        Post!
      </button>
    </div>
  );
};

export default CreatePost;
