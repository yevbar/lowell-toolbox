import React from 'react'
import { Link } from 'gatsby'

import Panel from '../components/panel'
import Layout from '../components/layout'

const IndexPage = () => (
  <Layout page="dashboard" name="Alex">
    <div style={{
      display: "flex",
      justifyContent: "space-evenly"
    }}>
      <Column>
        <Panel title="homework">
        </Panel>
      </Column>
      <Column>
        <Panel title="schedule">
        </Panel>
        <Panel title="updates">
        </Panel>
      </Column>
    </div>
  </Layout>
)

class Column extends React.Component {
  render(){
    return (
      <div style={{width: "50%", padding: "1.5rem", boxSizing: "border-box"}}>
        {this.props.children}
      </div>
    )
  }
}

export default IndexPage
