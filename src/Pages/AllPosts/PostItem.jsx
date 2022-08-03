import React from 'react';
import s from "./PostItem.module.css";
import {Link, NavLink} from "react-router-dom";

const PostItem = ({props}) => {

    return (
        <>
            <NavLink to='/post' state={props}>
            <div className={s.post}>
                <div className={s.contentWrapper}>
                    <div className={s.title}>
                        <div className={s.avatar}></div>
                        <div className={s.titleInner}>
                            <span>Павел Моисейко</span>
                            <div className={s.nameDescription}>
                                <span>Основатель группы</span>
                                <span>· 4 мин.</span>
                            </div>

                        </div>
                    </div>
                    <div className={s.content}>{props.content}</div>
                </div>

                <div className={s.reaction}>
                    <div className={s.like}>👍 Нравится</div>
                    <div className={s.commentIcon}>💬 Комментировать</div>
                </div>

                <div className={s.comment}>
                    <div className={s.commentAvatar}></div>
                    <input type="text" placeholder='    Напишите комментарий...' size="70"/>
                </div>
            </div>
            </NavLink>
        </>
    );
};

export default PostItem;