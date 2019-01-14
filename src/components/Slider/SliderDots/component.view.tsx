import * as React from 'react';
import * as classnames from 'classnames';
import SliderDotsBase from './component.base';
import * as styles from './styles.view.css';

export default class SliderDots extends SliderDotsBase {
    render() {
        let dotNodes = []
        const {count, curLocal} = this.props
        for(let i = 0; i < count; i++) {
            dotNodes[i] = (
                <span
                    className={classnames(styles['slider-dot'],{[styles['slider-dot-selected']]: (i === curLocal)})}
                    key={'dot'+ i}
                    onClick={this.handleClickDot.bind(this, i)}
                >
                </span>
            )
        }
        return (
            <div className={styles['slider-dot-wrap']}>
                {dotNodes}
            </div>
        )
    }
}