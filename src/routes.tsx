import * as React from 'react';
import { Router, hashHistory } from 'react-router';
import HeaderBar from './components/HeaderBar/component.view';

export default class Routes extends React.Component<any, any> {

    routes= [
        {
            path: '/',
            getComponent(nextState, callback) {
                require.ensure([], require => {
                    callback(null, require('./views/Root/view').default);
                })
            },
            indexRoute: {
                getComponents: (nextState, callback) => {
                    require.ensure([], require => {
                        const IndexView = require('./views/IndexView/view').default;
                        callback(null, {
                            header: () => (
                                <HeaderBar/>
                            ),
                            main: ({location, history}) => (
                                <IndexView
                                    history={history}
                                />
                            )
                        })
                    })
                }
            },
            childRoutes: [
                {
                    path: 'home',
                    getComponents: async (nextState, callback) => {
                        require.ensure([], require => {
                            const HomeView = require('./views/Home/view').default;
                            callback(null, {
                                header: () => {
                                    <HeaderBar/>
                                },
                                main: ({location, history}) => {
                                    <HomeView/>
                                }
                            })
                        })
                    }
                }
            ]
        }
    ]

    render() {
        return(
            <Router
                routes={this.routes}
                history={hashHistory}
            />
        )
    }
}