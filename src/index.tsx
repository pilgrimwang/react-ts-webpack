import * as React from 'react';
import { render } from 'react-dom';
import Routes from './routes';

function bootstrap() {
    render(
        <Routes/>,
        document.getElementById('root')
    )
}

bootstrap()