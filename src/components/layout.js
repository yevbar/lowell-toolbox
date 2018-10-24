import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import firebase from '../firebase.js'

import Header from './header'
import Link from 'gatsby-link'
import './layout.css'

class Layout extends React.Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <div style={{position: "relative"}}>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                { name: 'description', content: 'Everything a Lowellite could need in one place.' }
              ]}
            >
              <html lang="en" />
            </Helmet>
            <Header siteTitle={data.site.siteMetadata.title} />
            <TopStuff page={this.props.page} />
            <div
              style={{
                margin: '0 auto',
                maxWidth: 960,
                padding: '0px 1.0875rem 1.45rem',
                paddingTop: 0,
                backgroundColor: "#e2dad2"
              }}
            >
              {this.props.children}
            </div>
          </div>
        )}
      />
    )
  }
}

class TopStuff extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      signedIn: false, name: undefined
    };
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        this.setState({
          signedIn: true,
          name: firebase.auth().currentUser.displayName
        });
      } else {
        // No user is signed in.
        this.setState({
          signedIn: false,
          name: undefined
        });
      }
    });
  }
  componentDidMount(){
    if(firebase.auth().currentUser != null){
      this.setState({
        signedIn: true,
        name: firebase.auth().currentUser.displayName
      });
    }
    else this.setState({
      signedIn: false,
      name: undefined
    });
  }
  render(){
    if (this.state.signedIn) {
      return (
        <div style={{display: "flex", justifyContent: "space-around"}}>
          <h2 style={{
          }}>
            {this.state.name.toLowerCase()}'s {this.props.page.toLowerCase()}.
          </h2>
          <div style={{
          }}>
            <Link to="/settings">my settings</Link><br />
            <Link to="/signout">sign out</Link><br />
          </div>
        </div>
      )
    } else {
      return (
        <div style={{display: "flex", justifyContent: "space-around"}}>
          <h2 style={{
          }}>
            your {this.props.page.toLowerCase()}.
          </h2>
          <div style={{
          }}>
            <Link to="/signin">sign in</Link>
          </div>
        </div>
      )
    }
  }
}

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default Layout
