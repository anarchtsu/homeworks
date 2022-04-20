import React from 'react';
import {Link, useParams} from "react-router-dom";

const ViewPost = ({posts, deletePost}) => {
    let { postId } = useParams();
    let post = posts.find(p => parseInt(p.id) === parseInt(postId));
    return (
        <div className="post">
            <div style={{display: 'flex'}}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d3/Microsoft_Account.svg"
                     alt="user_img"/>
                <p style={{marginLeft: '1rem'}}>User name</p>
            </div>
            <hr/>
            <p>{post.content}</p>
            <hr/>
            <Link className="button" to={"/posts/" + post.id + "/edit"}>Изменить</Link>
            <button className="button danger" onClick={e => deletePost(e, post.id)}>Удалить</button>
        </div>
    );
};

export default ViewPost;
