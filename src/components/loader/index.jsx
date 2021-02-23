import React, { useContext, useEffect } from 'react';

import { Context } from '../../context';

import './styles.scss';

export const Loader = () => {
    const { setLoading } = useContext(Context);

    useEffect(() => {
        setLoading(true);
        return () => setLoading(false);
    }, [])

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