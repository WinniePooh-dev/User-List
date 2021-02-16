import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Api from '../../api';
import { Context } from '../../context';
import store from '../../mobx/store';

import LayOut from '../layout';
import { UserList, User } from '../pages';
import { Pagination } from '../pagination';

import './styles.scss';

class App extends Component {
    state = {
        page: 1,
        per_page: 0,
        total: 0,
        total_pages: 0
    }

    componentDidMount = () => {
        Api.loadUsers().then(response => {
            console.log(response)
            const { page, per_page, total, total_pages } = response;
            this.setState({
                page,
                per_page,
                total,
                total_pages
            })
            return response;
        }).then(response => {
            store.getUsers(response.data)
        });
    }

    handleSwitchPage = (event, page) => {
        event.preventDefault();
        this.setState({ page });
        Api.loadUsers(page).then(response => {
            console.log(response);
            store.getUsers(response.data);
        });
    }

    render() {
        const { page, per_page, total, total_pages } = this.state;
        return (
            <Fragment>
                <Context.Provider value={{ page, per_page, total, total_pages, onSwitchPage: this.handleSwitchPage }}>
                    <Router>
                        <Switch>
                            <Route exact path="/">
                                <Redirect to='/user-list'/>
                            </Route>
                            <Route exact path="/user-list" render={(props) => {
                                return (
                                    <Fragment>
                                        <LayOut>
                                            <UserList {...props}/>
                                        </LayOut>
                                        <Pagination/>
                                    </Fragment>
                                )
                            }}/>
                            <Route path="/user-list/:id" component={User}/>
                        </Switch>
                    </Router>
                </Context.Provider>
            </Fragment>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.querySelector('#user-list')
);