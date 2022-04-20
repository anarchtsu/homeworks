import React, {useEffect, useState} from 'react';
import {Route, Routes, useNavigate} from "react-router-dom";
import ViewPost from "./ViewPost";
import SavePost from "./SavePost";
import Posts from "./Posts";
import axios from "axios";
import {Post} from './Post'

const AppRouter = () => {
    const navigate = useNavigate();
    const URL = 'http://localhost:7777/posts';
    const [posts, setPosts] = useState([]);

    const updatePosts = async () => {
        let response = await axios.get(URL);
        let responsePosts = response.data.map(x => new Post(x.id, x.content));
        setPosts(responsePosts);
    }

    const savePost = async (post) => {
        await axios.post(URL, post);
        await updatePosts()
        navigate('/');
    }

    const deletePost = async (e, id) => {
        e.preventDefault();
        await axios.delete(URL + '/' + id);
        await updatePosts()
        navigate('/');
    }

    useEffect(() => updatePosts, []);

    return (
        <Routes>
            <Route path="/" element={<Posts posts={posts}/>}/>
            <Route path="/post/:postId" element={<ViewPost posts={posts} deletePost={deletePost}/>}/>
            <Route path="/posts/:postId/edit" element={<SavePost savePost={savePost}/>}/>
            <Route path="/posts/new" element={<SavePost savePost={savePost} value={0}/>}/>
            <Route path="*" element={<Posts posts={posts}/>}/>
        </Routes>
    );
};

export default AppRouter;
