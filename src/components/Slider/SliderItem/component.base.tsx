import * as React from 'react'

export default class SliderItemBase extends React.Component<any, any> {
    static defaultProps = {
        count: 1,
        item: {
            src: '',
            alt: ''
        }
    }
}