import * as React from 'react';
import Slider from '../../components/Slider/component.view'
import * as styles from './styles.css';

const IMAGE = [
    {
        src: require('./assets/iamge1.gif'),
        alt: 'image1'
    },
    {
        src: require('./assets/item2.jpg'),
        alt: 'image2'
    },
    {
        src: require('./assets/item3.jpg'),
        alt: 'image3'
    },
    {
        src: require('./assets/item4.jpg'),
        alt: 'image4'
    },
    {
        src: require('./assets/item5.jpg'),
        alt: 'image5'
    }
]
export default class IndexView extends React.Component<any, any> {
    render() {
        return(
            <div className={styles['index']}>
                <div className={styles['slider']}>
                    <Slider
                        items={IMAGE}
                    />
                </div>
            </div>
        )
    }
}