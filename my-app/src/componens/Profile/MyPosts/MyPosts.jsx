import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let posts = [
        {message: 'Hi, how are you?', id: 1, likesCount: 15 + '\uD83D\uDC4D'},
        {message: "It's my first post", id: 2, likesCount: 11 + String.fromCodePoint(0x1F497)},
        {message: "It's my second post", id: 3, likesCount: 42 + '💗'},
        {message: 'YO', id: 4},
        {message: 'YO', id: 5},
        {message: 'YO', id: 6},
    ];

    let postsElements = posts.map( p => <Post message={p.message} likesCount={p.likesCount} />)
    return (
        <div className={s.postsBlock}>
            <h3>
                My posts
            </h3>
            
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>

            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;