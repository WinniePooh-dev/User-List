import React, { useContext } from 'react';

import { Context } from '../../context';

import './styles.scss';

export function Modal({ children }) {
    const { active, setActive } = useContext(Context);
    return (
        <div className="modal">
            <div>
                <h3>confirm action</h3>
                {children}
            </div>
        </div>
    )
}