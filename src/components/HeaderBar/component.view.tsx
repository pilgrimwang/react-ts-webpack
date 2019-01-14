import * as React from 'react';
import Slider from '../Slider/component.view'
import HeaderBarBase from './component.base';
import * as styles from './styles.view';

export default class HeaderBar extends HeaderBarBase {
    render() {
        return(
            <div className={styles['header']}>
                <div className={styles['header-main']}>
                    <div className={styles['title']}>
                        <span className={styles['logo']}></span>
                        <span className={styles['title-name']}>The Pilgrim</span>
                    </div>
                    <div className={styles['header-menu']}>
                        <ul>
                            <li className={styles['menu-item']}>HOME</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}