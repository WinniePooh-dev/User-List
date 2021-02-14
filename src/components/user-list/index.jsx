import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Api from '../../api';

import './styles.scss';

export const UserList = ({ history, location, match }) => {
    const [ users, setUsers ] = useState([]);

    useEffect(() => {
        console.log(history, location, match)
        Api.loadUsers().then(response => {
            setUsers(response.data).catch(error => console.log(error))
        });
    }, [])

    return (
        <Fragment>
            {users.map(user => {
                return (
                    <Link className="user" key={user.id} to={`/user-list/${user.id}`}>
                        <figure>
                            <figcaption>{''.concat(user.first_name, user.last_name)}</figcaption>
                            <img src={user.avatar} alt={'None'}/>
                            <figcaption>{user.email}</figcaption>
                        </figure>
                    </Link>
                )
            })}
        </Fragment>
    )
}