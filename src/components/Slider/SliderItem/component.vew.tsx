import * as React from 'react'
import SliderItemBase from './component.base';
import * as styles from './styles.view'

export default class SliderItem extends SliderItemBase {
    render() {
        const { count, item } = this.props
        const width = 100 / count + '%'
        return (
            <li className={styles['slider-item']} style={{width: width}}>
                <img className={styles['slider-img']} src={item.src} alt={item.alt} />
            </li>
        )
      }
}