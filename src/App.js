import React, { Component } from 'react';
import Loadable from 'react-loadable';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Route, Switch, NavLink } from 'react-router-dom';

import { setMessage } from 'actions';

// import logo from './logo.svg';
import './App.scss';


const AsyncComponent = Loadable({
    loader: () => import(/* webpackChunkName: "myNamedChunk" */ './SomeComponent'),
    loading: () => <div>loading...</div>,
    modules: ['myNamedChunk'],
});

const AsyncPageDefault = Loadable({
    loader: () => import(/* webpackChunkName: "pageDefault" */ './PageDefault'),
    loading: () => <div>loading page...</div>,
    modules: ['pageDefault'],
});

const AsyncPageAnother = Loadable({
    loader: () => import(/* webpackChunkName: "pageAnother" */ './PageAnother'),
    loading: () => <div>loading another page...</div>,
    modules: ['pageAnother'],
});

class App extends Component {
    componentDidMount() {
        console.log('window ==>', window);
        this.props.setMessage();
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src="./logo.svg" className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <div className="App-intro">
                    <h2>Part 1: Async component</h2>
                    <AsyncComponent />

                    <hr />

                    <h2>Part 2: Redux store</h2>
                    <p>
                        Redux: { this.props.message }
                    </p>

                    <hr />

                    <h2>Part 3: React router</h2>
                    <nav>
                        <NavLink to="/" exact activeClassName="active">Home</NavLink>
                        <NavLink to="/another" activeClassName="active">Another page</NavLink>
                    </nav>
                    <Switch>
                        <Route path="/" exact component={AsyncPageDefault} />
                        <Route path="/another" component={AsyncPageAnother} />
                    </Switch>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ message }) => {
    return message;
}

export default withRouter(
    connect(mapStateToProps, {
        setMessage
    })(App)
)