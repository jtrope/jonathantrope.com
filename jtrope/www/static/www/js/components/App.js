import React from "react";
import styles from "./App.less"

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
            "http://www.placecage.com/100/100",
            "http://www.placecage.com/200/200",
            "http://www.placecage.com/300/300",
            "http://www.placecage.com/400/400",
        ]
    };

    render() {
        return (
            <div className={styles["splash-page"]}>
                <h1>Jonathan Trope</h1>
                <h2>Hi There. I like to build cool stuff on the web</h2>
                <span className={styles["centered-link"]}>
                    <a href="#" onClick={this._handleClick}>Get random image</a>
                </span>
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
