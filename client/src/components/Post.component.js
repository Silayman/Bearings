import React from 'react';

const CreatePost = ()=>{
    return(
        <div className="card input-field" style={{
            margin: "30px auto",
            maxWidth: "500px",
            padding: "20px",
            textAlign: "center",
        }}>
            <input type="text" placeholder="Write a caption..." />
            <div className="file-field input-field">
            <div className="btn waves-effect waves-light #000000 grey">
                <span>File</span>
                <input type="file"/>
            </div>
            <div className="file-path-wrapper">
                <input className="file-path validate" type="text"/>
            </div>
            </div>
            <button className="btn waves-effect waves-light #000000 black">
                    Post!
                </button>
        </div>
    )
}

export default CreatePost;