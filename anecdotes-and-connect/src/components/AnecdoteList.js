import React from 'react'
import { connect } from 'react-redux'

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

const AnecdoteList = (props) => {
  const anecdotes = props.anecdotes
  const filter = props.filter

  const vote = async (anecdote) => {
    props.votePlusOne(anecdote)
    props.setNotification(`you voted '${anecdote.content}'`, 5)
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

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes,
    filter: state.filter,
  }
}

const mapDispatchToProps = {
  votePlusOne,
  setNotification,
}

const ConnectedAnecdoteList = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList)

export default ConnectedAnecdoteList
