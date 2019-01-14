import * as React from 'react'

export default class SliderBase extends React.Component<any, any> {
    static defaultProps = {
        autoplay: true,
        delay: 2,
        speed: 1
    }

    state = {
        curLocal: 0
    }
    
    autoPlayFlag = null

    componentDidMount() {
        this.goPlay();
    }

    /**
     * 自动播放
     */
    protected goPlay = () => {
        if(this.props.autoplay) {
            this.autoPlayFlag = setInterval(() => {
                this.slider(1)
            }, this.props.delay * 1000)
        }
    }

    /**
     * 暂停播放
     */
    protected stopPlay = () => {
        clearInterval(this.autoPlayFlag)
    }

    /**
     * 显示第几个
     */
    protected slider = (num) => {
        let newNum = this.state.curLocal + num
        if(newNum < 0 ) {
            newNum += this.props.items.length
        }else if(newNum >= this.props.items.length) {
            newNum -= this.props.items.length
        }
        this.setState({
            curLocal: newNum
        })
    }
}