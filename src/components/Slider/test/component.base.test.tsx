import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { shallow } from 'enzyme'
import Slider from '../component.view';

describe('Slider', () => {
    let wrapper, instance, prevState
    const images = [
        {
            src: '',
            alt: 'image1'
        },
        {
            src: '',
            alt: 'image2'
        },
        {
            src: '',
            alt: 'image3'
        },
        {
            src: '',
            alt: 'image4'
        },
        {
            src: '',
            alt: 'image5'
        }
    ]

    beforeEach(() => {
        wrapper = shallow(<Slider items={images} />)
        instance = wrapper.instance()

        prevState = instance.state
    })

    afterEach(() => {

    })

    describe('组件 测试', () => {
        it('五个item', () => {
            wrapper = shallow(<Slider items={images} />)
            instance = wrapper.instance()

            expect(instance.state).toEqual({
                ...prevState,
                curLocal: 0
            })
        })
    })
})