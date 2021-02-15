import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Api from '../../api';
import store from '../../mobx/store';

import LayOut from '../layout';
import { UserList } from '../user-list';
import User from '../user';

import './styles.scss';

class App extends Component {

    componentDidMount = () => {
        Api.loadUsers().then(response => {
            store.getUsers(response.data)
        });
    }

    render() {
        return (
            <Fragment>
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <Redirect to='/user-list'/>
                        </Route>
                        <Route exact path="/user-list" render={(props) => {
                            return (
                                <LayOut>
                                    <UserList {...props}/>
                                </LayOut>
                            )
                        }}/>
                        <Route path="/user-list/:id" component={User}/>
                    </Switch>
                </Router>
            </Fragment>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.querySelector('#user-list')
);