import * as React from 'react';
import { noop } from 'lodash';

export default class SliderDotsBase extends React.Component<any, any> {
    static defaultProps = {
        slider: noop
    }

    protected handleClickDot = (index) => {
        this.props.slider(index - this.props.curLocal)
    }
}