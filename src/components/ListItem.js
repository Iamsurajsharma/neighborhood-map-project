import React, { Component } from 'react'

export default class ListItem extends Component {
  render() {
    return (
      <div>
                <li onClick={()=> this.props.handleListItem(this.props)}>{this.props.name} </li>
      </div>
    )
  }
}
