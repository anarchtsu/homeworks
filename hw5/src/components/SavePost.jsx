import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import {Post} from "./Post";

const SavePost = ({savePost, value}) => {
    const [content, setContent] = useState('');
    let {postId} = useParams();
    return (
        <div className="post">
            <p>{value === 0 ? "Создать пост" : "Редактировать публикацию"}</p>
            <hr/>
            <form onSubmit={(e) => {
                e.preventDefault()
                let post = new Post(value === 0 ? value : parseInt(postId), content)
                setContent('')
                savePost(post)
            }}>
                <input
                    type="text"
                    id="content"
                    onChange={(e) => {
                        setContent(e.target.value)
                    }}
                    value={content}
                    placeholder="Введите текст поста..."
                    required
                />
                <hr/>
                <button className="button">{value === 0 ? "Опубликовать" : "Сохранить"}</button>
            </form>
        </div>
    );
};

export default SavePost;