import * as React from 'react';
import { Router, hashHistory } from 'react-router';

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
                        const HeaderBar = require('./components/HeaderBar/component.view').default;
                        const IndexView = require('./views/IndexView/view').default;
                        callback(null, {
                            header: () => (
                                <HeaderBar/>
                            ),
                            main: () => (
                                <IndexView/>
                            )
                        })
                    })
                }
            }
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