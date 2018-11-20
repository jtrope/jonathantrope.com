import React from "react";

class App extends React.Component {
  constructor(props) {
      props.images = ['http://www.placecage.com/200/200', 'http://www.placecage.com/100/100']
      super(props);
      const currImg = this.props.images[Math.floor(Math.random()*this.props.images.length)];
      this.state = {currImg: currImg};
  }

  render() {
      return (
          <div>
              Hi, my name is Jonathan. I like to make cool stuff on the Internet
              <img src={this.state.currImg} />
          </div>
      );
  }
}

export default App;
