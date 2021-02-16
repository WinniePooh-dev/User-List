import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

import { Context } from '../../context';

import './styles.scss';

export const Pagination = () => {
    return (
        <Context.Consumer>
            {({ page, total_pages, onSwitchPage }) => (
                <h2>
                    <nav className={'pagination'}>
                        <ul>
                            {[...Array(total_pages)].map((_, current_page) => {
                                current_page = ++current_page;
                                return (
                                    <li key={current_page} className={`page ${current_page === page ? 'active' : ''}`}>
                                        <Link to={`/user-list?page=${current_page}`}
                                              onClick={e => onSwitchPage(e, current_page)}>
                                            {current_page}
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>
                </h2>
            )}
        </Context.Consumer>
    )
}