import React from 'react'
import { useSelector } from 'react-redux'
import { showInitialState } from '../reducers/notificationReducer'

const Notification = () => {
  const notification = useSelector((state) => state.notification)
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
  }

  return (
    <div style={{ ...style, display: notification === null ? 'none' : '' }}>
      {notification}
    </div>
  )
}

export default Notification
