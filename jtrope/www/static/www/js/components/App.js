import React from "react";

class App extends React.Component {
    constructor(props) {
        // TODO: Replace hardcoded with API call
        super(props);
        const currImg = this.props.images[Math.floor(Math.random()*this.props.images.length)];
        this.state = {currImg: currImg};

        // Bindings
        this._handleClick =this._handleClick.bind(this);
    }

    static defaultProps = {
        images: [
            'http://www.placecage.com/100/100',
            'http://www.placecage.com/200/200',
            'http://www.placecage.com/300/300',
            'http://www.placecage.com/400/400',
        ]
    };

    render() {
        return (
            <div>
                Hi, my name is Jonathan. I like to make cool stuff on the Internet
                <a href="#" onClick={this._handleClick}>Get random image</a>
                <img src={this.state.currImg} />
            </div>
        );
    }

    _handleClick(e) {
        e.preventDefault();
        this.setState({currImg: this._getRandomImg()})
    }

    _getRandomImg() {
        return this.props.images[Math.floor(Math.random()*this.props.images.length)];
    }
}

export default App;
