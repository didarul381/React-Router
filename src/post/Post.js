import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Postdtails from '../postdtails/Postdtails';

const Post = () => {
    const posts=useLoaderData();
    //console.log(posts)
    return (
        <div>
            <h2>This is post</h2>  
           {
             posts.slice(0,10).map(post=><Postdtails key={post.id} post={post}></Postdtails>)
           }
        </div>
    );
};

export default Post;