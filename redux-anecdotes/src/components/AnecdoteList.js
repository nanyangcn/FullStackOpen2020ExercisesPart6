import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { votePlusOne } from '../reducers/anecdoteReducer'
import { voteMessage, resetMessage } from '../reducers/notificationReducer'

const Anecdote = ({ anecdote, handleVoteClick }) => {
  return (
    <div key={anecdote.id}>
      <div>{anecdote.content}</div>
      <div>
        has {anecdote.votes}
        <button onClick={handleVoteClick}>vote</button>
      </div>
    </div>
  )
}

const AnecdoteList = () => {
  const anecdotes = useSelector((state) => state.anecdotes)
  const dispatch = useDispatch()

  const vote = (anecdote) => {
    dispatch(votePlusOne(anecdote))
    dispatch(voteMessage(anecdote))
    setTimeout(() => dispatch(resetMessage()), 5000)
  }

  const anecdotesSorted = [...anecdotes]
  anecdotesSorted.sort((a, b) => b.votes - a.votes)

  return (
    <div>
      {anecdotesSorted.map((anecdote) => (
        <Anecdote
          key={anecdote.id}
          anecdote={anecdote}
          handleVoteClick={() => vote(anecdote)}
        />
      ))}
    </div>
  )
}

export default AnecdoteList
