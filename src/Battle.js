import React, { Component } from 'react'
import { render } from 'react-dom'
import axios from 'axios'
import Kercodes from "../battle.json"

class Hello extends Component {
  constructor() {
    super();
    this.state = {
      honors: 0
    }
  }


  componentDidMount() {
    let {honors} = this.state;

    Kercodes.kercodes.forEach(kercode => {
      axios.get(`https://www.codewars.com/api/v1/users/${kercode}`)
      .then(res => {
        let currentHonor = res.data.honor;
        this.setState(prevstate => ({ honors: prevstate.honors + currentHonor})) 
      })  
    });

  }

  render() {
    let {honors} = this.state;

  return(
    <div>
    <h1>Kercode 5</h1>
    <p>{honors}</p>

    </div>

    )
  }
}

render(
  <Hello />, 
  document.getElementById('root')
)