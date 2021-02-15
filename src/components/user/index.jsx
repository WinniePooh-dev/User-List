import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import store from '../../mobx/store';
import { withRouter } from 'react-router-dom';

import Api from '../../api';

import './styles.scss';

const User = observer (
    (props) => {
        const [user, setUser] = useState({});
    
        useEffect(() => {
            const { match } = props;
            Api.loadUserInfo(match.params.id).then(response => {
                setUser(response.data);
            })
        }, []);
    
        const handleChange = (event, key) => {
            store.updateUser({[key]: event.target.value}, user.id)
        }
        
        return (
            <form>
                <img src={user.avatar} alt={'None'}/>
                {Object.keys(user).map((value, key) => {
                    if (value !== 'id' && value !== 'avatar') {
                        let label = value.split('_').join(' ');
                        return (
                            <span key={key}>
                                <label>{label}</label>
                                <input value={user[value]} type={'text'} onChange={e => handleChange(e, value)}/>
                            </span>
                        )
                    }
                })}
            </form>
        )
    }
)

export default withRouter(User);