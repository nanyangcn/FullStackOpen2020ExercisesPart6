import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const create = async (data) => {
  const newObject = {
    content: data,
    votes: 0,
  }
  const response = await axios.post(baseUrl, newObject)
  return response.data
}

const update = async (data) => {
  const updatedObject = data
  const response = await axios.put(`${baseUrl}/${data.id}`, updatedObject)
  return response.data
}

export default { getAll, create, update }
