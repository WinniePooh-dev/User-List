import { observer } from 'mobx-react-lite';
import React, { Fragment, useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import store from '../../../mobx/store';
import { Context } from '../../../context';
import { User } from '..';

import './styles.scss';

export const UserList = observer (
    ({ location, match, history }) => {
        const { getCurrentState, setActive, loading, page } = useContext(Context);
        const className = classNames({
            'user': true,
            'hidden': loading ? true : false
        });

        useEffect(() => {
            getCurrentState(+location.search.match(/\d+/g));
        }, []);

        const handleShowUserInfo = () => {
            setActive(true);
        }
    
        return (
            <Fragment>
                {store.users.map(user => {
                    return (
                        <Link className={className} key={user.id} to={`/user-list/${user.id}`} onClick={handleShowUserInfo}>
                            <figure>
                                <figcaption>{''.concat(user.first_name, ' ', user.last_name)}</figcaption>
                                <img src={user.avatar} alt={'None'}/>
                                <figcaption>{user.email}</figcaption>
                            </figure>
                        </Link>
                    )
                })}
                <User/>
            </Fragment>
        )
    }
)