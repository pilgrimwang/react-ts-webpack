import * as React from 'react';
import * as styles from './styles.view';

export default class HeaderBar extends React.Component<any, any> {
    render() {
        return(
            <div className={styles['header']}>
                <div className={styles['head-main']}>
                    <div className={styles['logo']}>W</div>
                </div>
            </div>
        )
    }
}