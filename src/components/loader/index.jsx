import React from 'react';

import './styles.scss';

export const Loader = () => {
    return [...Array(1)].map((_, key) => {
        return spinner(key);
    });
}

const spinner = key => {
    if (key < 3) {
        return (
            <div key={key} className={`${key ? '' : 'spinner'}`}>
                {spinner(key + 1)}
            </div>
        )
    }
    else return <div>Loading...</div>
}