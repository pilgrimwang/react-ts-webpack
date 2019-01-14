import * as React from 'react';
import * as styles from './styles';

export default class RootView extends React.Component<any, any> {
    render() {
        const { header, main } = this.props;
        return (
            <div className={styles['view']}>
                {header}
                {main}
            </div>
        )
    }
}