import React, {useEffect, useState} from 'react';
import s from './AllPosts.module.css'
import {NavLink} from "react-router-dom";
import axios from "axios";
import PostItem from "./PostItem";


const AllPosts = () => {
    useEffect(() => {
        getPosts()

    }, []);
    const [posts, setPosts] = useState([])
    const getPosts = () => {
        axios.get(`http://localhost:7777/posts`)
            .then(res => {
                setPosts(res.data)
            })

    }

    return (
        <div className={s.wrapper}>
            <div className={s.createPost}>
                <button className={s.createPostButton}><NavLink className={s.navlink} to='/newpost'>Создать пост</NavLink></button>
            </div>
            {posts.map((item, index) =>

                <PostItem key={index} props={item}/>
            )}

        </div>
    );
};

export default AllPosts;