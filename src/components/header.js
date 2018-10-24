import React from 'react'
import { Link } from 'gatsby'

class Header extends React.Component {
  render() {
    return (
      <div
        style={{
          background: '#fc5e53',
          marginBottom: '1.45rem',
        }}
      >
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '1.45rem 1.0875rem',
          }}
        >
          <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: 'white',
                textDecoration: 'none',
              }}
            >
              Lowell Dashboard
            </Link>
          </h1>
          <div style={{
            display: "flex",
            flexDirection: "columns",
            marginTop: "1rem",
            justifyContent: "space-between",
            maxWidth: "30rem",
            textDecoration: "none",
            overflowX: "hidden"
          }}>
            <NavItem to="/">dashboard</NavItem>
            <NavItem to="/homework">homework</NavItem>
            <NavItem to="/schedule">schedule</NavItem>
            <NavItem to="/updates">updates</NavItem>
            <NavItem to="/chat">chat</NavItem>
            <NavItem to="/me">me</NavItem>
          </div>
        </div>
      </div>
    )
  }
}

class NavItem extends React.Component {
  render(){
    return (
      <Link style={{
        fontStyle: "italic",
        color: "#edeaea",
        marginRight: "1rem"
      }} to={this.props.to}>
        {this.props.children}
      </Link>
    )
  }
}

export default Header
