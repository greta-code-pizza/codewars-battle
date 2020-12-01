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
    <p><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-award-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 0l1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864 8 0z"/>
  <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z"/>
</svg>{honors}</p>

    </div>

    )
  }
}

render(
  <Hello />, 
  document.getElementById('root')
)