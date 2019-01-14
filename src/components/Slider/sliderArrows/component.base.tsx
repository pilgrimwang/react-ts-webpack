import * as React from 'react'

export default class SliderArrowsBase extends React.Component<any, any> {
    static defaultProps = {

    }

    protected handleClickArrows = (num) => {
        this.props.slider(num)
    }
}