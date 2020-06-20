import React from 'react';
const Profile = ()=>{
    return(
        <div style={{maxWidth: "600px", margin: "0px auto"}}>
            <div style={{
                display: "flex",
                justifyContent: "space-around",
                margin: "20px 0px",
                borderBottom: "1px solid grey"
            }}>
                <div>
                    <img style={{width: "150px", height: "150px", borderRadius:"75px"}}
                    src="https://images.unsplash.com/photo-1559254232-5ef04905902a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                    />
                </div>
                <div>
                    <h4>
                        Tony Hawk
                    </h4>
                    <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "110%"
                    }}>
                        <h6>40 Posts</h6>
                        <h6>100 Followers</h6>
                        <h6>100 Following</h6>
                    </div>
                </div>
            </div>
            <div className="posts">
                <img className="post" src="https://images.unsplash.com/photo-1564737417092-cacab29f48dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"/>
                <img className="post" src="https://images.unsplash.com/photo-1564737417092-cacab29f48dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"/>
                <img className="post" src="https://images.unsplash.com/photo-1564737417092-cacab29f48dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"/>
                <img className="post" src="https://images.unsplash.com/photo-1564737417092-cacab29f48dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"/>
                <img className="post" src="https://images.unsplash.com/photo-1564737417092-cacab29f48dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"/>
                <img className="post" src="https://images.unsplash.com/photo-1564737417092-cacab29f48dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"/>

            </div>
        </div>
    )
}


export default Profile;