import React, { useContext } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';

import { Context } from '@/context';

import './styles.scss';

export function Modal({ children, setUser }) {
    const { active, setActive, page, onFinally } = useContext(Context);
    const history = useHistory();
    const { url } = useRouteMatch();

    if (!active) {
        return null;
    }

    const onCloseModalWindow = () => {
        onFinally(history, url, page, setUser);
        setActive(false);
    }

    return (
        <div className="modal">
            <div>
                <h3>confirm action</h3>
                <hr/>
                <span className='close' onClick={onCloseModalWindow}/>
                {children}
            </div>
        </div>
    )
}