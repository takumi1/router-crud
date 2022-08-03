import React from 'react';
import s from './NewPost.module.css'
import {NavLink} from "react-router-dom";
import axios from 'axios';
import {useNavigate} from "react-router";

const NewPost = () => {
    const inputField = React.useRef(null);
    const navigate = useNavigate();

    const redirect = () => {
        navigate("/");
    }
    const createPost = () => {
        axios.post(`http://localhost:7777/posts`, {"id": 0, "content": inputField.current.value})
            .then(res => {
                redirect()
            })
    }

    return (
        <div className={s.wrapper}>
            <div className={s.tabsWrapper}>
                    <div className={s.tabs}>
                        <div className={s.publication}>✎ Публикация</div>
                        <div className={s.photo}>📷 Фото/видео</div>
                        <div className={s.stream}>📹Прямой эфир</div>
                        <div className={s.more}> ··· Ещё</div>
                    </div>
                    <div className={s.closeInner}>
                        <div className={s.close}><NavLink to='/'>✖</NavLink></div>
                    </div>
            </div>
            <div className={s.post}>
                <div className={s.avatar}></div>
                <input type={s.text} ref={inputField} size="70" placeholder='   Введите текст поста...'/>
            </div>
            <div className={s.createPost}>

                <button className={s.publish} onClick={() => createPost()}>Опубликовать</button>
            </div>
        </div>
    );
};

export default NewPost;