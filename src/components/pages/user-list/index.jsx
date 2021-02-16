import { observer } from 'mobx-react-lite';
import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Api from '../../../api';
import store from '../../../mobx/store';

import './styles.scss';

export const UserList = observer (
    ({ history, location, match }) => {
        // const [ users, setUsers ] = useState([]);
    
        // useEffect(() => {
        //     Api.loadUsers().then(response => {
        //         store.getUsers(response.data)
        //     });
        // }, [])
    
        return (
            <Fragment>
                {store.users.map(user => {
                    return (
                        <Link className="user" key={user.id} to={`/user-list/${user.id}`}>
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