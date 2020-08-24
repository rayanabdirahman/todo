import React from 'react';

export default class Title extends React.Component {
  render() {
    // return (`
    //   <h${this.props.level}>
    //     ${this.props.text}
    //   </h${this.props.level}>
    // `)
    const HeaderLevel = `${this.props.level}`
    return (
      <HeaderLevel>{this.props.text}</HeaderLevel>
    )
  }
}