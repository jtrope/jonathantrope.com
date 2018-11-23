import React from "react";
import styles from "./App.less"
import request from 'superagent';
import ajaxLoader from '../images/ajax-loader.gif';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currImg: null,
            loading: true,
        };

        // Bindings
        this._handleClick =this._handleClick.bind(this);
    }

    componentDidMount() {
        // TODO: Put base url in config
        const _this = this;
        request
            .get('http://127.0.0.1:8000/images/')
            .end(function(err, res){
                const data = res.body;
                if (err) {
                    // TODO: handle gracefully lol
                    console.log("Oh uh, spaghettio")
                } else {
                    _this.setState({
                        loading: false,
                        currImg: _this._getRandomImg(data),
                        images: data
                    })
                }
        });
    }

    render() {
        let imgSrc;

        if (this.state.loading) {
            imgSrc = ajaxLoader;
        } else {
            imgSrc = this.state.currImg.url;
        }
        return (
            <div className={styles["splash-page"]}>
                <h1>Jonathan Trope</h1>
                <h2>Hi There. I like to build cool stuff on the web</h2>
                <span className={styles["centered-link"]}>
                    <a href="#" onClick={this._handleClick}>Get random</a>
                </span>
                <img src={imgSrc} />
            </div>
        );
    }

    _handleClick(e) {
        e.preventDefault();
        this.setState({currImg: this._getRandomImg(this.state.images)})
    }

    _getRandomImg(images) {
        const getRandom = function(data) {
            return data[Math.floor(Math.random()*data.length)]
        };

        let img = getRandom(images);
        if (!this.state.currImg || images.length === 1) {
            return img;
        }

        // If the random image is the same as the current one, keep trying
        while (img.file_name === this.state.currImg.file_name) {
            img = getRandom(images);
        }

        return img
    }
}

export default App;
