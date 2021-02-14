import React from 'react';

import './styles.scss';

export default function(props) {
    return (
        <div className={'layout'}>
            {props.children}
        </div>
    )
}