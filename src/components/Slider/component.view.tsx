import * as React from 'react';
import SliderBase from './component.base';
import SliderItem from './SliderItem/component.vew';
import SliderDots from './SliderDots/component.view';
import SliderArrows from './sliderArrows/component.view';
import * as styles from './styles.view';

export default class Slider extends SliderBase {
    render() {
        const count = this.props.items.length
        return (
            <div 
                className={styles['slider']}
                onMouseOver={this.stopPlay}
                onMouseOut={this.goPlay}
            >
                <ul 
                    className={styles['slider-con']} 
                    style={{
                        width: this.props.items.length * 100 + "%",
                        left: -100 * this.state.curLocal + "%",
                        transitionDuration: this.props.speed + "s",
                    }}
                >
                    {
                        this.props.items.map((item, index) =>  (
                            <SliderItem
                                item={item}
                                count={count}
                                key={'item'+index}
                            />
                        ))
                    }
                </ul>
                <SliderDots 
                    count={count}
                    curLocal={this.state.curLocal}
                    slider={this.slider}
                />
                <SliderArrows slider={this.slider}/>
            </div>
        )
    }
}