import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { UserList } from '../user-list.js';

import './styles.scss';

class App extends Component {
    render() {
        return (
            <Fragment>
                <UserList/>
            </Fragment>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.querySelector('#user-list')
);