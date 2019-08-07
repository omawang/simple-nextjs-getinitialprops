import React, { Component } from 'react'
import { placeholder as api } from '../services/Api'

class UserNotSSR extends Component {
  constructor() {
    super()
    this.state = {
      title: 'List User Not SSR',
      users: []
    }
  }

  async componentDidMount() {
    const res = await api.get('/users')
    this.setState({ users: res.data })
  }

  render() {
    const { users } = this.state
    return (
      <div>
        <p className="title">{this.state.title}</p>
        <ul>
          {users.length > 0 ? (
            users.map((user, index) => <li key={index}>{user.name}</li>)
          ) : (
            <h3>Please Wait</h3>
          )}
        </ul>
      </div>
    )
  }
}

export default UserNotSSR
