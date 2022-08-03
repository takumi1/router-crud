import React, {useState} from 'react';
import s from './Edit.module.css'
import {NavLink, useLocation} from "react-router-dom";
import axios from "axios";


const Edit = () => {
    const [redaction, setRedaction] = useState(true)
    const inputField = React.useRef(null);
    let location = useLocation();

    const createPost = () => {
        axios.post(`http://localhost:7777/posts`, {"id": location.state.state.id, "content": inputField.current.value})
            .then(res => {
                setRedaction(false)
            })
    }

    return (
        <div className={s.wrapper}>
            <div className={s.title}>
                <div className={s.titleText}>Редактировать публикацию</div>

                    <div className={s.closeButton}><NavLink to='/'>✖</NavLink></div>


            </div>
            <div className={s.post}>
                <div className={s.avatar}></div>
                <div className={s.postText}>
                    {
                        redaction ?
                            <input type="text" ref={inputField} placeholder='   Введите новый текст публикации' size='50'/> :
                            <div className={s.enteredValue}>{inputField.current.value}</div>

                    }

                </div>
            </div>
            <div className={s.actions}>
                <div className={s.firstColumn}><div className={s.photo}>🌄 Фото/видео</div>
                    <div className={s.emo}>🙂 Чувства/действия</div>
                    <div className={s.gif}>🖺 GIF</div></div>
                <div className={s.secondColumn}><div className={s.markFriends}>🧍 Отметить друзей</div>
                    <div className={s.markLocation}>📍 Отметить посещение</div></div>


            </div>
            <div className={s.saveButtonWrapper}>
                <button className={s.saveButton} onClick={() => createPost()}>Сохранить</button>

            </div>
        </div>
    );
};

export default Edit;