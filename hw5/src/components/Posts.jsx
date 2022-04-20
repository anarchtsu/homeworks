import React from 'react';
import {Link, useNavigate} from "react-router-dom";

const Posts = ({posts}) => {
    const navigate = useNavigate();

    const redirect = (e, link) => {
        e.preventDefault()
        navigate(link)
    }

    return (
        <div>
            <div className="header">
                <Link className="button" to="/posts/new">Создать пост</Link>
            </div>
            {posts.map(post =>
                <div className="post" onClick={e => redirect(e, "/post/" + post.id)}>
                    <div style={{display: 'flex'}}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/d/d3/Microsoft_Account.svg"
                             alt="user_img"/>
                        <p style={{marginLeft: '1rem'}}>User name</p>
                    </div>
                    <hr/>
                    <p>{post.content}</p>
                </div>
            )}
        </div>
    );
};

export default Posts;
