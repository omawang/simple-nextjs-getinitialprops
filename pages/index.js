import React, { Component } from 'react'
import { placeholder as api } from '../services/Api'
import '../styles/index.style.scss'
import UserNotSSR from '../components/UserNotSSR'

class Index extends Component {
  static async getInitialProps() {
    const res = await api.get('/users')
    return { users: res.data }
  }

  constructor() {
    super()
    this.state = {
      title: 'List Users SSR'
    }
  }

  async fetchData() {
    const res = await api.get('/users')
    return res.data
  }

  render() {
    return (
      <div>
        <h1>getInitialProps works only in pages folder</h1>
        <h3>View Page Source to see the differents</h3>
        <br />
        <p className="title">{this.state.title}</p>
        <ul>
          {this.props.users.map((user, index) => (
            <li key={index}>{user.name}</li>
          ))}
        </ul>

        <hr />

        <UserNotSSR />
      </div>
    )
  }
}

export default Index
