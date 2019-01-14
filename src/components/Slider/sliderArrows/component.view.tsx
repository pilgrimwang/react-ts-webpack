import * as React from 'react';
import * as classnames from 'classnames';
import SliderArrowsBase from './component.base';
import * as styles from './styles.view';

export default class SliderArrows extends SliderArrowsBase {
    render() {
        return (
            <div className={styles['slider-arrows-wrap']}>
                <span 
                    className={classnames(styles['slider-arrow'], styles['slider-arrow-left'])}
                    onClick={() => this.handleClickArrows(-1)}
                >
                    &lt;
                </span>
                <span 
                    className={classnames(styles['slider-arrow'], styles['slider-arrow-right'])}
                    onClick={() => this.handleClickArrows(1)}
                >
                    &gt;
                </span>
            </div>
        )
    }
}