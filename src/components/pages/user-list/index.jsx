import { observer } from 'mobx-react-lite';
import React, { Fragment, useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import store from '../../../mobx/store';
import { Context } from '../../../context';

import './styles.scss';

export const UserList = observer (
    ({ location }) => {
        const { getCurrentState, setActive } = useContext(Context);

        useEffect(() => {
            getCurrentState(+location.search.match(/\d+/g));
        }, [])

        const handleShowUserInfo = () => {
            setActive(true);
        }
    
        return (
            <Fragment>
                {store.users.map(user => {
                    return (
                        <Link className="user" key={user.id} to={`/user-list/${user.id}`} onClick={handleShowUserInfo}>
                            <figure>
                                <figcaption>{''.concat(user.first_name, ' ', user.last_name)}</figcaption>
                                <img src={user.avatar} alt={'None'}/>
                                <figcaption>{user.email}</figcaption>
                            </figure>
                        </Link>
                    )
                })}
            </Fragment>
        )
    }
)