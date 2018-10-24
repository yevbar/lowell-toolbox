import React from 'react'
import Helmet from 'react-helmet'

import firebase from '../firebase.js'
import * as firebaseui from 'firebaseui'

import Layout from '../components/layout'

export default class SignIn extends React.Component {
  constructor(props){
    super(props);
    this.state = {ui: undefined};
  }
  componentDidMount(){
    //Set up FirebaseUI
    var uiConfig = {
    signInSuccessUrl: '/',
      signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
      ],
      // tosUrl and privacyPolicyUrl accept either url string or a callback
      // function.
      // Terms of service url/callback.
      // tosUrl: '<your-tos-url>',
      // Privacy policy url/callback.
      // privacyPolicyUrl: function() {
      //   window.location.assign('<your-privacy-policy-url>');
      // }
    };

    //Initialize FirebaseUI
    this.setState({
      ui: new firebaseui.auth.AuthUI(firebase.auth())
    }, () => {
      this.state.ui.start('#firebaseui-auth-container', uiConfig);
    });
  }
  render(){
    return (
      <Layout page="SignIn" name="Alex">
        <Helmet>
          <link type="text/css" rel="stylesheet" href="node_modules/firebaseui/dist/firebaseui.css" />
        </Helmet>
        <div id="firebaseui-auth-container"></div>
      </Layout>
    )
  }
}
