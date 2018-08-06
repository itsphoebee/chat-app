import React, { Component } from 'react';
import MessagesList from './MessagesList'
import MessageForm from './MessageForm'

export default class Chat extends Component {
  render() {
    const { username } = this.props
    return (
      <div className="chat-app">
        <h1>Welcome, {username}</h1>
        <MessagesList />
        <MessageForm />
      </div>
    )
  }
}
