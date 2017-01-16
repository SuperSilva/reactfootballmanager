import React, { Component } from "react"
import db from '../db/firebaseinit' //firebase stuff


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  componentDidMount() {
    this.interval = setInterval(
      this.increment.bind(this),
      1000
    )
    
  }

  componentWillMount() {
    //this must be put in store
    const players = db.ref('/players')
    players.once('value', snap => {
      let player = snap.val();
      console.log(players);
      //players.push({"archived":false,"name":"piroca","physicalCondition":"excelente","position":"offensive","score":300});

    })
    .catch((error) => {
      console.log(error);
    });

  }
    
  increment() {
    this.setState(({ counter }) => {
      return {counter: counter + 1};
    });
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    const { counter } = this.state;
    return (
      <header>
        <div>Webpack is doing its thing with React and ES2015</div>
        <div>{counter}</div>
      </header>
    );
  }
}
