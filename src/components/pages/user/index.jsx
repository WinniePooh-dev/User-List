import React, { useContext, useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import store from '../../../mobx/store';
import { withRouter } from 'react-router-dom';
import { toJS } from 'mobx';

import Api from '../../../api';
import { Loader } from '../../loader';
import { Modal } from '../../modal';
import { Context } from '../../../context';

import './styles.scss';

const User = observer (
    (props) => {
        const [user, setUser] = useState({});
        const [action, setAction] = useState();
        const { setActive } = useContext(Context);
    
        useEffect(() => {
            const { match } = props;
            let timer;
            Api.loadUserInfo(match.params.id).then(response => {
                timer = setTimeout(() => {
                    setUser(response.data)
                }, 1500);
            })
            return () => clearTimeout(timer);
        }, []);
    
        const handleChange = (event, key) => {
            store.updateUser({[key]: event.target.value}, user.id);
            setUser(store.users.find(({ id }) => user.id === id));
        }

        const handleSubmit = event => {
            event.preventDefault();
            switch (action.toUpperCase()) {
                case 'SAVE':
                    console.log(action);
                    break;
                case 'DELETE':
                    console.log(action);
                    break;
            
                default:
                    break;
            }
            setActive(false);
        }

        let renderUserInfo = 
                <Modal>
                    <form onSubmit={handleSubmit}>
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
                        <div>
                            {Array.from({length: 2}, (_, idx) => {
                                let label = idx ? 'Save' : 'Delete'
                                return (
                                    <button onClick={() => setAction(label)} key={idx}>{label}</button>
                                )
                            })}
                        </div>
                    </form>
                </Modal>
        
        return user && Object.keys(user).length ? renderUserInfo : <Loader/>;
    }
)

export default withRouter(User);