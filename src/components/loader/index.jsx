import React from 'react';

import './styles.scss';

export const Loader = () => {
    return spinner(0,3);
}

const spinner = (key, N) => {
    if (key < N) {
        return (
            <div key={key} className={`${key ? '' : 'spinner'}`}>
                {spinner(key + 1, N)}
            </div>
        )
    }
    else return <div>Loading...</div>
}