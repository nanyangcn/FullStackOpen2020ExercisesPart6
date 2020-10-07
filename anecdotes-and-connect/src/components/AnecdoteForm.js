import React from 'react'
import { connect } from 'react-redux'

import { createNewAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {
  const handleCreateAnecdote = async (event) => {
    event.preventDefault()
    const anecdoteContent = event.target.anecdote.value
    event.target.anecdote.value = ''
    props.createNewAnecdote(anecdoteContent)
    props.setNotification(`new anecdote '${anecdoteContent}'`, 5)
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={handleCreateAnecdote}>
        <div>
          <input name='anecdote' />
        </div>
        <button type='submit'>create</button>
      </form>
    </div>
  )
}

const mapDispatchToProps = {
  createNewAnecdote,
  setNotification,
}

const ConnectedAnecdoteForm = connect(null, mapDispatchToProps)(AnecdoteForm)

export default ConnectedAnecdoteForm
