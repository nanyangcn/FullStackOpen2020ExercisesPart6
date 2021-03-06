import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { votePlusOne } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

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
  const filter = useSelector((state) => state.filter)
  const dispatch = useDispatch()

  const vote = async (anecdote) => {
    dispatch(votePlusOne(anecdote))
    dispatch(setNotification(`you voted '${anecdote.content}'`, 5))
  }

  const anecdotesSorted = [...anecdotes]
  anecdotesSorted.sort((a, b) => b.votes - a.votes)
  const anecdotesFiltered = anecdotesSorted.filter((item) =>
    item.content.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div>
      {anecdotesFiltered.map((anecdote) => (
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
