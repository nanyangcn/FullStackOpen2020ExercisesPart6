import React from 'react'

const Filter = () => {
  const handleChange = (event) => {
    console.log(event.target.value)
  }
  const style = {
    marginBottom: 10,
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

export default Filter
