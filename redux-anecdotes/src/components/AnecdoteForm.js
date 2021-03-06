import React from 'react'
import { useDispatch } from 'react-redux'
import { createNewAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const handleCreateAnecdote = async (event) => {
    event.preventDefault()
    const anecdoteContent = event.target.anecdote.value
    event.target.anecdote.value = ''
    dispatch(createNewAnecdote(anecdoteContent))
    dispatch(setNotification(`new anecdote '${anecdoteContent}'`, 5))
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

export default AnecdoteForm
