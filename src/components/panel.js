import React from 'react'

import Link from 'gatsby-link'

export default class Panel extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  render(){
    return (
      <div style={{
        backgroundColor: "#c7bcb1",
        marginBottom: "1.5rem"
      }}>
        <h3 style={{
          width: "100%",
          textAlign: "center",
          padding: "1rem 0",
          backgroundColor: "#57463b",
          fontSize: "2rem",
          color: "#d2cbcb",
          margin: "0",
        }}>
          {this.props.title.toUpperCase()}
        </h3>
        <div style={{padding: "1rem"}}>
          {this.props.children}
          <Link to={"/"+this.props.title.toLowerCase()}>see more...</Link>
        </div>
      </div>
    )
  }
}
