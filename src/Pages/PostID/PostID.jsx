import React from 'react';
import s from "./PostID.module.css";
import {NavLink, useLocation} from "react-router-dom";
import PostItem from "../AllPosts/PostItem";
import axios from "axios";
import {useNavigate} from "react-router";

const PostId = ({props}) => {
    let location = useLocation();
    const navigate = useNavigate();

    const redirect = () => {
        navigate("/");
    }
    const handleDelete = () => {
        axios.delete(`http://localhost:7777/posts/${location.state.id}`)
            .then(res => {redirect()})
    }

    return (
        <div className={s.wrapper}>
                <PostItem props={location.state}/>
                <div className={s.actionButtons}>
                    <NavLink to='/edit' state={location}>
                    <button className={s.changeButton} >Изменить</button>
                        </NavLink>
                    <button className={s.deleteButton} onClick={()=> handleDelete()}>Удалить</button>
                </div>


        </div>
    );
};

export default PostId;