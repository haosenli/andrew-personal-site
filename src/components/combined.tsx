import React, { Component } from 'react'
import Navbar from './navbar'
import Title from './title'

class Combined extends Component {
  render() {
    return (
        <div>
            <Navbar />
            <Title />
        </div>
        );
    }
}

export default Combined;